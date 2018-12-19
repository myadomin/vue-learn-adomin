<template>
  <div class="home">
    <el-button type="primary" @click="getProducts">mock-getProducts</el-button>
    <el-button type="primary" @click="getProductsBuy">mock-getProductsBuy</el-button>
    <el-button type="primary" @click="dispatch">vuex-dispatch</el-button>
    <span>{{this.number}}</span>
  </div>
</template>

<script>
import URL from '@/config/urls.js'
import { mapState } from 'vuex'

export default {
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
  created () {
  },
  methods: {
    getProducts () {
      this.$http.post(URL.product_all).then(res => {
        console.log(res.data, 11)
      })
    },
    getProductsBuy () {
      this.$http.get(URL.product_buy).then(res => {
        console.log(res.data, 22)
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
