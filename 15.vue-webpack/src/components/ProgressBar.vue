<template>
  <div
    ref="progressbar"
    class="components-progress"
    @click="changeProgress"
  >
    <div
      class="progress"
      :style="{ width:`${progress}%`, background:`${barColor}`}"
    ></div>
  </div>
</template>
<script>

import './progressbar.scss'

export default {
  props: {
    progress: {
      default: 0,
      type: Number,
    },
    barColor: {
      default: 'rgb(47, 152, 66)',
    },
  },
  methods: {
    changeProgress(e) {
      const progress = ((e.clientX - this.$refs.progressbar.getBoundingClientRect().left) / this.$refs.progressbar.clientWidth)
      this.$emit('changeProgress', progress)
    },
  },

}
</script>
