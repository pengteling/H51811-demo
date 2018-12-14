<template>
  <div>
    <div :class="$style.child">
      <p>Child</p>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log(this.$style)
    /* eslint no-underscore-dangle:"off" */
    console.log(this.$options.__docs)
    // console.log(this.__docs)
  },
}
</script>

<style module>
.child{
  font-size: 50px;
}
</style>

<docs>
134564
</docs>
