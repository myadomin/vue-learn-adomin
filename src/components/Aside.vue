<template>
  <div class="aside">
    <div class="logo">
      <img :src=logoUrl>
    </div>
    <div class="menu">
      <el-menu
        :default-active="$route.path"
        background-color="#001529"
        text-color="#ddd"
        active-text-color="#fff">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item index="/"><router-link to="/welcome">welcome</router-link></el-menu-item>
          <el-menu-item index="/mock"><router-link to="/mock">mock</router-link></el-menu-item>
          <el-menu-item index="/counter"><router-link to="/counter">counter</router-link></el-menu-item>
          <el-menu-item index="/shopping-cart"><router-link to="/shopping-cart">shopping-cart</router-link></el-menu-item>
          <el-menu-item index="/chat"><router-link to="/chat">chat</router-link></el-menu-item>
          <el-menu-item index="/todomvc"><router-link to="/todomvc" target="_blank">todomvc</router-link></el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      logoUrl: require('@img/logo.png')
    }
  },
  computed: {
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.logo {
  display: flex;
  align-items: center;
  height: 60px;
  background: #002140;
  justify-content: center;
}
img {
  width: 100px;
  height: 40px;
}
.el-menu {
  border-right: none;
  .el-menu-item {
    padding: 0px !important;
    text-indent: 40px;
      a {
        color: #fff;
        display: block;
        width: 100%;
        height: 100%;
      }
  }
}
.el-menu-item.is-active {
  background-color: #1890ff !important
}
</style>
