import Vue from 'vue'
import App from './App2'
import router from './router'
import store from './store'

/* eslint no-new: "off" */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
