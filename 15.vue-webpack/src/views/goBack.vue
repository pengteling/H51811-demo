<template>
  <div class="top-goback">
    <p class="page-title js-ftSongName">
      {{ goBackTit }}
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
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['goBackTit']),
  },
}
</script>
