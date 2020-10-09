// babel转换es6方法
import '@babel/polyfill'
import Vue from 'vue'
import '@src/styles/base.less'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/index.js'
import store from './store/index.js'
import App from './App.vue'
// mockjs拦截请求
import mock from './mock'

Vue.prototype.$dayjs = require('dayjs')
Vue.prototype.$http = require('./utils/axios.js').default
Vue.use(ElementUI)

/*eslint-disable*/
new Vue({
	el: '#app',
	router,
	store, 
	render: h => h(App)
});
/*eslint-disable*/