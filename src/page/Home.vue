<template>
  <div>
    <el-container>
      <el-aside>
        <Aside />
      </el-aside>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Aside from '@/components/Aside.vue'
export default {
  components: {
    Aside,
    Header
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus">
.el-container
  background-color #f0f2f5
.el-aside
  width 210px !important
  min-height: 100vh
  box-shadow: 4px 0 6px rgba(0,21,41,.35)
  position: relative
  z-index: 10;
  background #001529
.el-header
  height: 60px
  padding: 0
  background: #fff
  box-shadow: 0 3px 4px rgba(0,21,41,.08)
  position: relative
  padding: 0 20px
.el-main
  padding 20px
</style>
