<template>
  <li
    class="components-listitem row "
    :class="{'focus':focus}"
    @click="changeMusicItem(musicItem)"
  >
    <p>{{ musicItem.title }} - {{ musicItem.artist }}</p><p class="lrclink -col1">
      <router-link :to="{name:'Lrc'}">
        歌词
      </router-link>
    </p><p
      class="-col-auto delete"
      @click.stop="deleteMusicItem(musicItem)"
    ></p>
  </li>
</template>
<script>
// import EventBus from '../EventBus'
import { mapMutations } from 'vuex'

export default {
  props: ['musicItem', 'focus'],
  methods: {
    // changeMusicItem() {
    //   this.$emit('changeMusic', this.musicItem)
    // },
    ...mapMutations('list', {
      changeMusicItem: 'CHANGE_MUSIC',
    }),
    // deleteMusicItem() {
    //   // e.stopPropagation()
    //   // EventBus.$emit('deleteMusic', this.musicItem)

    // },
    ...mapMutations('list', {
      deleteMusicItem: 'DELETE_MUSIC',
    }),
  },
}
</script>
