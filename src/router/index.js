import VueRouter from 'vue-router'
import Home from '@/view/Home.vue'
import Test from '@/view/Test.vue'
import DocTest from '@/view/DocTest.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: Home
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  },
  {
    path: '/doctest',
    name: 'doctest',
    component: DocTest
  }
]

const router = new VueRouter({
  routes
})

export default router
