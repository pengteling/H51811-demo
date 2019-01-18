export default {
  toggleNext({ state, commit }) {
    if (state.repeatType !== 'once') {
      // this.prevNext('next')
      commit('PREV_NEXT', 'next')
    } else {
      // this.player.changeTime = 0
      commit('player/CHANGE_PROGRESS', 0, { root: 'true' })
    }
  },
}
