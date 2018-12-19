import VueRouter from 'vue-router'
const Home = () => import('@/view/Home')
const Login = () => import('@/view/Login')
const Welcome = () => import('@/view/welcome/Welcome')
const Mock = () => import('@/view/mock/Mock')
const Test = () => import('@/view/test/Test')
const Counter = () => import('@/view/example/counter/Index')
const ShoppingCart = () => import('@/view/example/shoppingCart/Index')
const Todomvc = () => import('@/view/example/todomvc/Index')
const Chat = () => import('@/view/example/chat/Index')

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
        path: '/test',
        component: Test
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
