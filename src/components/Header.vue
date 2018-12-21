<template>
  <div class="header">
    <div>111</div>
    <div>
      <el-dropdown style="cursor: pointer">
        <span class="el-dropdown-link">
          <span>我的用户名</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>

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
  }
}
</script>

<style lang="stylus" scoped>
.header
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
</style>
