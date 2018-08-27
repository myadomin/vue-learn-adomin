<template>
  <div>
    <div class="home">
        <img src="../assets/logo.png">
        <el-button type="primary" @click="getProducts">getProducts</el-button>
        <el-button type="primary" @click="getProductsBuy">getProductsBuy</el-button>
        <el-button type="primary" @click="dispatch">dispatch</el-button>
        <span>{{this.number}}</span>
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
      this.$store.dispatch('counter/increment', {num: 1})
    }
  }
}
</script>

<style lang="stylus" scoped>
.home
    img
        display block
        margin: 200px auto 0
</style>

