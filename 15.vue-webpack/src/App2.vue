<template>
  <div>
    <h2>App2</h2>
    Count:{{ $store.state.count }} <br>
    arr:{{ $store.state.arr }}

    <!-- Count: {{ count }}
    arr: {{ arr }} -->
    {{ vmsg }}
    <Child></Child>
  </div>
</template>
<script>
import Child from '@/Child'
import { mapState, mapGetters } from 'vuex'

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
    setTimeout(() => {
      // this.$store.state.count++
      this.$store.state.arr[1] = 4
    }, 3000)
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
}
</script>
