<template>
  <div>Child</div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({

      user2: state => state.users[2],
    }),
  },
  mounted() {
    console.log(this.$store);
  },
}
</script>
