import API from '@/page/example/shoppingCart/api/shop'

export default {
  namespaced: true,

  getters: {
    cartTotalPrice (state, getters) {
      return state.cartProducts.reduce((current, next) => {
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
    // 通过productId 改变state.cartProducts数据
    addToCart (state, productId) {
      const cartItem = state.cartProducts.find(item => item.id === productId)
      const productItem = state.products.find(item => item.id === productId)
      if (cartItem) {
        // 此产品已在购物车中
        cartItem.quantity++
      } else {
        // 此产品没在购物车中
        state.cartProducts.push({
          id: productItem.id,
          quantity: 1,
          title: productItem.title,
          price: productItem.price
        })
      }
      // 对应产品库存减1
      productItem.inventory--
    },
    // 清空购物车
    clearCartItems (state, payload) {
      state.cartProducts = payload
    }
  },

  actions: {
    // 刷新进入获取所有product
    getProducts ({ state, commit }) {
      API.getProducts((products) => {
        commit('getProducts', products)
      })
    },
    // 添加到购物车
    addToCart ({ commit }, productId) {
      commit('addToCart', productId)
    },
    // 结算
    checkout ({ commit, state }) {
      const { cartProducts } = state
      API.buyProducts(cartProducts, () => {
        window.alert('success')
        commit('clearCartItems', [])
      }, () => {
        window.alert('fail')
      })
    }
  }
}
