import Router from 'vue-router'
import Vue from 'vue'
import Home from '@/Home'
import About from '@/About'
import Contact from '@/Contact'
import User from '@/User'
import Map from '@/Map'
import Tel from '@/Tel'

Vue.use(Router)
const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'About',
    path: '/about',
    component: About,
  },
  {
    path: '/contact',
    component: Contact,
    children: [
      {
        name: 'Map',
        // /contact/map
        // 二级默认路由
        path: '',
        component: Map,
      },
      {
        name: 'Tel',
        // /contact/Tel
        path: 'tel',
        component: Tel,
      },
    ],
  },
  {
    name: 'User',
    path: '/user/:id',
    component: User,
  },

]

export default new Router({
  mode: 'history',
  routes,
})
