<template>
  <audio
    ref="audio"
    :src="url"
  ></audio>
</template>
<script>
export default {
  props: ['url', 'player'],
  computed: {
    audio() {
      return this.$refs.audio
    },
  },
  /* eslint object-shorthand:'off' */
  watch: {
    'player.paused'(newVal, oldVal) {
      if (!newVal) {
        this.audio.play()
      } else {
        this.audio.pause()
      }
    },
  },
  mounted() {
    console.log('mounted')
  },
}
</script>
