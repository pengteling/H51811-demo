import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'

const auth = {
  // 模拟登陆
  loginIn: () => true,
}
/* eslint no-unused-vars:'off' */
router.beforeEach((to, from, next) => {
  console.log('beforeEach')
  // next('/contact')
  console.log(to)
  // if (to.meta.requireAuth) {
  //   if (!auth.loginIn()) {
  //     next('/login')
  //   }
  // }
  if (to.matched.some(route => route.meta.requireAuth)) {
    if (!auth.loginIn()) {
      next('/login')
    }
  }
  next()
})

router.beforeResolve((to, from, next) => {
  console.log('beforeResolve')
  next()
})

router.afterEach((to, from) => {
  console.log('afterEach')
})
/* eslint no-new: "off" */
new Vue({
  el: '#app',
  components: {
    App,
  },
  router,
  store,
  // render: h => h(App),
  template: '<App />',
})
