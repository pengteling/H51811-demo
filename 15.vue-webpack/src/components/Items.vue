<!--<template>
  <ul class="todo-list">
    <Item
      v-for="(todo,index) in todosView"
      :key="index"
      :todo="todo"
    />

  </ul>
</template>-->
<script>
import Item from '@/Item'
import { mapGetters } from 'vuex'

export default {
  functional: true,
  components: {
    Item,
  },
  computed: {
    ...mapGetters(['todosView']),
  },
  // props: ['todosView'],
  // mounted() {
  //   console.log(this.$listeners)
  // },

  methods: {
    // deleteTodo(todo) {
    //   this.$emit('delete-todo', todo)
    // },
  },
  render(h, context) {
    // console.log(context)
    // console.log(mapGetters(['todosView']))
    // const { todosView } = { ...mapGetters(['todosView']) }
    // console.log(todosView())
    console.log(context.parent.$store.getters.todosView)
    const todosView2 = context.parent.$store.getters.todosView
    return (
      <ul class="todo-list">
      {
        todosView2.map(todo => (
          <Item todo={todo}></Item>
        ))
      }
      </ul>
    )
  },
}
</script>
