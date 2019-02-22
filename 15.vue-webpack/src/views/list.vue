
<template>
  <div
    id="bd"
    class="bd bd-top js-bd-box"
    :class="{'bd-bottom':!paused}"
  >
    <div
      id="imgBoxInfo"
      class="rank-info-hd"
    >
      <img
        src="http://imge.kugou.com/mcommon/400/20190214/20190214100332980767.jpg"
        onerror="this.onerror=null;this.src='http://m.kugou.com/static/images/index2013/default.png';"
        alt=""
        style="margin-top: -75px;"
      >
      <div class="rank-info-time">
        <span>上次更新时间：2019-02-18</span>
      </div>
    </div>

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
import ftPlayer from './ftPlayer'

export default {
  components: { ftPlayer },
  computed: {
    ...mapState('list', ['showList']),
    ...mapState('player', ['paused']),
  },
  created() {
    const topId = this.$route.params.id
    if (topId) {
      this.getTopList(topId).then((info) => {
        console.log('info', info);
        this.$store.commit('setGoBackTit', info.ListName)
      })
    }
  },

  methods: {
    ...mapActions('list', ['getTopList']),
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
  },

}
</script>
<style lang="scss">

</style>
