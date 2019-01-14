<template>
  <div>
    Child
    <p>moduleA模块里面的count: {{ $store.state.moduleA.count }}</p>
    <p>aCount:{{ $store.getters.aCount }}</p>
  </div>
</template>
<script>
import {
  mapState, mapGetters, mapMutations, mapActions, createNamespacedHelpers,
} from 'vuex'

// import { createNamespacedHelpers } from 'vuex'

const { mapState: mapState2, mapActions: mapActions2 } = createNamespacedHelpers('moduleA/moduleB')

export default {
  computed: {
    ...mapState({
      user2: state => state.users[2],
      count: state => state.moduleA.count,
    }),
    ...mapState('moduleA', {
      countFromA: 'count',
      msgFromA: 'msg',
    }),
    // ...mapState({
    //   countFromA2: 'moduleA/count',
    //   msgFromA2: 'moduleA/msg',
    // }),
    ...mapState('moduleA/moduleB', {
      msgFromB: 'msg',
      countFromB: state => state.count,
    }),
    ...mapState2({
      msgFromB2: 'msg',
    }),

    // ...mapGetters({
    //   aCount: 'moduleA/aCount',
    // }),
    ...mapGetters('moduleA', {
      aCount: 'aCount',
    }),
  },

  mounted() {
    // console.log(this.$store);
    // console.log(this.$store.getters['moduleA/aCount']);
    // console.log(this.$store.getters['moduleA/moduleB/bCount']);
    // // this.$store.commit('moduleA/aAddCount')
    // setTimeout(() => this.aAddCountComp(), 500)
    // setTimeout(() => this.aAddCountComp2(), 500)
    setTimeout(() => this.actionModuleA1(), 500)
    setTimeout(() => this.actionModuleA2(), 500)
  },
  methods: {
    ...mapMutations('moduleA', {
      aAddCountComp: 'aAddCount',
    }),
    ...mapMutations({
      aAddCountComp2: 'moduleA/aAddCount',
    }),
    ...mapActions('moduleA', {
      actionModuleA1: 'actionModuleA1',
      actionModuleA2: 'actionModuleA2',
    }),
  },
}
</script>
