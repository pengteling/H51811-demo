import Router from 'vue-router'
import Vue from 'vue'
import Main from '@/views/main'
import Header from '@/views/header'

import newSong from '@/views/newSong'

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
    ],
  },
]

export default new Router({
  mode: 'history',
  routes,

})
