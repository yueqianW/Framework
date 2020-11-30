import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists: []
  },
  mutations: {
    setList(state, value) {
      state.lists = value
      console.log(state.lists)
    }
  },
  actions: {
    setList({ commit }, value) {
      commit('setList', value);
    },
  },
  getters: {
    getList(state) {
      return state.lists;
    },
  },
  modules: {}
})
