import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import '@src/styles/base.less'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// mockjs拦截请求
import mock from './mock'

Vue.prototype.$dayjs = require('dayjs')
Vue.prototype.$http = require('./utils/axios.js').default

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(ElementUI)
