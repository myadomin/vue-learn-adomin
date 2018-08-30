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
  // plugins: [store => {
  //   store.subscribe((mutation, state) => {
  //     // 所有mutations都会进入这里
  //     const todoList = state.example.todomvc.todoList
  //     const currentFilter = state.example.todomvc.currentFilter
  //     const reg = new RegExp('example/todomvc/')
  //     // example/todomvc/里的mutations才执行下面 存储todoList currentFilter
  //     // 也就是说任何对todoList currentFilter的修改都要走mutations 保证都能进入这里以存入localStorage
  //     if (reg.test(mutation.type)) {
  //       window.localStorage.setItem('todomvc', JSON.stringify({ todoList, currentFilter }))
  //     }
  //   })
  // }]
})
