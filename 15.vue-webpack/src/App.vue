<template>
  <div id="demo">
    <section class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <input
          ref="ipt"
          type="text"
          class="new-todo"
          placeholder="what needs to be done?"
          @keyup.enter="addTodo"
        >
      </header>

      <section class="main">
        <input
          id="toggle-all"
          v-model="checkAll"
          type="checkbox"
          class="toggle-all"
        >
        <!-- label用来显示全选按钮 -->
        <label for="toggle-all" />
        <router-view
          :todos-view="todosView"
        ></router-view>
        <!-- <Items
          :todos-view="todosView"
        /> -->
        <!-- <ul class="todo-list">
          <Item
            v-for="(todo,index) in todosView"
            :key="index"
            :todo="todo"
            @delete-todo="deleteTodo"
          />
        </ul> -->
      </section>

      <!-- <Tabs
        :filter="filter"
        :items-left-count="itemsLeftCount"
        :is-have-completed="isHaveCompleted"
        @toggle-filter="toggleFilter"
        @clear-completed="clearCompleted"
      /> -->
      <router-view
        name="tabs"
      ></router-view>
    </section>
  </div>
</template>
<script>
import './style/app.scss'
// import Item from './components/Item.vue'
// import Tabs from './components/Tabs.vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
  // components: {
  //   Item,
  //   // Tabs,
  // },
  computed: {
    /* 双向绑定 计算属性 实现全选反选功能 */
    checkAll: {
      get() {
        return this.$store.getters.checkAll
      },
      /* eslint no-return-assign:"off" */
      /* eslint no-param-reassign:"off" */
      set(val) {
        // this.todos.forEach(todo => todo.isCompleted = val)
        this.$store.commit('TOGGLE_ALL', val)
      },
    },
    /* itemsLeftCount() {
      return this.todos.reduce((t, todo) => (todo.isCompleted ? t : t + 1), 0)
    }, */
    ...mapGetters(['todosView']),

    /* todosView() {
      if (this.filter === 'All') {
        return this.todos
      } if (this.filter === 'Active') {
        return this.todos.filter(todo => !todo.isCompleted)
      }
      return this.todos.filter(todo => todo.isCompleted)
    }, */
    /* isHaveCompleted() {
      return this.todos.some(todo => todo.isCompleted)
    }, */
  },
  watch: {
    // $route: {
    //   handler(route) {
    //     console.log('$route watch', route)
    //     console.log(this.filter, route.name);
    //     // this.$nextTick(() => this.filter = route.name)
    //     setTimeout(() => {
    //       this.filter = route.name
    //     }, 100)
    //     console.log(this.filter, route.name);
    //   },
    //   immediate: true,
    // },
  },
  updated() {
    this.saveData()
  },
  created() {
    // setTimeout(() => this.getData(), 3000)
    this.getData()
  },
  methods: {
    ...mapMutations({
      addTodoStore: 'ADD_TODO',
    }),

    addTodo() {
      if (this.$refs.ipt.value) {
        this.addTodoStore(
          {
            // content:e.target.value
            content: this.$refs.ipt.value,
            isCompleted: false,
          },
        )
        this.$refs.ipt.value = ''
      }
    },
    /* deleteTodo(todo) {
      this.todos.splice(this.todos.findIndex(item => item === todo), 1)
      // this.todos = this.todos.filter(item=>item !== todo)
    },
    toggleFilter(state) {
      this.filter = state
    },
    clearCompleted() {
      this.todos = this.todos.filter(todo => !todo.isCompleted)
    },
    */
    saveData() {
      // localStorage.setItem('filter', this.filter)
      // localStorage.setItem('todos', JSON.stringify(this.todos))
      this.$store.dispatch('saveData')
    },
    getData() {
      this.$store.commit('SET_DATA')
    },
  },
}
</script>
