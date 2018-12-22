<template>
  <div>
    <transition :name="effect">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'Main',
  data() {
    return {
      effect: 'slider',
    }
  },
  beforeRouteUpdate(to, from, next) {
    // console.log('beforeRouteUpdate--Main.vue')
    // console.log(to)
    // console.log(from)
    if (to.matched[1].meta.index > from.matched[1].meta.index) {
      this.effect = 'slider2'
    } else {
      this.effect = 'slider'
    }
    next()
  },
}
</script>


<style lang="scss">
.slider-enter-active,.slider-leave-active{
  position: absolute;
  transition: all .5s;
}
.slider-enter{
  opacity: 0;
  transform: translate3d(-100%,0,0)
}
.slider-leave-to{
  opacity: 0;
  transform: translate3d(100%,0,0)
}


.slider2-enter-active,.slider2-leave-active{
  position: absolute;
  transition: all .5s;
}
.slider2-enter{
  opacity: 0;
  transform: translate3d(100%,0,0)
}
.slider2-leave-to{
  opacity: 0;
  transform: translate3d(-100%,0,0)
}
</style>
