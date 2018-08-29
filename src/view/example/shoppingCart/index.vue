<template>
  <div>
    <h2>Shopping Cart Example</h2>
    <hr>
    <h3>Products</h3>
    <ul>
      <li v-for="product in products" :key="product.id">
        <span>{{ product.title }} - ${{ product.price }}</span>
        <button>Add to cart</button>
      </li>
    </ul>
    <hr>
    <h3>Your Cart</h3>
    <ul>
      <li v-for="product in products" :key="product.id">
        <span>{{ product.title }} - ${{ product.price }} * 2</span>
      </li>
    </ul>
    <p>Please add some products to cart.</p>
    <p>Total: $0.00</p>
    <button>Checkout</button>
  </div>
</template>

<script>
import API from './api/shop'
export default {
  data () {
    return {
      products: []
    }
  },
  created () {
    API.getProducts((products) => {
      this.products = products
    })
  }
}
</script>

<style scoped>
hr {
  margin: 20px 0
}
li {
  margin: 10px 0
}
</style>
