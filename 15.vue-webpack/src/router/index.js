import Router from 'vue-router'
import Vue from 'vue'
import Main from '@/views/main'
import Header from '@/views/header'

import newSong from '@/views/newSong'

const Player = () => import('@/views/player')
// import Player from '@/views/player'

Vue.use(Router)
const routes = [
  {
    path: '/',
    components: {
      default: Main,
      header: Header,
    },
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
    ],
  },
]

export default new Router({
  mode: 'history',
  routes,

})
