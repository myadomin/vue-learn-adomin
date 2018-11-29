import VueRouter from 'vue-router'
const Home = () => import('@/view/Home.vue')
const Test = () => import('@/view/Test.vue')
const DocTest = () => import('@/view/DocTest.vue')
const Counter = () => import('@/view/example/counter/Index')
const ShoppingCart = () => import('@/view/example/shoppingCart/Index')
const Todomvc = () => import('@/view/example/todomvc/Index')
const Chat = () => import('@/view/example/chat/Index')

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
