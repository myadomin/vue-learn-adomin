import axios from 'axios'

// 允许跨域传输cookie
axios.defaults.withCredentials = true
// 添加请求拦截器
axios.interceptors.request.use(config => {
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
