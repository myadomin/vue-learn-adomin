import Vuex from 'vuex'
import counter from './modules/counter'
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
    counter
  }
})
