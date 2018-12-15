
<template>
  <section>
    <PermissionComp
      v-if="level===0"
      :level="0"
    >
      <h2>超级管理员</h2>
    </PermissionComp>
    <PermissionComp
      v-if="level===1"
      :level="1"
    >
      <h2>普通管理员</h2>
    </PermissionComp>
    <section />
  </section>
</template>
<script>
const PermissionComp = {
  template: `
    <div>
      <slot></slot>
    </div>
  `,
  // render(h) {
  //   return h(
  //     'div',
  //     this.$slots.default,
  //   )
  // },
}
export default {
  components: {
    PermissionComp,
  },
  data() {
    return {
      level: 0,
    }
  },
}
</script>
