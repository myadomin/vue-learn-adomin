import VueRouter from 'vue-router'
const Home = () => import('@src/page/Home')
const Login = () => import('@src/page/Login')
const Welcome = () => import('@src/page/welcome/Welcome')
const Mock = () => import('@src/page/mock/Mock')
const Counter = () => import('@src/page/example/counter/Index')
const ShoppingCart = () => import('@src/page/example/shoppingCart/Index')
const Todomvc = () => import('@src/page/example/todomvc/Index')
const Chat = () => import('@src/page/example/chat/Index')

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
