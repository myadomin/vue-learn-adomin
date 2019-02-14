import Vuex from 'vuex'
import chat from './modules/chat'
import count from './modules/count'
import shopCart from './modules/shopCart'
import todomvc from './modules/todomvc'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    chat,
    count,
    shopCart,
    todomvc
  }
})
