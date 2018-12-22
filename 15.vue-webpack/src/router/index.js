import Router from 'vue-router'
import Vue from 'vue'
import Items from '@/Items.jsx'
import Tabs from '@/Tabs'
import Login from '@/Login'

Vue.use(Router)
const routes = [
  {
    name: 'List',
    path: '/',
    components: {
      default: Items,
      tabs: Tabs,
    },
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
