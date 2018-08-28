import VueRouter from 'vue-router'
import Home from '@/view/Home.vue'
import Test from '@/view/Test.vue'
import DocTest from '@/view/DocTest.vue'
import Example from '@/view/example/index.vue'
import Counter from '@/view/example/counter/index.vue'
import ShoppingCart from '@/view/example/shoppingCart/index.vue'
import Todomvc from '@/view/example/todomvc/index.vue'
import Chat from '@/view/example/chat/index.vue'

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
