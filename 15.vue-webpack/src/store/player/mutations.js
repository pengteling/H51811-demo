import * as types from './mutation-types'
/* eslint  no-param-reassign:'off' */
export default {
  [types.GET_DURATION](state, duration) {
    state.duration = duration
  },
  [types.GET_CURRENT_TIME](state, currentTime) {
    state.currentTime = currentTime
  },
  [types.PLAY_PAUSE](state) {
    state.paused = !state.paused
  },
  [types.CHANGE_PROGRESS](state, progress) {
    state.changeTime = progress * state.duration
  },
  [types.CHANGE_VOLUME](state, volume) {
    state.volume = volume
  },
  [types.CHANGE_REPEAT_TYPE](state) {
    const oldRepeatType = state.repeatType
    let newRepeatType = 'cycle'
    if (oldRepeatType === 'cycle') {
      newRepeatType = 'once'
    } else if (oldRepeatType === 'once') {
      newRepeatType = 'random'
    }
    state.repeatType = newRepeatType
  },
  [types.PREV_NEXT](state, type, rootState, rootGetters) {
    const curRepeatType = state.repeatType
    const oldCurrentIndex = state.currentIndex
    let newCurrentIndex
    const num = rootState.list.musicList.length
    if (curRepeatType === 'cycle' || curRepeatType === 'once') {
      if (type === 'next') {
        newCurrentIndex = (oldCurrentIndex + 1) % num
      } else {
        newCurrentIndex = (oldCurrentIndex - 1 + num) % num
      }
    } else {
      /* 随机 */
      /* eslint 'no-lonely-if':off */
      if (num > 1) {
        const rd = (currentIndex) => {
          const newIndex = Math.floor(num * Math.random())
          if (newIndex === currentIndex) {
            return rd(currentIndex)
          }
          return newIndex
        }
        newCurrentIndex = rd(oldCurrentIndex)
      }
      // newCurrentIndex = Math.floor(num * Math.random())
      // console.log(newCurrentIndex)
    }
    state.currentIndex = newCurrentIndex
  },
}
