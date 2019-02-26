<template>
  <div
    id="bd"
    class="bd js-bd-box"
    :class="{'bd-bottom':!paused}"
  >
    <div
      class="search_box"
      style=""
    >
      <div class="mod_search_bar">
        <div class="search_bar_cont">
          <input
            v-model="sokey"
            class="search_input"
            type="search"
            autocomplete="off"
            autocorrect="off"
            placeholder="搜索歌曲、歌单、专辑"
            style="-webkit-appearance: textfield;"
            @click="isSearch=true"
            @keyup.enter="handlerEnter"
          ><span class="icon icon_search">
            搜索
          </span><span
            class="icon icon_delete"
            style="display: none;"
          >
            删除
          </span>
        </div><div
          v-show="isSearch"
          class="search_bar_tip_text"
          @click="isSearch=false ; sokey=''"
        >
          取消
        </div>
      </div><div
        v-if="isSearch && isShowHistory"
        class="mod_search_record"
        style=""
      >
        <ul>
          <li
            v-for="(item,index) in historyKeys"
            :key="index"
          >
            <a
              href="javascript:;"
              class="record_main"
              @click="search(item)"
            >
              <span class="icon iocn_clock"></span><span class="record_con">
                {{ item }}
              </span><span
                class="icon icon_close"
                @click.stop="deleteKeys(item)"
              ></span>
            </a>
          </li>
        </ul><p
          v-show="historyKeys.length>0"
          class="record_handle"
        >
          <a
            href="javascript:;"
            @click="clearAll"
          >
            清除搜索记录
          </a>
        </p>
      </div><div
        v-if="!isSearch"
        id="js_hot_keys"
        class="mod_search_result"
      >
        <h3
          class="result_tit"
          style=""
        >
          热门搜索
        </h3><div class="result_tags">
          <a
            v-for="(key,index) in hotKeys"
            :key="index"
            class="tag_s"
            :class="{tag_hot:index===0}"

            @click="search(key)"
          >
            {{ key }}
          </a>
        </div>
      </div>
      <!-- <div
        class="mod_search_content"
        style="display: none;"
      >
        <ul class="search_content"></ul>
      </div>
      <div
        class="mod_loading"
        style="display: none;"
      >
        <i class="loading__icon"></i><span class="loading__text">
          正在载入...
        </span>
      </div> -->
      <div
        v-if="isSearch && !isShowHistory"
        class="
        mod_search_content"
      >
        <PullTo

          @infinite-scroll="loadmore"
        >
          <ul class="search_content">
            <!-- <li>
              <span class="media avatar">
                <img
                  src="https://y.gtimg.cn/music/photo_new/T001R68x68M0000000mFvh1jtLcz.jpg?max_age=2592000"
                  alt="张信哲"
                >
              </span><h6 class="main_tit">
                张信哲
              </h6><p class="sub_tit">
                <span>单曲：502</span><span>专辑：65</span>
              </p>
            </li> -->
            <li
              v-for="(item,index) in resultList"
              :key="index"
              class=""
              @click="playSong(item)"
            >
              <i class="icon"></i><h6
                class="main_tit"
                v-html="item.title"
              >
              </h6><p class="sub_tit">
                {{ item.artist }}
              </p>
            </li>
          </ul>
          <div
            v-show="resultList.length>0"
            class="ploading loading-bar"
          >
            {{ loadEnd ? "已加载全部":"加载中..." }}
          </div>
          <div
            v-show="isNotResult"
            class="mod_null search"
          >
            <h6>无匹配</h6><p>很抱歉，没有找到与“singermid：歌手mid。可从歌手列表里面获取”相关的结果。</p>
          </div>
        </PullTo>
      </div>
    </div>
    <ftPlayer></ftPlayer>
  </div>
</template>
<script>
import axios from 'axios'
import PullTo from 'vue-pull-to'
import { mapState } from 'vuex'
import ftPlayer from './ftPlayer'

