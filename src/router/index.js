import VueRouter from 'vue-router'
import Home from '@/view/Home.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

export default router
