import Vue from 'vue';
import router from './router/index.js';
import store from './store/index.js';
import App from './App.vue';

new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
});