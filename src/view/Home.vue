<template>
  <div>
    <div class="home">
        <el-button type="primary" @click="getProducts">getProducts</el-button>
        <el-button type="primary" @click="getProductsBuy">getProductsBuy</el-button>
        <el-button type="primary" @click="dispatch">dispatch</el-button>
        <span>{{this.number}}</span>
    </div>
    <div class="examples" style="margin-top: 50px">
      <h2>Vuex Examples</h2>
      <ul>
        <li><router-link to="/counter">counter</router-link></li>
        <li><router-link to="/shopping-cart">shoppingCart</router-link></li>
        <li><router-link to="/chat">chat</router-link></li>
        <li><router-link to="/todomvc" target="_blank">todomvc</router-link></li>
        <li><router-link to="/test">test</router-link></li>
        <li><router-link to="/docTest">docTest</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
import API from '@/api/index.js'
import { mapState } from 'vuex'

export default {
  name: 'home',
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState('counter', [
      'number'
    ])
  },
  methods: {
    getProducts () {
      API.getProducts().then((res) => {
        console.log(res, 11)
      })
    },
    getProductsBuy () {
      API.getProductsBuy().then((res) => {
        console.log(res, 22)
      })
    },
    dispatch () {
      this.$store.dispatch('counter/increment', { num: 1 })
    }
  }
}
</script>

<style lang="stylus" scoped>
// .home
</style>
