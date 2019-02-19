import Router from 'vue-router'
import Vue from 'vue'
import Main from '@/views/main'
import Header from '@/views/header'

import newSong from '@/views/newSong'


const Player = () => import('@/views/player')
const topList = () => import('@/views/topList')
// import Player from '@/views/player'
const list = () => import('@/views/list')

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

      },
    ],
  },
]

export default new Router({
  mode: 'history',
  routes,
  linkExactActiveClass: 'cur',
})
