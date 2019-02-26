<template>
  <div
    id="bd"
    class="bd js-bd-box"
    :class="{'bd-bottom':!paused}"
  >
    <!-- start 焦点图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          v-for="slider in sliders"
          :key="slider.id"
          class="swiper-slide"
        >
          <a :href="slider.linkUrl">
            <img
              :src="slider.picUrl"
              alt=""
            >
          </a>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <!--  <div
      id="modSlider"
      class="mod-slider"
      style="visibility: visible;"
    >
      <div
        class="swipe-wrap"
        style="width: 1875px;"
      >
        <div
          data-index="0"
          style="width: 375px; left: 0px; transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);"
        >
          <a
            id="brdownload"
            onclick="_hmt.push(['_trackEvent','brsoftware', 'brdownload', 'brkugou']);"
            href="javascript:;"
            class="js-downloadApp"
          >
            <img
              src="http://m.kugou.com/v3/static/images/index/banner.jpg"
              onerror="this.onerror=null;this.src='http://m.kugou.com/v3/static/images/index/ban.jpg';"
              alt=""
            >
          </a>
        </div>
        <div
          data-index="1"
          style="width: 375px; left: -375px; transition-duration: 0ms; transform: translate(375px, 0px) translateZ(0px);"
        >
          <a
            href="http://m.kugou.com/plist/list/600785"
            target="_blank"
          >
            <img
              src="http://imge.kugou.com/mobilebanner/20190211/20190211224627639677.jpg"
              onerror="this.onerror=null;this.src='http://m.kugou.com/v3/static/images/index/ban.jpg';"
            >
          </a>
        </div>
        <div
          data-index="2"
          style="width: 375px; left: -750px; transition-duration: 0ms; transform: translate(375px, 0px) translateZ(0px);"
        >
          <a
            href="https://m2.service.kugou.com/yueku/category/html/index.html?areaid=19"
            target="_blank"
          >
            <img
              src="http://imge.kugou.com/mobilebanner/20190211/20190211230637695382.jpg"
              onerror="this.onerror=null;this.src='http://m.kugou.com/v3/static/images/index/ban.jpg';"
            >
          </a>
        </div>
        <div
          data-index="3"
          style="width: 375px; left: -1125px; transition-duration: 0ms; transform: translate(375px, 0px) translateZ(0px);"
        >
          <a
            href="https://m2.service.kugou.com/yueku/category/html/index.html?areaid=11"
            target="_blank"
          >
            <img
              src="http://imge.kugou.com/mobilebanner/20190211/20190211230720159081.jpg"
              onerror="this.onerror=null;this.src='http://m.kugou.com/v3/static/images/index/ban.jpg';"
            >
          </a>
        </div>
        <div
          data-index="4"
          style="width: 375px; left: -1500px; transition-duration: 0ms; transform: translate(-375px, 0px) translateZ(0px);"
        >
          <a
            href="http://m.kugou.com/plist/list/576428"
            target="_blank"
          >
            <img
              src="http://imge.kugou.com/mobilebanner/20190211/20190211232018388565.jpg"
              onerror="this.onerror=null;this.src='http://m.kugou.com/v3/static/images/index/ban.jpg';"
            >
          </a>
        </div>
      </div>
      <div
        id="swipePos"
        class="swipe-pos"
      >
        <div class="active">
          <span></span>
        </div>
        <div><span></span></div>
        <div><span></span></div>
        <div><span></span></div>
        <div><span></span></div>
      </div>
    </div>
    end 焦点图 -->

    <!-- start panel-songslist -->
    <ul
      id="panelSongsList"
      class="panel-songslist"
    >
      <li
        v-for="(item,index) in showList"
        :key="index"
        class="panel-songslist-item"
        @click="playSong(item)"
      >
        <div class="panel-songs-item-name btn_play">
          <span>{{ item.artist }} - {{ item.title }}</span>
        </div>
        <div
          class="panel-songs-item-download"
          data-dialog-id="dialogDownload"
          data-dialog-feeid="dialogFeeDownload"
        >
          <i></i>
        </div>
      </li>
    </ul>
    <!-- end panel-songslist -->
    <ftPlayer></ftPlayer>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import axios from 'axios'
import ftPlayer from './ftPlayer'

export default {
  components: {
    ftPlayer,

  },
  data() {
    return {
      isError: false,


    }
  },
  computed: {
    ...mapState('list', ['showList']),
    ...mapState('player', ['paused']),
    ...mapState(['sliders']),
  },
  created() {
    this.getList()
  },
  mounted() {
    this.getSliders().then(() => {
      this.$nextTick().then(() => {
        const mySwiper = new Swiper('.swiper-container', {
          // direction: 'vertical',
          direction: 'horizontal', // 垂直切换选项
          // loop: true, // 循环模式选项
          autoplay: true,

          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },

          // 如果需要前进后退按钮
          // nextButton: '.swiper-button-next',
          // prevButton: '.swiper-button-prev',

          // // 如果需要滚动条
          // scrollbar: '.swiper-scrollbar',
        })
      })
    })
  },
  methods: {
    ...mapActions('list', ['getList']),
    ...mapActions(['getSliders']),
    playSong(item) {
      this.$store.commit('list/GET_MUSIC_LIST')
      this.$store.commit('list/CHANGE_MUSIC', item)
      this.$store.commit('showFtPlayer', true)
      setTimeout(() => {
        if (this.paused) {
          this.$store.commit('player/PLAY_PAUSE')
        }
      }, 500)
    },
    handlerError() {
      this.isError = true
    },
  },

}
</script>
<style lang="scss">
.swiper-slide{
  text-align: center;
}
.swiper-slide img{
  max-width: 100%;

}

.swiper-pagination-bullet {
    width: 0.5rem;
    height: 0.5rem;

    background: #fff;
    opacity: 0.6;
    box-shadow: 0 1px 1px #f4f4f4;
}
.swiper-pagination-bullet-active {
    opacity: 1;
    background: #fff;
}
</style>
