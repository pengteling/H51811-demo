<template>
  <div class="top-goback">
    <p class="page-title js-ftSongName">
      {{ goBackTit }}
    </p>

    <div
      id="hidePlay"
      class="goback"
      @click="$router.go(-1)"
    >
      <i></i>
    </div>
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
