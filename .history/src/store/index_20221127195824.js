import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: ''
  },
  getters: {
  },
  mutations: {
    updateToken (state, val) {
      state.token = val
    }
  },
  actions: {
  },
  modules: {
  },
  // 配置为 vuex 的插件
  plugins: [createPersistedState()]
})
