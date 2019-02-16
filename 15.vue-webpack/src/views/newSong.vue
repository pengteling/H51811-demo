<template>
  <div
    id="bd"
    class="bd js-bd-box"
    :class="{'bd-bottom':!paused}"
  >
    <!-- start 焦点图 -->
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
        v-for="(item,index) in musicList"
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
import ftPlayer from './ftPlayer'

export default {
  components: { ftPlayer },
  computed: {
    ...mapState('list', ['musicList']),
    ...mapState('player', ['paused']),
  },
  created() {
    this.getList()
  },

  methods: {
    ...mapActions('list', ['getList']),
    playSong(item) {
      this.$store.commit('list/CHANGE_MUSIC', item)
      if (this.paused) {
        this.$store.commit('player/PLAY_PAUSE')
      }
    },
  },

}
</script>
