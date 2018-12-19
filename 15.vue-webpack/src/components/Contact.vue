<template>
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
</template>
<script>
export default {
  mounted() {
    console.log(this.$route)
  },
}
</script>
