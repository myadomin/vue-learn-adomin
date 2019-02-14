<template>
  <div class="home">
    <el-button type="primary" @click="getProducts">mock-getProducts</el-button>
    <el-button type="primary" @click="getProductsBuy">mock-getProductsBuy</el-button>
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
  computed: {
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
    }
  }
}
</script>

<style lang="less" scoped>
</style>