export default {
  name: 'Search',
  components: { PullTo, ftPlayer },
  data() {
    return {
      historyKeys: [],
      hotKeys: ['歌手', 'Gai见面吧电台', '红尘来去一场梦', '不能说的秘密', '爱情有时很残忍', 'IZONE'],
      // isClick: false, //显示列表
      isSearch: false, // 显示列表，若搜索项为空 则显示历史记录
      isShowHistory: true,
      sokey: '',
      resultList: [],
      curpage: 1,
      loadEnd: false,
      // 是否在播放搜索列表，决定在loadmore时是否同步更新musicList
      isPlaySearch: false,
      // 是否搜索不到歌曲
      isNotResult: false,
    }
  },
  computed: {
    ...mapState('player', ['paused']),
  },
  watch: {
    sokey(val) {
      this.resultList = []
      // 重置没搜索结果
      this.isNotResult = false
      if (val === '') {
        this.isShowHistory = true
      }
    },
  },
  created() {
    if (localStorage.getItem('historyKeys')) {
      this.historyKeys = localStorage.getItem('historyKeys').split(',')
    }
  },
  methods: {
    search(key) {
      this.curpage = 1
      this.loadEnd = false // 初始
      this.isPlaySearch = true
      if (key) {
        this.sokey = key
      }
      if (!this.sokey) return

      this.isShowHistory = false
      this.isSearch = true
      if (!this.historyKeys.includes(this.sokey)) {
        console.log('add keys')
        this.historyKeys.unshift(this.sokey)
      } else {
        console.log('已有key的处理')
        this.historyKeys.splice(this.historyKeys.indexOf(this.sokey), 1)
        this.historyKeys.unshift(this.sokey)
      }
      localStorage.setItem('historyKeys', this.historyKeys.join())
      console.log('search fn');
      axios.get('/api/getSearch', {
        params: {
          _: +new Date(),
          g_tk: 5381,
          uin: 0,
          format: 'json',
          inCharset: 'utf-8',
          outCharset: 'utf-8',
          notice: 0,
          platform: 'h5',
          needNewCode: 1,
          w: this.sokey,
          zhidaqu: 1,
          catZhida: 1,
          t: 0,
          flag: 1,
          ie: 'utf-8',
          sem: 1,
          aggr: 0,
          perpage: 20,
          n: 20,
          p: this.curpage,
          remoteplace: 'txt.mqq.all',
        },
      }).then((res) => {
        const resultList = res.data.data.song.list
        console.log(resultList)
        this.resultList = resultList.map(item => ({
          title: item.songname,
          artist: item.singer.reduce((allsinger, singer) => (allsinger ? `${allsinger}、${singer.name}` : singer.name), ''),
          file: item.songmid,
          cover: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${item.albummid}.jpg?max_age=2592000`,
          lrc: '',
        }))
        if (resultList.length < 20) {
          this.loadEnd = true
        }
        if (resultList.length === 0) {
          this.isNotResult = true
        }
      })
    },
    handlerEnter(e) {
      // this.sokey = e.target.value
      this.search()
    },
    playSong(item) {
      this.$store.commit('list/GET_MUSIC_LIST_SEARCH', this.resultList)
      this.$store.commit('list/CHANGE_MUSIC', item)
      this.$store.commit('showFtPlayer', true)
      setTimeout(() => {
        if (this.paused) {
          this.$store.commit('player/PLAY_PAUSE')
        }
      }, 500)
      // this.resultList.map(item=>{
      //   return {

      //   }
      // })
    },
    loadmore() {
      if (this.loadEnd) return
      axios.get('/api/getSearch', {
        params: {
          _: +new Date(),
          g_tk: 5381,
          uin: 0,
          format: 'json',
          inCharset: 'utf-8',
          outCharset: 'utf-8',
          notice: 0,
          platform: 'h5',
          needNewCode: 1,
          w: this.sokey,
          zhidaqu: 1,
          catZhida: 1,
          t: 0,
          flag: 1,
          ie: 'utf-8',
          sem: 1,
          aggr: 0,
          perpage: 20,
          n: 20,
          p: this.curpage + 1,
          remoteplace: 'txt.mqq.all',
        },
      }).then((res) => {
        this.curpage = this.curpage + 1
        const resultList = res.data.data.song.list
        console.log(resultList)
        const newList = resultList.map(item => ({
          title: item.songname,
          artist: item.singer.reduce((allsinger, singer) => (allsinger ? `${allsinger}、${singer.name}` : singer.name), ''),
          file: item.songmid,
          cover: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${item.albummid}.jpg?max_age=2592000`,
          lrc: '',
        }))
        if (newList.length < 20) {
          this.loadEnd = true
        }
        this.resultList = this.resultList.concat(newList)


        // 如果是在播放当前搜索结果，同时让播放列表更新
        if (this.isPlaySearch) { this.$store.commit('list/GET_MUSIC_LIST_SEARCH', this.resultList) }
      })
      // this.plist = this.plist.concat(res.data.data.list)
    },
    deleteKeys(key) {
      const newList = this.historyKeys.filter(item => item !== key)
      this.historyKeys = newList
      localStorage.setItem('historyKeys', newList.join())
    },
    clearAll() {
      this.historyKeys = []
      localStorage.setItem('historyKeys', '')
    },
  },

}
</script>

<style lang="scss" scoped>
.mod_search_bar {
    background: #f4f4f4;
    padding: 10px;
    display: -webkit-box;
    -webkit-box-orient: horizontal;
    -webkit-box-align: center;
}
.mod_search_bar .search_bar_cont {
    position: relative;
    border-radius: 3px;
    background: #fff;
    height: 28px;
    padding: 4px 12px 4px 35px;
    -webkit-box-flex: 1;
}
.mod_search_bar .search_input {
    height: 28px;
    line-height: 28px;
    width: 100%;
    color: rgba(0,0,0,.3);
    border: none;
    -webkit-appearance: none;
    font-size: 14px;
}
.mod_search_bar .icon_search {
    position: absolute;
    top: 9px;
    left: 10px;
    width: 18px;
    height: 18px;
    background-image: url(../images/icon_search.png);
    background-repeat: no-repeat;
    background-size: cover;
    text-indent: -999px;
}


