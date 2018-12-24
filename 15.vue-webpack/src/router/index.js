import Router from 'vue-router'
import Vue from 'vue'
import Main from '@/Main'
import Footer from '@/Footer'
import Home from '@/Home'
import Mobile from '@/Mobile'
// import TV from '@/TV'

const Mpointsmall = () => import('@/Mpointsmall')
const Category = () => import('@/Category')
const Cart = () => import('@/Cart')
const Me = () => import('@/Me')
const TV = () => import('@/TV')
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
      // {
      //   path: '',
      //   redirect: 'home',
      // },
      {
        path: '',
        component: Home,
        meta: {
          // depth: 2,
          index: 1,
        },
        children: [
          {
            name: 'Mobile',
            path: '',
            alias: ['mobile', 'phone', 'sj'],
            component: Mobile,
            meta: {
              // depth: 3,
              cate: 1,
              index: 1,
            },
          },
          {
            name: 'TV',
            path: 'tv',
            alias: ['home/tv'],
            component: TV,
            meta: {
              cate: 1,
              index: 2,
            },
          },
        ],
      },
      {
        name: 'Category',
        path: 'category',
        component: Category,
        meta: {
          index: 2,
        },
      },
      {
        name: 'Cart',
        path: 'cart',
        component: Cart,
        meta: {
          index: 3,
        },
      },
      {
        name: 'Me',
        path: 'me',
        component: Me,
        meta: {
          index: 4,
        },
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
