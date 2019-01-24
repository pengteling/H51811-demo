import Vuex from 'vuex'
import Vue from 'vue'
import createLogger from 'vuex/dist/logger'
import player from './player'
import list from './list'

Vue.use(Vuex)

const logger = createLogger({
  collapsed: false, // 自动展开记录的 mutation
  filter(mutation, stateBefore, stateAfter) {
    // 若 mutation 需要被记录，就让它返回 true 即可
    // 顺便，`mutation` 是个 { type, payload } 对象
    return mutation.type === 'list/GET_MUSIC_LIST'
  },
  transformer(state) {
    // 在开始记录之前转换状态
    // 例如，只返回指定的子树
    return state.list
  },
  mutationTransformer(mutation) {
    // mutation 按照 { type, payload } 格式记录
    // 我们可以按任意方式格式化
    return mutation.type
  },
  logger: console, // 自定义 console 实现，默认为 `console`
})

const myPlugin = (store) => {
  store.subscribeAction((action, state) => {
    console.log('action', action, state.list.musicList.length)
  })
  // store.state.commit('list/SET_LRC',)
}
const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    list,
    player,
  },
  plugins: [logger, myPlugin],
})

export default store
