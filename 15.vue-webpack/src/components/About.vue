<template>
  <div>
    关于我们
  </div>
</template>
<script>
export default {
  beforeRouteEnter(to, from, next) {
    // ...
    console.log('beforeRouteEnter')
    console.log(to)
    console.log(from)
    next((vm) => {
      // 这里可以操作vm
      console.log('mounted之后的回调')
    })
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  mounted() {
    console.log('mounted')
  },
}
</script>
