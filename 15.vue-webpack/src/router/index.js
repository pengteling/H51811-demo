import Router from 'vue-router'
import Vue from 'vue'
import Main from '@/views/main'
import Header from '@/views/header'

import newSong from '@/views/newSong'


const Player = () => import('@/views/player')
const topList = () => import('@/views/topList')
// import Player from '@/views/player'
const list = () => import('@/views/list')
const plist = () => import('@/views/plist')
const cdList = () => import('@/views/cdList')
const search = () => import('@/views/search')

Vue.use(Router)
const routes = [
  {
    path: '/',
    components: {
      default: Main,
      header: Header,
    },
    // component: Main,
    children: [
      {
        name: 'newSong',
        component: newSong,
        path: '',
      },
      {
        name: 'player',
        component: Player,
        meta: {
          hasNoNav: true,
        },
        path: 'player',
      },
      {
        name: 'toplist',
        component: topList,
        path: 'toplist',
        // children: [
        //   {
        //     path: ':id',
        //     component: list,

        //   },
        // ],
      },
      {
        path: 'toplist/:id',
        component: list,
        name: 'list',
        meta: {
          hasNoNav: true,
        },

      },
      {
        path: 'plist',
        component: plist,
        name: 'plist',
      },
      {
        path: 'plist/:id',
        component: cdList,
        name: 'cdList',
        meta: {
          hasNoNav: true,
        },
      },
      {
        path: '/search',
        component: search,
        name: 'search',
      },
    ],
  },
]

export default new Router({
  mode: 'history',
  routes,
  linkExactActiveClass: 'cur',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { x: 0, y: 0 }
  },
})