.mod_search_bar .icon_delete {
    position: absolute;
    top: 9px;
    right: 12px;
    width: 18px;
    height: 18px;
    background: #b1b1b1;
    text-indent: -9999px;
    border-radius: 99px;
}

.mod_search_bar .search_bar_tip_text {
    padding-right: 10px;
    padding-left: 10px;
    font-size: 14px;
    height: 36px;
    line-height: 36px;
}
.mod_search_record {
    background: #fff;
}
.mod_search_record li {
    border-top: 1px solid #ededed;
    padding: 0 15px;
}
.mod_search_record li {
    border-top: 1px solid #ededed;
    padding: 0 15px;
}

.record_main {
    position: relative;
    display: block;
    height: 44px;
    line-height: 44px;
}
.iocn_clock {
    position: absolute;
    left: 0;
    top: 12px;
    width: 20px;
    height: 20px;
    background-image: url(../images/clock_ic.png);
    background-repeat: no-repeat;
    background-size: cover;
    text-indent: -999px;
}
.record_con {
    position: absolute;
    left: 40px;
    right: 50px;
    display: block;
    height: 44px;
    line-height: 44px;
    color: #000;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.icon_close {
    position: absolute;
    right: 0;
    top: 12px;
    width: 20px;
    height: 20px;
}

.icon_close:after, .icon_close:before {
    position: absolute;
    left: 0;
    top: 0;
    content: "";
    background: rgba(0,0,0,.6);
    -webkit-transform: rotate(45deg);
}
.icon_close:before {
    width: 17px;
    height: 1px;
    top: 8px;
}
.icon_close:after {
    width: 1px;
    height: 17px;
    left: 8px;
}
.record_handle {
    text-align: center;
    height: 44px;
    line-height: 44px;
}
.record_handle a {
    display: inline-block;
    line-height: 44px;
    color: #33a3f5;
}
.mod_search_result {
    background: #fff;
    padding: 15px 15px 10px 15px;
}
.mod_search_result .result_tit {
    color: rgba(0,0,0,.6);
    margin-bottom: 8px;
}
.mod_search_result .result_tags {
    font-size: 0;
}

.mod_search_result .tag_s {
    display: inline-block;
    font-size: 14px;
    padding: 0 10px;
    height: 30px;
    line-height: 30px;
    color: #000;
    border: 1px solid rgba(0,0,0,.6);
    border-radius: 99px;
    word-break: keep-all;
    margin-bottom: 10px;
    margin-right: 14px;
}
.mod_search_result .tag_hot {
    color: #fc4524;
    border-color: #fc4524;
}
.mod_search_content li {
    position: relative;
    height: 55px;
    padding-left: 56px;
    overflow: hidden;
}
.mod_search_content .avatar, .mod_search_content .avatar img {
    border-radius: 999px;
}

.mod_search_content .media {
    position: absolute;
    top: 8px;
    left: 8px;
    width: 40px;
    height: 40px;
}
.mod_search_content .main_tit {
    margin: 10px 0 2px;
    line-height: 18px;
    font-size: 16px;
    font-weight: 400;
    color: #000;
}

.mod_search_content .main_tit, .mod_search_content .sub_tit {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.mod_search_content .sub_tit {
    color: grey;
}
.mod_search_content .sub_tit span {
    margin-right: 10px;
}
.mod_search_content li::after {
    content: "";
    position: absolute;
    height: 1px;
    top: 0;
    left: 0;
    right: 0;
    background: #e5e5e5;
}
.mod_search_content .icon {
    position: absolute;
    top: 18px;
    left: 18px;
    width: 22px;
    height: 20px;
    background-position: 0 0;
}

.mod_search_content .icon, .mod_search_content .icon.no_copyright::after {
    background-image: url(../images/search_sprite.png);
    background-repeat: no-repeat;
    background-size: 22px 30px;
}
.mod_search_content .media img {
    display: block;
    width: 100%;
}

/* 为滚动插件修改 */

.mod_search_content{
  height: calc(100vh - 10.2rem);
}
.ploading {
    text-align: center;
    line-height: 2.5;

}
/* 出现底部播放器时 让滚动区域变小 */
.bd-bottom .mod_search_content {
    height: calc(100vh - 10.2rem - 4.2143rem);
}


.mod_null {
    position: relative;
    padding: 210px 0 0;
    text-align: center;
    color: grey;
}
.mod_null.search:before {
    width: 106px;
    height: 105px;
    margin-left: -53px;
    background-image: url(../images/search_null.png);
}

.mod_null:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 80px;
    -webkit-background-size: cover;
}
.mod_null h6 {
    font-size: 18px;
    line-height: 36px;
    font-weight: 400;
}

</style>
