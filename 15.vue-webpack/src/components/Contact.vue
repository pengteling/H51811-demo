<template>
  <transition name="slider">
    <div>
      联系我们
      <!-- <a href="#/contact">
        电子地图
      </a> -->
      <router-link :to="{name:'Map'}">
        电子地图
      </router-link>
      <!-- <a href="#/contact/tel">
        联系电话
      </a> -->
      <router-link :to="{name:'Tel'}">
        联系电话
      </router-link>
      <RouterView />
    </div>
  </transition>
</template>
<script>
export default {
  mounted() {
    console.log(this.$route)
  },
}
</script>
<style scoped>
.slider-enter-active,.slider-leave-active{
  transition: all .5s;
}
.slider-enter{
  transform: translate3d(-100%,0,0)
}
.slider-leave-to{
  transform: translate3d(100%,0,0)
}
.sec1 > div {
  position: absolute;
  width: 100%;
}
</style>
