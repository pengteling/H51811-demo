import * as types from './mutation-types'
/* eslint no-param-reassign:'off' */
export default {
  [types.ADD_COUNT](state) {
    state.count += 40
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
}
