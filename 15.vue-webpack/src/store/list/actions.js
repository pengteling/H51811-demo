import axios from 'axios'

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
  getList({ commit }) {
    axios.get('/api/list').then((res) => {
      console.log(res)
      const songList = res.data.songlist
      const musicList = songList.map((item) => {
        const songData = item.data
        return {
          title: songData.songname,
          artist: songData.singer.reduce((allsinger, singer) => (allsinger ? `${allsinger}、${singer.name}` : singer.name), ''),
          file: songData.songmid,
          cover: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${songData.albummid}.jpg?max_age=2592000`,
          lrc: '',
        }
      })
      console.log(musicList)
      commit('GET_MUSIC_LIST', musicList)
    })
  },
}
