<template>
  <li
    class="components-listitem row "
    :class="{'focus':focus}"
    @click="changeMusicItem"
  >
    <p>{{ musicItem.title }} - {{ musicItem.artist }}</p><p class="lrclink -col1">
      <a
        href="#/lrc"
        class=""
      >
        歌词
      </a>
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
