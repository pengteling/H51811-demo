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
import { mapState, mapGetters } from 'vuex'

export default {
  /* eslint vue/require-prop-types:'off' */
  // props: ['filter', 'itemsLeftCount', 'isHaveCompleted'],

  data() {
    return {
      states: ['All', 'Active', 'Completed'],
    }
  },
  computed: {
    ...mapState([
      'filter',
    ]),
    ...mapGetters(['itemsLeftCount', 'isHaveCompleted']),
  },
  watch: {
    $route: {
      handler(route) {
        console.log('$route watch', route)
        console.log(this.filter, route.name);
        this.$nextTick(() => {
          // 调用mutation来改filter
          this.$store.commit('TOGGLE_FILTER', route.name)
        })
        // setTimeout(() => {
        //   this.filter = route.name
        // }, 100)
        console.log(this.filter, route.name);
      },
      immediate: true,
    },
  },
  methods: {
    clearCompleted() {
      // this.$emit('clear-completed')
      this.$store.commit('CLEAR_COMPLETED')
    },
  },
}
</script>
