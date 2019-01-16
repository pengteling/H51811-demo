<template>
  <audio
    ref="audio"
    :src="currentMusicItem.file"
    @loadedmetadata="getDuration"
    @timeupdate="getCurrentTime"
    @ended="toggleNext"
  ></audio>
</template>
<script>
// import EventBus from '../EventBus'
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  // props: ['url', 'player'],

  computed: {
    ...mapGetters('list', ['currentMusicItem']),
    audio() {
      return this.$refs.audio
    },
    player() {
      return this.$store.state.player
    },
    // ...mapState('player',['paused','volume',''])
  },
  /* eslint object-shorthand:'off' */
  watch: {
    'player.paused'(newVal, oldVal) {
      this.$nextTick(() => {
        if (!newVal) {
          this.audio.play()
        } else {
          this.audio.pause()
        }
      })
    },
    // 'player.currentTime'(newVal, oldVal) {
    //   console.log(newVal)
    //   /* 修复音乐卡顿的bug */
    //   if (Math.abs(newVal - oldVal) >= 1) {
    //     this.audio.currentTime = newVal
    //   }
    //   // this.audio.currentTime = newVal
    // },
    'player.changeTime'(val) {
      this.audio.currentTime = val
    },
    'player.volume': {
      handler(newVal) {
        this.$nextTick(() => {
          this.audio.volume = newVal
          console.log(this.audio.volume)
        })
      },
      immediate: true,
    },
  },
  mounted() {
    console.log('mounted')
    this.audio.oncanplay = () => {
      if (!this.player.paused) {
        this.audio.play()
      }
    }
    console.log(this.audio.volume)
  },
  methods: {
    ...mapMutations('player', ['GET_DURATION']),
    getDuration() {
      // console.log(this.audio.duration)
      // // this.player.duration = this.audio.duration
      // this.$store.commit('player/GET_DURATION', this.audio.duration)
      this.GET_DURATION(this.audio.duration)
    },
    getCurrentTime() {
      this.player.currentTime = this.audio.currentTime
      // EventBus.$emit('timeupdate', this.audio.currentTime)
    },
    toggleNext() {
      console.log('toggleNext')
      this.$emit('toggleNext')
    },
  },

}
</script>
