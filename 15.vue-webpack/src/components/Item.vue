<template>
  <li :class="{editing: isEditing, completed:todo.isCompleted}">
    <div class="view">
      <input
        v-model="todo.isCompleted"
        type="checkbox"
        class="toggle"
      >
      <label @dblclick="editTodo">
        {{ todo.content }}
      </label>
      <button
        class="destroy"
        @click="deleteTodo"
      />
    </div>
    <input
      v-show="isEditing"
      ref="iptEdit"
      v-model.lazy="todo.content"
      type="text"
      class="edit"
      @keyup.enter="doneEdit"
      @blur="doneEdit"
      @keydown.esc="cancelEdit"
    >
  </li>
</template>
<script>
export default {
  name: 'Item',
  /* eslint vue/require-prop-types:"off" */
  props: ['todo'],
  data() {
    return {
      isEditing: false,
      // cache:this.todo.content
    }
  },
  methods: {
    deleteTodo() {
      this.$emit('deleteTodo', this.todo)
    },
    editTodo() {
      this.isEditing = true
      this.cache = this.todo.content
      this.$nextTick(() => this.$refs.iptEdit.focus())
    },
    doneEdit() {
      this.isEditing = false
    },
    cancelEdit() {
      // 取消修改
      this.$refs.iptEdit.value = this.cache
      this.isEditing = false
      // setTimeout(()=>this.todo.content = this.cache,1000)
      // this.$nextTick(()=>this.todo.content= this.cache)
    },
  },

}
</script>
