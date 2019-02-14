import VueRouter from 'vue-router'
const Home = () => import('@/page/Home')
const Login = () => import('@/page/Login')
const Welcome = () => import('@/page/welcome/Welcome')
const Mock = () => import('@/page/mock/Mock')
const Counter = () => import('@/page/example/counter/Index')
const ShoppingCart = () => import('@/page/example/shoppingCart/Index')
const Todomvc = () => import('@/page/example/todomvc/Index')
const Chat = () => import('@/page/example/chat/Index')

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
