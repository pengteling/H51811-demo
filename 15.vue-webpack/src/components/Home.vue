<template>
  <div>
    首页
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$router.push({ name: 'Map' })
    }, 3000)
  },
}
</script>
