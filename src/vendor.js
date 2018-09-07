import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
// 打开 mockjs拦截请求，返回mock数据
// 关闭 请求服务器数据
import mock from './mock'
Vue.prototype.$moment = require('moment')

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(ElementUI)
