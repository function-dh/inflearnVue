import Vue from 'vue'
import Vuex from 'vuex'

// modules
import * as modules from './modules'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state : {
  },
  getters : {
  },
  mutations : {
  },
  actions : {
  },
  modules : modules.default,
})