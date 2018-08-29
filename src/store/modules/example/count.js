export default {
  namespaced: true,

  getters: {
    evenOrOdd (state) {
      return (state.count % 2) === 0 ? 'even' : 'odd'
    }
  },

  state: {
    count: 0
  },

  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    }
  },

  actions: {
    increment ({ commit }) {
      commit('increment')
    },
    decrement ({ commit }) {
      commit('decrement')
    },
    incrementIfOdd ({ commit, state }) {
      if (state.count % 2 !== 0) {
        commit('increment')
      }
    },
    incrementAsync ({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('increment')
          resolve()
        }, 1000)
      })
    }
  }
}
