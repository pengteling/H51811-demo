import Router from 'vue-router'
import Vue from 'vue'
import Items from '@/Items.jsx'
import Tabs from '@/Tabs'
import Login from '@/Login'

Vue.use(Router)
const routes = [
  {

    path: '/',
    components: {
      default: Items,
      tabs: Tabs,
    },
    children: [
      {
        name: 'All',
        path: '',
        alias: 'all',
      },
      {
        name: 'Active',
        path: 'active',
      },
      {
        name: 'Completed',
        path: 'completed',
      },
      // {
      //   name: 'List',
      //   path: ':typename',
      // },
    ],
  },
  {
    name: 'Login',
    path: '/login',
    component: Login,
  },
]

export default new Router({
  mode: 'history',
  routes,

})
