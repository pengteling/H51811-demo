<template>
  <ul class="todo-list">
    <Item
      v-for="(todo,index) in todosView"
      :key="index"
      :todo="todo"
      @deleteTodo="$listeners.deleteTodo"
    />
    <!-- @delete-todo="$liteners.deleteTodo" -->
    <!-- @delete-todo="deleteTodo" -->
  </ul>
</template>
<script>
import Item from '@/Item'

export default {
  components: {
    Item,
  },
  props: ['todosView'],
  mounted() {
    console.log(this.$listeners)
  },
  methods: {
    // deleteTodo(todo) {
    //   this.$emit('delete-todo', todo)
    // },
  },
}
</script>
