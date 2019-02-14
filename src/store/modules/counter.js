export default {
  namespaced: true,
  state: {
    number: 0
  },
  getters: {
  },
  mutations: {
    increment (state, payload) {
      state.number = state.number + payload.num
    }
  },
  actions: {
    increment ({ commit, state, rootState, dispatch, getters, rootGetters }, payload) {
      commit('increment', payload)
    }
  }
}
