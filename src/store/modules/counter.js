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
    },
    changeMessage1 (state, payload) {
      // 如果改变state.message.message1 那只有绑定了state.message.message1的Message1组件执行updated
      // state.message.message1 = payload.message1
      // 如果改变state.message 那绑定了state.message.xxx的Message1 2 3组件都会执行updated
      state.message = payload
    }
  },
  actions: {
    increment (obj, payload) {
      const { commit, state, rootState, dispatch, getters, rootGetters } = obj
      commit('increment', payload.num)
    },
    changeMessage1 ({ commit }, payload) {
      commit('changeMessage1', payload)
    }
  }
}
