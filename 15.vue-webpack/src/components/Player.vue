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
            -{{ leftTime }}
          </div><div class="volume-container">
            <i
              class="icon-volume rt"
              style="top: 5px; left: -5px;"
            ></i><div class="volume-wrapper">
              <!-- <div class="components-progress">
                <div
                  class="progress"
                  style="width: 80%; background: rgb(47, 152, 66);"
                ></div>
              </div> -->
              <ProgressBar
                :progress="player.volume * 100"
                @changeProgress="changeVolume"
              />
            </div>
          </div>
        </div><div style="height: 10px; line-height: 10px;">
          <!-- <div class="components-progress">
            <div
              class="progress"
              style="background: rgb(47, 152, 66);"
            ></div>
          </div> -->
          <ProgressBar
            :progress="currentPercentAbsoulte"
            bar-color="orange"
            @changeProgress="changeProgress"
          />
        </div><div class="mt35 row">
          <div>
            <!-- jsx  onClick = {prevNext.bind(this,'prev')} -->
            <i
              class="icon prev"
              @click="prevNext('prev')"
            ></i><i
              class="icon ml20"
              :class="player.paused?'play':'pause'"
              @click="playPause"
            ></i><i
              class="icon next ml20"
              @click="prevNext('next')"
            ></i>
          </div><div class="-col-auto">
            <i
              class="icon"
              :class="`repeat-${repeatType}`"
              @click="changeRepeatType"
            ></i>
          </div>
        </div>
      </div><div class="-col-auto cover">
        <router-link :to="{name:'Lrc'}">
          <img
            :src="musicItem.cover"
            :alt="musicItem.title"
            :class="player.paused ? 'pause':'play'"
          >
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import './player.scss'
import { formatTime } from '../utils'
import ProgressBar from '@/ProgressBar'

export default {
  name: 'Player',
  components: { ProgressBar },
  props: ['musicItem', 'player', 'repeatType'],
  data() {
    return {
      // paused: true,
    }
  },
  computed: {
    leftTime() {
      return formatTime(this.player.duration - this.player.currentTime)
    },
    currentPercentAbsoulte() {
      return this.player.currentTime / this.player.duration * 100
    },
  },
  methods: {
    playPause() {
      this.player.paused = !this.player.paused
      // this.$emit('playPause')
    },
    changeProgress(progress) {
      // this.player.currentTime = progress * this.player.duration
      this.player.changeTime = progress * this.player.duration
    },
    changeVolume(volume) {
      this.player.volume = volume
    },
    changeRepeatType() {
      this.$emit('changeRepeatType')
    },
    prevNext(type) {
      this.$emit('prevNext', type)
    },
  },
}
</script>
