import VueRouter from 'vue-router'
import Home from '@/view/Home.vue'
import Test from '@/view/Test.vue'
import DocTest from '@/view/DocTest.vue'
import Example from '@/view/example/index.vue'
import Counter from '@/view/example/counter/Index'
import ShoppingCart from '@/view/example/shoppingCart/Index'
import Todomvc from '@/view/example/todomvc/Index'
import Chat from '@/view/example/chat/Index'

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
  },
  {
    path: '/example',
    name: 'example',
    component: Example
  },
  {
    path: '/counter',
    component: Counter
  },
  {
    path: '/shopping-cart',
    component: ShoppingCart
  },
  {
    path: '/todomvc',
    component: Todomvc
  },
  {
    path: '/chat',
    component: Chat
  }
]

const router = new VueRouter({
  routes
})

export default router
