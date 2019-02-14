// babel转换es6方法
import 'babel-polyfill'
import Vue from 'vue'
import router from './router/index.js'
import store from './store/index.js'
import App from './App.vue'

/*eslint-disable*/
new Vue({
	el: '#app',
	router,
	store, 
	render: h => h(App)
});
/*eslint-disable*/