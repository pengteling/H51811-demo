import * as types from './mutation-types'
/* eslint  no-param-reassign:'off' */
export default {
  [types.GET_DURATION](state, duration) {
    state.duration = duration
  },
}
