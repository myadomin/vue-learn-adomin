export default {
  namespaced: true,
  state: {
    number: 0,
    message: {
      message1: 'm1',
      message2: 'm2',
      message3: 'm3'
    }
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
