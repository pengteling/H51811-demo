import Router from 'vue-router'
import Vue from 'vue'
import Main from '@/Main'
import Header from '@/Header'
import Player from '@/Player'

const List = () => import('@/List')
const Lrc = () => import('@/Lrc')

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
        path: '',
        name: 'Player',
        component: Player,
      },
      {
        path: 'list',
        name: 'List',
        component: List,
      },
      {
        path: 'lrc',
        name: 'Lrc',
        component: Lrc,
      },
    ],
  },
]

export default new Router({
  mode: 'history',
  routes,

})
