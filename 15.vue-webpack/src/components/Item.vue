<template>
  <li :class="{editing: isEditing, completed:todo.isCompleted}">
    <div class="view">
      <input
        v-model="isCompleted"
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
      :value="todo.content"
      type="text"
      class="edit"
      @change="handlerInput"
      @keyup.enter="doneEdit"
      @blur="doneEdit"
      @keydown.esc="cancelEdit"
    >
  </li>
</template>
<script>
import { mapMutations } from 'vuex'

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
  computed: {
    isCompleted: {
      get() {
        return this.todo.isCompleted
      },
      set() {
        this.EDIT_TODO(
          {
            oldTodo: this.todo,
            newTodo: Object.assign({}, this.todo, { isCompleted: !this.todo.isCompleted }),
          },
        )
      },
    },
  },
  methods: {
    ...mapMutations(['DELETE_TODO', 'EDIT_TODO']),
    handlerInput() {
      //
      // this.EDIT_TODO(
      //   Object.assign({}, this.todo, { content: this.$refs.iptEdit.value }),
      // )
      this.EDIT_TODO({
        oldTodo: this.todo,
        newTodo: Object.assign({}, this.todo, { content: this.$refs.iptEdit.value }),

      })
    },
    deleteTodo() {
      // this.$emit('deleteTodo', this.todo)
      this.DELETE_TODO(this.todo)
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
