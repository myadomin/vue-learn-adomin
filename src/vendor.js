import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
// mockjs拦截请求
import mock from './mock'
Vue.prototype.$dayjs = require('dayjs')

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(ElementUI)
