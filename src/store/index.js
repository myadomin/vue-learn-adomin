import Vuex from 'vuex'
import counter from './modules/counter'
import example from './modules/example/index'
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
    counter,
    example
  }
})
