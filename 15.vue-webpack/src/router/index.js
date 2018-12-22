import Router from 'vue-router'
import Vue from 'vue'
import Main from '@/Main'
import Footer from '@/Footer'
import Home from '@/Home'
import Mobile from '@/Mobile'
import TV from '@/TV'

const Mpointsmall = () => import('@/Mpointsmall')
const Category = () => import('@/Category')
const Cart = () => import('@/Cart')
const Me = () => import('@/Me')
// const Main = () => import('@/Main')
// const Footer = () => import('@/Footer')

Vue.use(Router)
const routes = [
  {
    path: '/',
    components: {
      default: Main,
      footer: Footer,
    },
    children: [
      {
        path: '',
        component: Home,
        children: [
          {
            name: 'Mobile',
            path: '',
            alias: ['mobile', 'phone', 'sj'],
            component: Mobile,
          },
          {
            name: 'TV',
            path: 'tv',
            alias: ['home/tv'],
            component: TV,
          },
        ],
      },
      {
        name: 'Category',
        path: 'category',
        component: Category,
      },
      {
        name: 'Cart',
        path: 'cart',
        component: Cart,
      },
      {
        name: 'Me',
        path: 'me',
        component: Me,
      },
    ],
  },
  {
    name: 'Mpointsmall',
    path: '/mpointsmall',
    component: Mpointsmall,
  },
]

export default new Router({
  mode: 'history',
  routes,

})
