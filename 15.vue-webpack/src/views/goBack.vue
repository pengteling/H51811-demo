<template>
  <div class="top-goback">
    <p class="page-title js-ftSongName">
      {{ currentMusicItem.title }}
    </p>
    <router-link to="/">
      <div
        id="hidePlay"
        class="goback"
      >
        <i></i>
      </div>
    </router-link>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('list', ['currentMusicItem']),
  },
}
</script>
