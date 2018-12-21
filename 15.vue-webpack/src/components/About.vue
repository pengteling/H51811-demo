<template>
  <transition name="slider">
    <div>
      关于我们
    </div>
  </transition>
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
<style scoped>
.slider-enter-active,.slider-leave-active{
  transition: all .5s;
}
.slider-enter{
  transform: translate3d(100%,0,0)
}
.slider-leave-to{
  transform: translate3d(-100%,0,0)
}
.sec1 > div {
  position: absolute;
  width: 100%;
}
</style>
