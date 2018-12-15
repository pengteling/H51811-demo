<template>
  <UiSwitch
    v-model="isShow"
    active-color="#13ce66"
    inactive-color="#ff4949"
    @change="handlerChange"
  />
  <!-- <ui-tree></ui-tree> -->
</template>
<script>
// import { UiSwitch } from './ui'
import '../dist/css/ui.css'
import { UiSwitch } from '../dist/js/ui.js'

export default {
  components: {
    UiSwitch,
  },
  data() {
    return {
      isShow: true,
    }
  },
  methods: {
    handlerChange() {
      console.log('触发了change事件')
    },
  },
}
</script>
