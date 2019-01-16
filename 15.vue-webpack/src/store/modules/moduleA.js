import moduleB from './moduleB'
import mutationA from './mutationA'

export default {
  namespaced: true,
  state: {
    count: 33,
    msg: 'hi,moduleA',
  },
  getters: {
    aCount(state, getters, rootState, rootGetters) {
      return state.count * 3 + rootState.count + rootState.moduleA.moduleB.count + rootGetters.countRoot + rootGetters['moduleA/moduleB/bCount']
    },
    aCount2(state) {
      return state.count * 4
    },
  },
  /* eslint no-param-reassign:'off' */
  // mutations: {
  //   aAddCount(state) {
  //     state.count += 1
  //   },
  // },

  mutations: mutationA,
  actions: {
    actionModuleA1({
      state, getters, commit, dispatch, rootGetters, rootState,
    }, payload) {
      console.log(rootGetters.countRoot)
    },
    actionModuleA2({ commit, dispatch }) {
      commit('aAddCount')
      commit('ADD_COUNT', null, { root: true })
      commit('ADD_COUNT', null, { root: true })
      commit('moduleA/moduleB/bAddCount', null, { root: true })
      commit('moduleA/moduleB/bAddCount', null, { root: true })
      commit('moduleA/moduleB/bAddCount', null, { root: true })
      commit('moduleA/moduleB/bAddCount', null, { root: true })


      dispatch('actionModuleA1')
      dispatch('moduleA/moduleB/actionB', null, { root: true })
    },
  },
  modules: {
    moduleB: moduleB,
  },
}
