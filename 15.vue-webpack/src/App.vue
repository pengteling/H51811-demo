<template>
  <div class="container">
    <router-view class="main"></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>
<script>
import axios from 'axios'
import jsonp from 'jsonp'
import { evil } from './utils'

export default {
  data() {
    return {
      obj: {},
      url: '',
    }
  },
  created() {
    // axios.get('/js/data.json')
    // axios.get('http://music.henshui.com/api/musicList.js')
    // axios({
    //   url: 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?tpl=3&page=detail&date=2018-12-24&topid=4&type=top&song_begin=0&song_num=30&g_tk=1507819077&loginUin=3001418919&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0&jsonpCallback=MusicJsonpCallback',
    //   method: 'get',
    //   responseType: 'text',
    // })
    //   .then(res => console.log(res.data))

    // jsonp('https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?tpl=3&page=detail&date=2018-12-24&topid=4&type=top&song_begin=0&song_num=30&g_tk=1507819077&loginUin=3001418919&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0&jsonpCallback=MusicJsonpCallback', { name: 'MusicJsonpCallback' },
    //   (err, data) => {
    //     console.log(data)
    //   })

    // fetch('/js/data.json')
    /* fetch('/index.html?name=zs', {
      method: 'get',
      // body: {
      //   name: 'zs',
      // },
    })
      .then(res => res.text())
      // .then(res => console.log(evil(res))) */

    // axios.get('/api/list')
    //   .then(res => console.log(res.data))
    /* eslint prefer-destructuring:'off' */
    axios.get('/api/vkey', {
      params: {
        guid: 1044092206,
        songmid: '000Qepff3UyUWO',
        filename: 'C400000Qepff3UyUWO.m4a',
        g_tk: 5381,
        // jsonpCallback:'MusicJsonCallback41947488562419744',

        loginUin: 0,
        hostUin: 0,
        format: 'json',
        inCharset: 'utf-8',
        outCharset: 'utf-8',
        notice: 0,
        platform: 'yqq',
        needNewCode: 0,
        cid: 205361747,
        // callback:'MusicJsonCallback41947488562419744',
        uin: 0,

      },
    })
      .then((res) => {
        console.log(res.data)
        const vkey = res.data.data.items[0].vkey
        this.url = `http://dl.stream.qqmusic.qq.com/C400000Qepff3UyUWO.m4a?guid=1044092206&vkey=${vkey}`
      })
  },
}
</script>

<style lang="scss">
html,body{
  overflow: hidden;
  margin: 0;
}
ul,li{
  margin: 0;
  padding: 0;
  list-style: none
}
a{
  text-decoration: none
}
.container{
  display: flex;
  flex-direction: column;
  height:100vh;
  .main{
    flex:1 1 0%;
  }
  .nav{
    flex:0 0 50px;
  }
}

</style>
