export default {
  namespaced: true,
  state: {
    count: 1,
    msg: 'hi,moduleB',
  },
  getters: {
    bCount(state) {
      return state.count * 5
    },
  },
  /* eslint no-param-reassign:'off' */
  mutations: {
    bAddCount(state) {
      state.count += 1
    },
  },
  actions: {
    actionB({ commit }) {
      commit('bAddCount')
    },
  },
}
