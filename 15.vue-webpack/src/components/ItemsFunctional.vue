<template functional>
  <ul class="todo-list">
    <Item
      v-for="(todo,index) in props.todosView"
      :key="index"
      :todo="todo"
      @deleteTodo="listeners.deleteTodo"
    />
    <!-- @delete-todo="$liteners.deleteTodo" -->
    <!-- @delete-todo="deleteTodo" -->
  </ul>
</template>
<script>
import Vue from 'vue'
import Item from './Item'

Vue.component('Item', Item)

// export default {
//   components: {
//     Item,
//   },
//   render(h, context) {
//     return h('div', 'test')
//   },
// }
</script>
