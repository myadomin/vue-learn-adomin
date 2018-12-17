// const axios = require('axios')
import axios from 'axios'

// 添加请求拦截器
axios.interceptors.request.use(config => {
  config.data = {
    token: 'sdfsdf'
  }
  return config
}, error => {
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})

export default axios
