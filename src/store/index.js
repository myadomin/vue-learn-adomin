import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'
import chat from './modules/chat'
import count from './modules/count'
import shopCart from './modules/shopCart'
import todomvc from './modules/todomvc'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    counter,
    chat,
    count,
    shopCart,
    todomvc
  }
})
