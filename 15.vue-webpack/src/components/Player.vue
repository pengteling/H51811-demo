<template>
  <div class="player-page">
    <h1 class="caption">
      <router-link
        :to="{name:'List'}"
      >
        我的私人音乐坊 &gt;
      </router-link>
    </h1><div class="mt20 row">
      <div class="controll-wrapper">
        <h2 class="music-title">
          <router-link
            :to="{name:'Lrc'}"
          >
            {{ musicItem.title }}
          </router-link>
        </h2><h3 class="music-artist mt10">
          {{ musicItem.artist }}
        </h3><div class="row mt20">
          <div class="left-time -col-auto">
            -0:00
          </div><div class="volume-container">
            <i
              class="icon-volume rt"
              style="top: 5px; left: -5px;"
            ></i><div class="volume-wrapper">
              <div class="components-progress">
                <div
                  class="progress"
                  style="width: 80%; background: rgb(47, 152, 66);"
                ></div>
              </div>
            </div>
          </div>
        </div><div style="height: 10px; line-height: 10px;">
          <div class="components-progress">
            <div
              class="progress"
              style="background: rgb(47, 152, 66);"
            ></div>
          </div>
        </div><div class="mt35 row">
          <div>
            <i class="icon prev"></i><i
              class="icon ml20"
              :class="player.paused?'play':'pause'"
              @click="playPause"
            ></i><i class="icon next ml20"></i>
          </div><div class="-col-auto">
            <i class="icon repeat-cycle"></i>
          </div>
        </div>
      </div><div class="-col-auto cover">
        <a
          href="#/lrc"
          class=""
        >
          <img
            :src="musicItem.cover"
            alt="天使中的魔鬼"
            class="pause"
          >
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import './player.scss'

export default {
  name: 'Player',
  props: ['musicItem', 'player'],
  data() {
    return {
      // paused: true,
    }
  },
  methods: {
    playPause() {
      this.player.paused = !this.player.paused
      // this.$emit('playPause')
    },
  },
}
</script>
