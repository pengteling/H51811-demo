import Router from 'vue-router'
import Vue from 'vue'
import Home from '@/Home'
import About from '@/About'
import Contact from '@/Contact'
import User from '@/User'
import Map from '@/Map'
import Tel from '@/Tel'
import Login from '@/Login'

Vue.use(Router)
const routes = [
  {
    name: 'Home',
    path: '/',
    // component: Home,
    components: {
      default: Home,
      header: {
        name: 'Header',
        template: '<header>头部</header>',
      },
      footer: {
        name: 'Footer',
        template: '<footer>底部</footer>',
      },
    },
  },
  {
    name: 'About',
    path: '/about',
    component: About,
    beforeEnter: (to, from, next) => {
      // ...
      console.log('beforeEnter')
      next()
    },
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
        meta: {
          requireAuth: true,
        },
      },
    ],
  },
  {
    name: 'User',
    path: '/user/:userid',
    meta: {
      requireAuth: true,
    },
    props: true,
    // props: { userid: 5, str: '用户名5' },
    // props: route => ({
    //   userid: route.params.userid,
    //   pid: route.params.pid,
    //   str: '用户名',
    //   sokey: route.query.sokey,
    // }),
    component: User,
    children: [
      {
        path: 'photo/:pid',
        // meta: {
        //   requireAuth: true,
        // },
        component: {
          template: '<div>照片 {{ $route.params.pid}} </div>',
        },
      },
    ],
  },
  {
    path: '/a',
    // redirect: '/b',
    alias: ['/c', '/d', '/e/f/g'],
    component: {
      template: '<div>aaaa</div>',
    },
  },
  {
    path: '/b',
    component: {
      template: '<div>bbbb</div>',
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
  scrollBehavior(to, from, savedPosition) {
    /* console.log(savedPosition)
    // return { x: 0, y: 0 }
    if (savedPosition) {
      return savedPosition
    }
    return { x: 0, y: 0 } */
    /* eslint consistent-return:'off' */
    /* if (to.hash) {
      return {
        selector: to.hash,
      }
    } */
  },
})
