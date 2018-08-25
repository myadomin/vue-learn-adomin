export default {
  namespaced: true,
  state: {
    number: 0
  },
  getters: {
  },
  mutations: {
    increment (state, payload) {
      console.log(payload)
      state.number = state.number + payload
    }
  },
  actions: {
    increment (obj, payload) {
      const { commit, state, rootState, dispatch, getters, rootGetters } = obj
      commit('increment', payload.num)
    }
  }
}
