import Router from 'vue-router'
import Vue from 'vue'
import Main from '@/views/main'


Vue.use(Router)
const routes = [
  {
    path: '/',
    components: {
      default: Main,
    },
    children: [

    ],
  },
]

export default new Router({
  mode: 'history',
  routes,

})
