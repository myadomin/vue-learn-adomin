<template>
  <div>
    <el-button @click="testget">testget</el-button>
    <el-button @click="testpost">testpost</el-button>
  </div>
</template>

<script>
import urls from '@/config/urls'
export default {
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    testget () {
      this.$http.get(urls.testget).then(res => {
        console.log(res.data)
      })
    },
    testpost () {
      this.$http.post(urls.testpost, {
        begin_date: '2018-12-12',
        end_date: '2018-12-18'
      }).then(res => {
        console.log(res.data)
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>

