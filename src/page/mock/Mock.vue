<template>
  <div class="home">
    <el-button type="primary" @click="getProducts">mock-getProducts</el-button>
    <el-button type="primary" @click="getProductsBuy">mock-getProductsBuy</el-button>
    <el-button type="primary" @click="dispatch">vuex-dispatch</el-button>
    <span>{{this.number}}</span>
  </div>
</template>

<script>
import urls from '@src/config/urls.js'
import { mapState } from 'vuex'

export default {
  components: {
  },
  data () {
    return {
    }
  },
  props: [],
  computed: {
    ...mapState('counter', [
      'number'
    ])
  },
  watch: {

  },
  created () {
  },
  methods: {
    getProducts () {
      this.$http.post(urls.product_all).then(res => {
        console.log('我是mock的数据', res.data)
      })
    },
    getProductsBuy () {
      this.$http.get(urls.product_buy).then(res => {
        console.log('我是mock的数据', res.data)
      })
    },
    dispatch () {
      this.$store.dispatch('counter/increment', { num: 1 })
    }
  }
}
</script>

<style lang="less" scoped>
</style>
