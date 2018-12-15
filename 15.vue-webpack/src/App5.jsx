
// const PermissionComp = {
//   render() {
//     console.log(this.$slots)
//     return this.$slots.default[0]
//   },
// }
const PermissionComp = {
  functional: true,
  render(h, { slots }) {
    console.log(slots)
    return slots().default[0]
  },
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
  render() {
    return (
      <section>
        {
          this.level === 0
            ? <PermissionComp level={0}>
                <h2>超级管理员</h2>
              </PermissionComp>
            : <PermissionComp level={1}>
                <h2>普通管理员</h2>
              </PermissionComp>

        }


      </section>

    )
  },
}
