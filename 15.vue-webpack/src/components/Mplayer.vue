<template>
  <audio
    ref="audio"
    @loadedmetadata="getDuration"
    @timeupdate="getCurrentTime"
    @ended="toggleNext"
  ></audio>
</template>
<script>
// import EventBus from '../EventBus'
import {
  mapState, mapGetters, mapMutations, mapActions,
} from 'vuex'
import axios from 'axios'

export default {
  // props: ['url', 'player'],

  computed: {
    ...mapGetters('list', ['currentMusicItem']),
    audio() {
      return this.$refs.audio
    },
    ...mapState('player', ['paused', 'changeTime', 'volume']),
    // player() {
    //   return this.$store.state.player
    // },
    // ...mapState('player',['paused','volume',''])
  },
  /* eslint object-shorthand:'off' */
  watch: {
    paused(newVal, oldVal) {
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
    changeTime(val) {
      this.audio.currentTime = val
    },
    volume: {
      handler(newVal) {
        this.$nextTick(() => {
          this.audio.volume = newVal
          console.log(this.audio.volume)
        })
      },
      immediate: true,
    },
    'currentMusicItem.file'(newVal) {
      this.getVkey()
    },
  },
  mounted() {
    console.log('mounted')
    this.audio.oncanplay = () => {
      if (!this.paused) {
        this.audio.play()
      }
    }
    console.log(this.audio.volume)
    /* 调试  */
    this.$store.subscribeAction((action, state) => {
      console.log(action)
    })
  },
  created() {
    this.getList()
  },
  methods: {
    ...mapMutations('player', ['GET_DURATION', 'GET_CURRENT_TIME']),
    getDuration() {
      // console.log(this.audio.duration)
      // // this.player.duration = this.audio.duration
      // this.$store.commit('player/GET_DURATION', this.audio.duration)
      this.GET_DURATION(this.audio.duration)
    },
    getCurrentTime() {
      // this.player.currentTime = this.audio.currentTime
      this.GET_CURRENT_TIME(this.audio.currentTime)
      // EventBus.$emit('timeupdate', this.audio.currentTime)
    },
    ...mapActions('list', ['toggleNext', 'getList']),
    // toggleNext() {
    //   //console.log('toggleNext')
    //   // this.$emit('toggleNext')

    // },
    getVkey() {
      axios.post('/api/getVkey', {
        req_0: {
          module: 'vkey.GetVkeyServer',
          method: 'CgiGetVkey',
          param: {
            guid: '900811868', songmid: [this.currentMusicItem.file], songtype: [], uin: '0', loginflag: 0, platform: '23', h5to: 'speed',
          },
        },
        comm: {
          g_tk: 5381, uin: 0, format: 'json', ct: 23, cv: 0,
        },
      }).then((res) => {
        console.log(res.data.req_0.data.midurlinfo[0].purl)
        const purl2 = res.data.req_0.data.midurlinfo[0].purl
        if (purl2) {
          const url = `http://117.34.59.29/amobile.music.tc.qq.com/${purl2}`
          this.audio.src = url
        }
      })
    },
  },


}
</script>
