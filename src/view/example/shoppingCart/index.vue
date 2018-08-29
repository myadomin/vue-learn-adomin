<template>
  <div>
    <h2>Shopping Cart Example</h2>
    <hr>
    <h3>Products</h3>
    <Products />
    <hr>
    <h3>Your Cart</h3>
    <Cart />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import Products from './Products.vue'
import Cart from './Cart.vue'

export default {
  data () {
    return {
    }
  },
  components: {
    Products,
    Cart
  },
  computed: {
    ...mapState('example/shopCart', [
      'products'
    ]),
    ...mapGetters('example/shopCart', [
      'cartProducts',
      'cartTotalPrice'
    ])
  },
  created () {
    this.getProducts()
  },
  methods: {
    ...mapActions('example/shopCart', [
      'getProducts',
      'addToCart',
      'checkout'
    ])
  }
}
</script>

<style scoped>
hr {
  margin: 20px 0
}
</style>
