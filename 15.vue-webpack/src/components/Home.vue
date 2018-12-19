<template>
  <div>
    首页
  </div>
</template>

<script>
export default {
  // mounted() {
  //   // setTimeout(() => {
  //   //   this.$router.push({ name: 'Map' }, () => {
  //   //     console.log('push done')
  //   //   }, () => {
  //   //     console.log('push faild')
  //   //   })
  //   // }, 3000)
  // },
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
  beforeRouteLeave(to, from, next) {
    // ...
    console.log('Home beforeRouteLeave')
    next()
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  mounted() {
    console.log('mounted')
  },
}
</script>
