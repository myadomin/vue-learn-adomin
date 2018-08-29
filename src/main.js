import Vue from 'vue'
import router from './router/index.js'
import store from './store/index.js'
import App from './App.vue'

// 打开 mockjs拦截请求，返回mock数据
// 关闭 请求服务器数据
import mock from './mock'
Vue.prototype.$moment = require('moment')

/*eslint-disable*/
new Vue({
	el: '#app',
	router,
	store, 
	render: h => h(App)
});
/*eslint-disable*/