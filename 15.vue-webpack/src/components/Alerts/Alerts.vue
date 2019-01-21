<template>
  <div>
    <h3>这是一个公共组件</h3>
    <button @click="handler">
      点击
    </button>
  </div>
</template>
<script>
/* eslint no-alert:'off' */
export default {
  name: 'Alerts',
  methods: {
    handler() {
      alert('我是公共的插件')
    },
  },
}
</script>
