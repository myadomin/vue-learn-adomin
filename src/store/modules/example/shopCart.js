import API from '@/view/example/shoppingCart/api/shop'

export default {
  namespaced: true,

  getters: {
    cartProducts (state) {
      return state.cartProducts.map(({ id, quantity }) => {
        const product = state.products.find(product => product.id === id)
        return {
          id,
          quantity,
          title: product.title,
          price: product.price
        }
      })
    },
    cartTotalPrice (state, getters) {
      return getters.cartProducts.reduce((current, next) => {
        return current + next.price * next.quantity
      }, 0).toFixed(2)
    }
  },

  state: {
    products: [],
    cartProducts: []
  },

  mutations: {
    getProducts (state, products) {
      state.products = products
    },
    addToCart (state, productId) {
      const cartItem = state.cartProducts.find(item => item.id === productId)
      if (cartItem) {
        // 此产品已在购物车中
        cartItem.quantity++
      } else {
        // 此产品没在购物车中
        state.cartProducts.push({
          id: productId,
          quantity: 1
        })
      }
      // 对应产品库存减1
      const product = state.products.find(item => item.id === productId)
      product.inventory--
    },
    setCartItems (state, payload) {
      state.cartProducts = payload
    }
  },

  actions: {
    getProducts ({ state, commit }) {
      API.getProducts((products) => {
        commit('getProducts', products)
      })
    },
    addToCart ({ commit }, productId) {
      commit('addToCart', productId)
    },
    checkout ({ commit, state }) {
      const { cartProducts } = state
      API.buyProducts(cartProducts, () => {
        window.alert('success')
        commit('setCartItems', [])
      }, () => {
        window.alert('fail')
      })
    }
  }
}
