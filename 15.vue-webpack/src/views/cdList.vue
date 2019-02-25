
<template>
  <div
    id="bd"
    class="bd bd-top js-bd-box"
    :class="{'bd-bottom':!paused}"
  >
    <div
      id="imgBoxInfo"
      class="img-box"
    >
      <img
        :src="pic"
        onerror="this.onerror=null;this.src='http://m.kugou.com/static/images/index2013/default.png';"
        alt=""
        style="margin-top:-4rem;"
      >
    </div>
    <div
      id="introBox"
      class="intro-box"
      :class="{auto:isOpen}"
      @click="isOpen=!isOpen"
    >
      <p v-html="desc">
      </p>
      <div
        id="introShow"
        class="intro-icon-box  open-icon"
        :class="isOpen?'open-icon':'close-icon'"
      >
        <i class="intro-icon"></i>
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
/* eslint vue/no-v-html:'off' */
import { mapState, mapMutations, mapActions } from 'vuex'
import ftPlayer from './ftPlayer'

export default {
  components: { ftPlayer },
  data() {
    return {
      updateDate: '',
      pic: '',
      desc: '',
      isOpen: false,
    }
  },
  computed: {
    ...mapState('list', ['showList']),
    ...mapState('player', ['paused']),
  },
  created() {
    const topId = this.$route.params.id * 1
    if (topId) {
      this.getCdList(topId).then((res) => {
        console.log('info', res);
        // this.$store.commit('setGoBackTit', res.topListInfo.ListName)
        this.$store.commit('setGoBackTit', res.dissname)
        // this.updateDate = res.logo
        this.pic = res.logo
        this.desc = res.desc
      })
    }
  },

  methods: {
    ...mapActions('list', ['getCdList']),
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
<style lang="scss" scoped>
.img-box {
    width: 100%;
    height: 12.5rem;
    position: relative;
    overflow: hidden;
}
.img-box img {
    width: 100%;
}

.intro-box.auto {
    height: auto;
}

.intro-box {
    width: 100%;
    height: 2.25rem;
    line-height: 1.8;
    padding: .5357rem 2.67857rem .5357rem .8929rem;
    box-shadow: 0 0.1785rem 0.1785rem 0 #f4f4f4;
    position: relative;
    overflow: hidden;
    font-size: 1rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.intro-icon-box {
    width: 2.1429rem;
    height: 2rem;
    line-height: 2.1429rem;
    position: absolute;
    top: .25rem;
    right: .1786rem;
    text-align: center;
    cursor: pointer;
}
.open-icon .intro-icon {
    background: url(../images/open_icon.png) no-repeat;
    background-size: 100%;
}
.close-icon .intro-icon {
    background: url(../images/close_icon.png) no-repeat;
    background-size: 100%;
}
.intro-icon {
    width: 1.25rem;
    height: 1.25rem;
    display: inline-block;
    vertical-align: text-bottom;
}
</style>
