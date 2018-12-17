<template>
  <div>
    联系我们
    <a href="#/contact">
      电子地图
    </a>
    <a href="#/contact/tel">
      联系电话
    </a>
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
