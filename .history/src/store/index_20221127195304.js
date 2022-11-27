import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: ''
  },
  getters: {
  },
  mutations: {
    updateToken (state, val) {
      state.token = val;
    }
  },
  actions: {
  },
  modules: {
  }
})
