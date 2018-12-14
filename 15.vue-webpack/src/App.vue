<template>
  <div :class="classNames.app">
    <img src="./images/123.png">
    <!-- <img src="~vue/images/123.png"> -->
    <Child />
  </div>
</template>
<script>
// import './node_modules/bootstrap/css/bootstrap.css'
// import '~bootstrap/css/bootstrap.css'

import Child from './components/Child.vue'
import classNames from './style/app.css'

export default {
  components: {
    Child,
  },
  // data() {
  //   return {
  //     classNames,
  //   }
  // },
  computed: {
    classNames() {
      return classNames
    },
  },
  mounted() {
    console.log(this.$style)
    console.log(classNames)
  },
}
</script>
