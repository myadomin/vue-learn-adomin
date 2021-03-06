import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('@src/page/Home')
const Login = () => import('@src/page/Login')
const Welcome = () => import('@src/page/welcome/Welcome')
const Mock = () => import('@src/page/mock/Mock')
const Counter = () => import('@src/page/counter/Index')
const ShoppingCart = () => import('@src/page/shoppingCart/Index')
const Todomvc = () => import('@src/page/todomvc/Index')
const Chat = () => import('@src/page/chat/Index')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/',
        component: Welcome
      },
      {
        path: 'welcome',
        component: Welcome
      },
      {
        path: '/mock',
        component: Mock
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
        path: '/chat',
        component: Chat
      }
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/todomvc',
    component: Todomvc
  }
]

const router = new VueRouter({
  routes
})

export default router
