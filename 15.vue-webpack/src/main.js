import Vue from 'vue'
import App from './App'
import router from './router'

/* eslint no-new: "off" */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
