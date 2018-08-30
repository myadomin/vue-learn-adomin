let id = 0

export default {
  namespaced: true,

  getters: {
    // 全部完成 isCompletedAll true
    // 有一个没完成 isCompletedAll false
    isAllCompleted (state) {
      return state.todoList.every(todo => todo.isCompleted)
    },
    filterTodoList (state) {
      switch (state.currentFilter) {
        case 'all':
          return state.todoList
        case 'active':
          return state.todoList.filter(todo => !todo.isCompleted)
        case 'completed':
          return state.todoList.filter(todo => todo.isCompleted)
      }
    },
    // 还剩下多少个未完成todo
    todoItemsLeft (state) {
      return state.todoList.filter(todo => !todo.isCompleted).length
    }
  },

  state: {
    todoList: [
      // {
      //   id: 1,
      //   text: 121,
      //   isCompleted: false,
      // }
    ],
    currentFilter: 'all'
  },

  mutations: {
    addTodo (state, text) {
      id++
      state.todoList.push({
        id,
        text,
        isCompleted: false
      })
    },
    toggleAll (state, isAllCompleted) {
      state.todoList.forEach(todo => {
        todo.isCompleted = !isAllCompleted
      })
    },
    delTodo (state, todo) {
      state.todoList = state.todoList.filter(item => item.id !== todo.id)
    },
    editTodo (state, {todo, editDoneValue}) {
      const currentTodo = state.todoList.find(item => item.id === todo.id)
      currentTodo.text = editDoneValue
    },
    filterTodos (state, filter) {
      state.currentFilter = filter
    },
    clearCompleted (state) {
      state.todoList = state.todoList.filter(todo => !todo.isCompleted)
    }
  },

  actions: {
    addTodo ({ commit }, text) {
      commit('addTodo', text)
    },
    toggleAll ({ commit, getters }) {
      commit('toggleAll', getters.isAllCompleted)
    },
    delTodo ({ commit }, todo) {
      commit('delTodo', todo)
    },
    editTodo ({ commit }, payload) {
      commit('editTodo', payload)
    },
    filterTodos ({ commit }, filter) {
      commit('filterTodos', filter)
    },
    clearCompleted ({ commit }) {
      commit('clearCompleted')
    }
  }
}
