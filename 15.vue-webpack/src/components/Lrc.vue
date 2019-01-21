<template>
  <div class="lrc-component">
    <ul ref="lrcul">
      <li
        v-for="(line,index) in lrc"
        :key="line[0]"
        :ref="curli === index ? 'cur':'normal'"
        :class="{cur: curli === index }"
      >
        {{ line[1] }}
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import axios from 'axios'
import { parseLrc } from '../utils'

export default {
  name: 'Lrc',
  inheritAttrs: false,
  // props: ['musicItem', 'player'],
  // data() {
  //   return {
  //     curli: 0,
  //   }
  // },
  computed: {
    ...mapGetters('list', {
      musicItem: 'currentMusicItem',
    }),
    ...mapState('player', ['currentTime']),
    curli() {
      let curli = 0
      this.lrc.forEach((line, i) => {
        if (this.currentTime > line[0]) {
          curli = i
        }
      })
      return curli
    },
    lrc() {
      /* const lrcArr = this.musicItem.lrc.split('\n')
      const lrcs = lrcArr.map((item) => {
        const itemArr = item.split(']')
        return {
          time: itemArr[0].split('[')[1],
          txt: itemArr[1],
        }
      }) */

      return this.musicItem.lrc ? parseLrc(this.musicItem.lrc) : []
    },
  },
  /* 也可以不用事件总线 */
  watch: {
    /* 当时时间变化过于频繁 */
    /* 'player.currentTime'(newVal, oldVal) {
      console.log('歌词页监听时间变化', newVal)
      console.log(this.$refs.cur)
      // document.querySelector('.cur')
      const h = this.$refs.cur[0].offsetTop - 330
      console.log(h)
      if (h > 0) {
        this.$refs.lrcul.scrollTop = h
      }
    }, */
    curli: {
      handler(newVal) {
        if (this.musicItem.lrc) {
          this.$nextTick().then(() => {
            const h = this.$refs.cur[0].offsetTop - 330
            console.log(h)
            this.$refs.lrcul.scrollTop = h
          })
        }
      },
      immediate: true,
    },
    'musicItem.file'(newVal) {
      this.getLrc()
    },
  },
  mounted() {
    // EventBus.$on('timeupdate', (time) => {
    //   console.log('歌词页获取timeupdate时间', time);
    // })
    if (this.musicItem.file) {
      this.getLrc() // 写进action!!!
    }
  },
  methods: {
    getLrc() {
      axios.get('/api/lrc', {
        params: {
          '-': 'MusicJsonCallback_lrc',
          pcachetime: +new Date(),
          songmid: this.musicItem.file,
          g_tk: 904982908,
          loginUin: 33460202,
          hostUin: 0,
          format: 'json',
          inCharset: 'utf8',
          outCharset: 'utf-8',
          notice: 0,
          platform: 'yqq.json',
          needNewCode: 0,
          nobase64: 1,
        },
      }).then((res) => {
        console.log(res)
        const lrc = res.data.lyric
        this.$store.commit('list/SET_LRC', {
          item: this.musicItem,
          lrc: lrc,
        })
      })
    },
  },
}
</script>
<style lang="scss">
.lrc-component{
  text-align: center;
  line-height: 2;
  padding:50px;
  ul{
    height: 400px;
    overflow-y: auto;
    &::after{
      content:'';
      display:block;
      padding-top: 200px;
    }
    li{
      line-height: 32px;
      min-height: 32px;
      transition: all 0.5s;
      font-size:16px;
      opacity: 0.5;
      &.cur{
        // color:#2f9842;
        color:#cc0000;
        font-size:18px;
        font-weight: 600;
        opacity: 1;
      }
    }
  }
}

</style>
