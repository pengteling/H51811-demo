<template>
  <div>
    <!-- <Mplayer
      :url="currentMusicItem.file"
      :player="player"
      @toggleNext="toggleNext"
    ></Mplayer> -->
    <Mplayer></Mplayer>
    <!-- <audio src=""></audio> -->
    <!-- <router-view
      :music-list="musicList"
      :music-item="currentMusicItem"
      :player="player"
      :repeat-type="repeatType"
      @changeMusic="changeMusic"
      @changeRepeatType="changeRepeatType"
      @prevNext="prevNext"
    ></router-view> -->
    <router-view></router-view>
  </div>
</template>
<script>
import Mplayer from './Mplayer'
// import EventBus from '../EventBus'

export default {
  name: 'Main',
  components: {
    Mplayer,
  },
  /* eslint global-require:'off' */

  // mounted() {
  //   EventBus.$on('deleteMusic', (musicItem) => {
  //     if (this.musicList.length > 1) {
  //       console.log('deleteMusic')
  //       this.musicList = this.musicList.filter(item => item !== musicItem)
  //       /* 删除最后一首 */
  //       if (this.currentIndex >= this.musicList.length) {
  //         this.currentIndex = 0
  //       }
  //     }
  //   })
  // },
  methods: {
    // playPause() {
    //   this.player.paused = !this.player.paused
    // },
    // changeMusic(musicItem) {
    //   this.currentIndex = this.musicList.findIndex(item => item === musicItem)
    // },
    // changeRepeatType() {
    //   const oldRepeatType = this.repeatType
    //   let newRepeatType = 'cycle'
    //   if (oldRepeatType === 'cycle') {
    //     newRepeatType = 'once'
    //   } else if (oldRepeatType === 'once') {
    //     newRepeatType = 'random'
    //   }
    //   this.repeatType = newRepeatType
    // },
    // prevNext(type) {
    //   const curRepeatType = this.repeatType
    //   const oldCurrentIndex = this.currentIndex
    //   let newCurrentIndex
    //   const num = this.musicList.length
    //   if (curRepeatType === 'cycle' || curRepeatType === 'once') {
    //     if (type === 'next') {
    //       newCurrentIndex = (oldCurrentIndex + 1) % num
    //     } else {
    //       newCurrentIndex = (oldCurrentIndex - 1 + num) % num
    //     }
    //   } else {
    //     /* 随机 */
    //     /* eslint 'no-lonely-if':off */
    //     if (num > 1) {
    //       const rd = (currentIndex) => {
    //         const newIndex = Math.floor(num * Math.random())
    //         if (newIndex === currentIndex) {
    //           return rd(currentIndex)
    //         }
    //         return newIndex
    //       }
    //       newCurrentIndex = rd(oldCurrentIndex)
    //     }
    //     // newCurrentIndex = Math.floor(num * Math.random())
    //     // console.log(newCurrentIndex)
    //   }
    //   this.currentIndex = newCurrentIndex
    // },
    // toggleNext() {
    //   if (this.repeatType !== 'once') {
    //     this.prevNext('next')
    //   } else {
    //     this.player.changeTime = 0
    //   }
    // },
  },
}
</script>
