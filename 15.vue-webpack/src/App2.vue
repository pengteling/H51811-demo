<template>
  <div>
    <h2>App2</h2>
    Count:{{ $store.state.count }} <br>
    moduleA Count:{{ $store.state.moduleA.count }} <br>
    <Child></Child>
  </div>
</template>
<script>
import Child from '@/Child'

import {
  mapState, mapGetters, mapMutations, mapActions,
} from 'vuex'

export default {
  name: 'App2',
  components: {
    Child,
  },
  data() {
    return {
      msg: 'app2',
      num: 111,

    }
  },
  mounted() {
    console.log(this.$store);
    setInterval(() => {
      this.$store.commit('ADD_COUNT')
    }, 3000)


    this.$store.subscribe((mutation, state) => {
      console.log(mutation)
      console.log(state)
    })
    this.$store.subscribeAction((action, state) => {
      console.log(action)
      console.log(state)
    })
  },
  /* eslint vue/order-in-components:'off' */
  computed: {
    computedMsg() {
      return `${this.msg}computed`
    },


    // ...mapState(['count', 'arr', 'obj']),
    // count(){
    //   return this.$store.state.count
    // }
    ...mapState({
      count: 'count',
      arr2: 'arr',
      obj3: 'obj',
      vmsg: (state) => {
        // console.log(this)
        // state.arr[2] + state.count + this.num
      },
      vmsg2(state) {
        return state.arr[2] + state.count + this.num
      },
      // user2: state => state.users[1],

    }),
    // user2() {
    //   return this.$store.getters.user2
    // },
    // ...mapGetters(['user2']),
    ...mapGetters({
      compUser2: 'user2',
      userWho: 'userWho',
    }),
    user23() {
      return Object.assign({}, this.compUser2, { sex: 'male' })
    },
    user3() {
      return this.userWho(3)
    },
    user1() {
      return this.userWho(1)
    },
  },
  methods: {
    handlerClick() {
      this.$store.commit('ADD_COUNT')
    },
    ...mapMutations(['ADD_COUNT', 'ADD_COUNT_STEP', 'ADD_COUNT_STEP2']),
    ...mapMutations({
      addCountComp: 'ADD_COUNT',
    }),

    addCountStep2Comp(payload) {
      // this.$store.commit('addCountStep2', payload)
      this.$store.commit({
        type: 'ADD_COUNT_STEP2',
        ...payload,
        // step: payload.step,
        // n: payload.n,
      })
    },
    // addCount(){
    //   this.$store.commit('addCount')
    // }
    /* addCountAction() {
      this.$store.dispatch('addCountAction')
    }, */
    ...mapActions(['addCountAction', 'addCountStepAction', 'loadData', 'loadStockPrice', 'loadStockPrice2']),
    ...mapActions({
      addCountActionComp: 'addCountAction',
    }),
  },
  created() {
    this.loadData()
    this.loadStockPrice()
    this.loadStockPrice2()
  },

}
</script>
