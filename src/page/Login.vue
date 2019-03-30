<template>
  <el-container class="wrap-container">
    <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="80px" class="loginForm">
      <div class="title">xxxx - 后台管理系统</div>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login()" class="btn-login">登录</el-button>
      </el-form-item>
    </el-form>
  </el-container>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'change' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'change' }
        ]
      }
    }
  },
  computed: {
  },
  created () {
  },
  methods: {
    login () {
      this.$refs['loginForm'].validate((valid) => {
        if (valid) {
          console.log(this.loginForm.username, this.loginForm.password)
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.wrap-container {
  height: 100vh;
  background: #f0f2f5;
}
.loginForm {
  width: 400px;
  margin: 0 auto;
}
.title {
  text-align: center;
  margin: 200px 0 30px 0;
  font-size: 18px;
}
.btn-login {
  width: 100%;
}
</style>
