<template>
  <div>
    <nav class>
      <router-link :to="{name:'Mobile'}">
        手机
      </router-link>
      <router-link :to="{name:'TV'}">
        电视
      </router-link>
    </nav>
    <transition :name="effect">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {
      effect: 'slider',
    }
  },
  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate--Home.vue')
    console.log(to)
    console.log(from)
    if (to.meta.index > from.meta.index) {
      this.effect = 'slider2'
    } else {
      this.effect = 'slider'
    }
    next()
  },
}
</script>

<style lang="scss" scoped>
.router-link-exact-active{
  color:red
}
</style>
