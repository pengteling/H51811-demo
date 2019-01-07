import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  // strict: process.env.NODE_ENV !== 'production',
  state: {
    count: 1,
    arr: [1, 2, 3],
    obj: {
      id: 1,
      name: 'zs',
      sex: 'male',
    },
    users: [
      { id: 1, name: 'zs' },
      { id: 2, name: 'ls' },
      { id: 3, name: 'ww' },

    ],
  },
  getters: {
    user2(state) {
      return state.users[1]
    },
    userWho: state => id => state.users.filter(user => user.id === id),
    user2Male(state, getters) {
      return { ...getters.user2, sex: 'male' }
    },
    // userWho(state) {
    //   return (id) => {
    //     state.users.filter(user => user.id === id)
    //   }
    // },
  },
})
