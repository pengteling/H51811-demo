

<script>
const Child = {
  functional: true,
  render(h, context) {
    console.log(context)
    return h('div', context.props.name)
  },
}
// import Child from '@/FunctionChild.vue'

export default {
  components: {
    Child,
  },
  data() {
    return {
      list: [
        { name: 'zs', age: 18 },
        { name: 'ls', age: 17 },
      ],
    }
  },

}
</script>

<template>
  <section>
    <Child
      v-for="stu in list"
      :key="stu.name"
      v-bind="stu"
    />
  </section>
</template>
