import Vuex from 'vuex'
import Vue from 'vue'
// import { ADD_COUNT, ADD_COUNT_STEP, ADD_COUNT_STEP2 } from './mutation-types'
import axios from 'axios'
import { evil } from '../utils'
import * as types from './mutation-types'
import moduleA from './modules/moduleA'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
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
    musicList: [],
  },
  getters: {
    countRoot(state) {
      return state.count * 22
    },
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
  /* eslint no-param-reassign:'off' */
  mutations: {
    [types.ADD_COUNT](state) {
      state.count++
    },
    [types.ADD_COUNT_STEP](state, payload) {
      state.count += payload
    },
    [types.ADD_COUNT_STEP2](state, payload) {
      state.count = state.count + payload.step + payload.n
    },
    [types.CHANGE_MUSIC_LIST](state, payload) {
      // console.log('CHANGE_MUSIC_LIST mutation')
      state.musicList = payload
    },
  },
  actions: {
    addCountAction(context) {
      console.log(context.state)
      console.log(context.getters)
      context.commit(types.ADD_COUNT)
    },
    addCountStepAction({
      commit, dispatch, state, getters,
    }, payload) {
      commit(types.ADD_COUNT_STEP, payload.step)
    },
    loadData({ state, commit }) {
      axios.get('http://music.henshui.com/api/musicList.js?!234')
        .then((res) => {
          // state.musicList = evil(res.data)
          commit(types.CHANGE_MUSIC_LIST, evil(res.data))
        })
    },
    loadStockID({ commit }) {
      return axios.get('http://music.henshui.com/api/musicList.js?!234')
    },
    loadStockPrice({ dispatch }) {
      dispatch('loadStockID').then(
        (res) => {
          const stockID = '600900'
          axios.get(`http://music.henshui.com/api/musicList.js?stockid=${stockID}`)
            .then(() => {
              const price = 12.5
              console.log(price)
            })
        },
      )
    },
    loadStockID2() {
      return new Promise((resolve, reject) => {
        axios.get('http://music.henshui.com/api/musicList.js?!234').then((res) => {
          resolve('600900')
        })
      })
      // axios.get('http://music.henshui.com/api/musicList.js?!234').then(res => {
      //   this.stockID='600900'
      // })
    },
    async loadStockPrice2({ dispatch }) {
      const stockID = await dispatch('loadStockID2')
      axios.get(`http://music.henshui.com/api/musicList.js?stockid=${stockID}`)
        .then(() => {
          const price = 12.5
          console.log(price)
        })
    },
  },
  modules: {
    moduleA,
  },
})
