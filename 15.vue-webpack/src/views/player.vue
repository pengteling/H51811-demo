<template>
  <div
    id="panelPlay"
    class="panel-play"
    style="/* visibility: hidden; */height: 667px;"
  >
    <div
      class="bg-overlay js-bg-overlay"
      :style="{backgroundImage: `url(${currentMusicItem.cover})`}"
    ></div>
    <div class="play-overlay"></div>
    <!--start top-fixed-->


    <!--end top-fixed-->

    <div
      id="panelPlayBd"
      class="panel-play-bd"
    >
      <div class="panel-play-img-box">
        <img
          :src="currentMusicItem.cover"
          onerror="this.onerror=null;this.src='http://m.kugou.com/v3/static/images/index/logo_kugou.png';"
          data-default-src="http://m.kugou.com/v3/static/images/index/logo_kugou.png"
          class="js-ftImg"
        >
      </div>
      <div
        ref="lrcBox"
        class="panel-play-lrc-box"
      >
        <div
          id="playLrc"

          class="panel-play-lrc"
          style="transition:all .3s"
          :style="{transform:`translate3D(0,${transY}px,0)`}"
        >
          <p
            v-for="(line,index) in lrc"
            :key="index"
            :ref="curli === index ? 'cur':'normal'"
            :class="{current: index === curli}"
          >
            {{ line[1] }}
          </p>
        </div>
      </div>
      <div
        id="timeWrap"
        class="time-wrap"
      >
        <div
          id="timeshow"
          class="timeshow"
        >
          {{ currentTimeStr }}
        </div>
        <div
          id="progressWrap"
          class="progress-wrap"
        >
          <div
            id="progressBar"
            ref="progressBar"
            class="progress-bar"
            @click="changeProgress"
          >
            <div
              id="previewProgress"
              class="preview-progress"
              :style="{width: `${bufferedPercentAbsoulte}%`}"
            ></div>
            <div
              id="progress"

              class="progress"
              :style="{width: `${currentPercentAbsoulte}%`}"
            >
              <span ref="dragBtn"></span>
            </div>
          </div>
        </div>
        <div
          id="time"
          class="time"
        >
          {{ durationStr }}
        </div>
      </div>
      <div class="play-operate">
        <i
          class="btn-prev js-btnPrev"
          @click="PREV_NEXT('prev')"
        ></i>
        <i
          class=" js-btnPlayPause"
          :class="paused? 'btn-play':'btn-pause'"
          @click="PLAY_PAUSE"
        ></i>
        <i
          class="btn-next js-btnNext"
          @click="PREV_NEXT('next')"
        ></i>
      </div>
      <div
        class="download-box js-dialog-show"
        data-dialog-id="dialogDownload"
        data-dialog-feeid="dialogFeeDownload"
      >
        <i></i>下载这首歌
      </div>
    </div>
    <p style="visibility: hidden;height:20px">
      兼容iphone5c,ipone6
    </p>
  </div>
</template>
<script>
import {
  mapState, mapGetters, mapActions, mapMutations,
} from 'vuex'
import { parseLrc, formatTime } from '@/utils'

export default {
  name: 'Player',
  data() {
    return {
      transY: 0,
    }
  },
  computed: {
    ...mapGetters('list', ['currentMusicItem']),
    ...mapState('player', ['currentTime', 'paused', 'duration']),
    ...mapGetters('player', ['currentPercentAbsoulte', 'bufferedPercentAbsoulte']),
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
      return this.currentMusicItem.lrc ? parseLrc(this.currentMusicItem.lrc) : []
    },
    durationStr() {
      return formatTime(this.duration)
    },
    currentTimeStr() {
      return formatTime(this.currentTime)
    },

  },
  watch: {
    'currentMusicItem.file'(newVal) {
      if (!this.currentMusicItem.lrc) {
        this.getLrc()
      }
    },
    'currentMusicItem.title': {
      handler(val) {
        this.$store.commit('setGoBackTit', val)
      },
      immediate: true,
    },
    curli: {
      handler(newVal) {
        this.$nextTick().then(() => {
          if (this.currentMusicItem.lrc) {
            const h = this.$refs.cur[0].offsetTop
            // - this.$refs.lrcBox.offsetTop
            console.log(h)
            // this.$refs.lrcBox.scrollTop = h
            this.transY = this.$refs.cur[0].offsetHeight - h
          }
        })
      },
      immediate: true,
    },
  },
  created() {
    console.log('getMusicList');
    if (Object.keys(this.currentMusicItem).length === 0) {
      this.getList().then(() => {
        this.$store.commit('list/GET_MUSIC_LIST')
      })
      // this.$store.commit('list/GET_MUSIC_LIST')
    }
  },

  mounted() {
    if (this.currentMusicItem.file && !this.currentMusicItem.lrc) {
      this.getLrc()
    }
    this.dragInit(this.$refs.dragBtn)
  },
  methods: {
    ...mapActions('list', ['getLrc', 'getList']),
    ...mapMutations('player', ['PLAY_PAUSE', 'CHANGE_PROGRESS']),
    ...mapMutations('list', ['PREV_NEXT']),
    changeProgress(e) {
      const progress = ((e.clientX - this.$refs.progressBar.getBoundingClientRect().left) / this.$refs.progressBar.clientWidth)
      this.CHANGE_PROGRESS(progress)
    },
    /* 触摸拖动 */
    dragInit(el) {
      el.ontouchstart = (e) => {
        // e.preventDefault();
        e.stopPropagation();
        console.log(e)
        // 定义开始移动位置
        this.startX = e.pageX || e.touches[0].pageX;
        this.startY = e.pageY || e.touches[0].pageY;
        this.startX = this.$refs.progressBar.getBoundingClientRect().left
      }
      el.ontouchmove = (e) => {
        this.nowX = e.pageX || e.touches[0].pageX;
        this.nowY = e.pageY || e.touches[0].pageY;

        // 计算目标元素需移动的距离
        this.moveX = this.nowX - this.startX;
        this.moveY = this.nowY - this.startY;
        console.log(this.moveX);

        const percent = this.moveX / this.$refs.progressBar.offsetWidth
        document.getElementById('progress').style.width = `${percent * 100}%`;
        this.dragPercent = percent
      }
      el.ontouchend = (e) => {
        this.CHANGE_PROGRESS(this.dragPercent)
      }
    },
  },

}
</script>
