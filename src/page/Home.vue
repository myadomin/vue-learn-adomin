<template>
  <div>
    <el-container class="wrap-container">
      <el-aside class="wrap-aside">
        <Aside />
      </el-aside>
      <el-container class="wrap-container">
        <el-header class="wrap-header">
          <Header />
        </el-header>
        <el-main class="wrap-main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from '@src/components/Header.vue'
import Aside from '@src/components/Aside.vue'
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

<style lang="less" scoped>
.wrap-container {
  background-color: #f0f2f5;
}
.wrap-aside {
  width: 210px !important;
  min-height: 100vh;
  box-shadow: 4px 0 6px rgba(0,21,41,.35);
  position: relative;
  z-index: 10;
  background: #001529;
}
.wrap-header {
  height: 60px;
  padding: 0;
  background: #fff;
  box-shadow: 0 3px 4px rgba(0,21,41,.08);
  position: relative;
  padding: 0 20px;
}
.wrap-main {
  padding: 20px;
}
</style>
