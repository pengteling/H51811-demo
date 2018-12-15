import Vue from 'vue'
import App from './App1.jsx'
/* eslint no-new: "off" */
new Vue({
  el: '#app',
  components: {
    App,
  },
  // render: h => h(App),
  template: '<App />',
})
