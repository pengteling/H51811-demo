<template>
  <li
    class="components-listitem row "
    :class="{'focus':focus}"
    @click="changeMusicItem"
  >
    <p>{{ musicItem.title }} - {{ musicItem.artist }}</p><p class="lrclink -col1">
      <router-link :to="{name:'Lrc'}">
        歌词
      </router-link>
    </p><p
      class="-col-auto delete"
      @click.stop="deleteMusicItem"
    ></p>
  </li>
</template>
<script>
import EventBus from '../EventBus'

export default {
  props: ['musicItem', 'focus'],
  methods: {
    changeMusicItem() {
      this.$emit('changeMusic', this.musicItem)
    },
    deleteMusicItem() {
      // e.stopPropagation()
      EventBus.$emit('deleteMusic', this.musicItem)
    },
  },
}
</script>
