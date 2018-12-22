<template>
  <footer class="footer">
    <span class="todo-count">
      <strong>{{ itemsLeftCount }}</strong>
      <span />
      <span>item</span>
      <span> left</span>
    </span>
    <ul class="filters">
      <li
        v-for="state in states"
        :key="state"
      >
        <!-- <a
          :class="{'selected': state === filter}"
          @click="toggleFilter(state)"
        >
          {{ state }}
        </a> -->
        <router-link
          :to="{name:state}"
          :class="{'selected': state === filter}"
        >
          {{ state }}
        </router-link>
        <span />
      </li>
    </ul>
    <button
      v-show="isHaveCompleted"
      class="clear-completed"
      @click="clearCompleted"
    >
      Clear Completed
    </button>
  </footer>
</template>
<script>
export default {
  /* eslint vue/require-prop-types:'off' */
  props: ['filter', 'itemsLeftCount', 'isHaveCompleted'],
  data() {
    return {
      states: ['All', 'Active', 'Completed'],
    }
  },
  methods: {
    toggleFilter(state) {
      this.$emit('toggle-filter', state)
    },
    clearCompleted() {
      this.$emit('clear-completed')
    },
  },
  template: '#tabs',
}
</script>
