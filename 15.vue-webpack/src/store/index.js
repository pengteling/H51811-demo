import Vuex from 'vuex'
import Vue from 'vue'
// import { ADD_COUNT, ADD_COUNT_STEP, ADD_COUNT_STEP2 } from './mutation-types'

import * as types from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    todos: [],
    filter: 'All',
  },
  getters: {
    todosView(state) {
      if (state.filter === 'All') {
        return state.todos
      } if (state.filter === 'Active') {
        return state.todos.filter(todo => !todo.isCompleted)
      }
      return state.todos.filter(todo => todo.isCompleted)
    },
    itemsLeftCount(state) {
      return state.todos.reduce((t, todo) => (todo.isCompleted ? t : t + 1), 0)
    },
    isHaveCompleted(state) {
      return state.todos.some(todo => todo.isCompleted)
    },
  },
  mutations: {
    [types.ADD_TODO](state, payload) {
      state.todos.unshift(payload)
    },
    [types.DELETE_TODO](state, todo) {
      state.todos.splice(state.todos.findIndex(item => item === todo), 1)
    },
    [types.EDIT_TODO](state, payload) {
      /* eslint no-param-reassign:'off' */
      state.todos = state.todos.map((item) => {
        if (item === payload.oldTodo) {
          return Object.assign({}, item, payload.newTodo)
        }
        return item
      })
    },
    [types.TOGGLE_FILTER](state, filter) {
      state.filter = filter
    },
    [types.CLEAR_COMPLETED](state) {
      state.todos = state.todos.filter(todo => !todo.isCompleted)
    },
  },

})
