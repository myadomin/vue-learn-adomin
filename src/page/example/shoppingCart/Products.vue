<template>
  <ul>
    <li v-for="product in products" :key="product.id">
      <span>{{ product.title }} - ${{ product.price }} - {{ product.inventory }}</span>
      <button @click="addToCart(product.id)" :disabled="product.inventory === 0">Add to cart</button>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState('example/shopCart', [
      'products'
    ])
  },
  created () {
    this.getProducts()
  },
  methods: {
    ...mapActions('example/shopCart', [
      'getProducts',
      'addToCart'
    ])
  }
}
</script>

<style scoped>
li, p {
  margin: 10px 0
}
</style>
