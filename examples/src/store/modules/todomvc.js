// Index.vue里watch了state.todoList state.currentFilter 两者有任何变化都会存入localStorage todomvc
// 在这里拿出localStorage todomvc
const todomvc = JSON.parse(window.localStorage.getItem('todomvc'))

export default {
  namespaced: true,

  getters: {
    // 全部完成 isCompletedAll true
    // 有一个没完成 isCompletedAll false
    isAllCompleted (state) {
      return state.todoList.every(todo => todo.isCompleted)
    },
    // 根据currentFilter 得到filterTodoList
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
    // todoList: [{
    //   id: 1,
    //   text: 121,
    //   isCompleted: false
    // }],
    todoList: todomvc ? todomvc.todoList : [],
    currentFilter: todomvc ? todomvc.currentFilter : 'all'
  },

  mutations: {
    addTodo (state, text) {
      state.todoList.push({
        id: Date.now(),
        text,
        isCompleted: false
      })
    },
    delTodo (state, todo) {
      state.todoList = state.todoList.filter(item => item.id !== todo.id)
    },
    editTodo (state, { todo, text = todo.text, isCompleted = todo.isCompleted }) {
      todo.text = text
      todo.isCompleted = isCompleted
    },
    setCurrentFilter (state, filter) {
      state.currentFilter = filter
    }
  },

  actions: {
    addTodo ({ commit }, text) {
      commit('addTodo', text)
    },
    delTodo ({ commit }, todo) {
      commit('delTodo', todo)
    },
    clearCompleted ({ commit, state }) {
      state.todoList.filter(item => item.isCompleted).forEach(todo => {
        commit('delTodo', todo)
      })
    },
    editTodo ({ commit }, { todo, text }) {
      commit('editTodo', { todo, text })
    },
    toggleTodo ({ commit }, todo) {
      commit('editTodo', { todo, isCompleted: !todo.isCompleted })
    },
    toggleAll ({ commit, state, getters }) {
      const isAllCompleted = getters.isAllCompleted
      state.todoList.forEach(todo => {
        commit('editTodo', { todo, isCompleted: !isAllCompleted })
      })
    },
    filterTodos ({ commit }, filter) {
      commit('setCurrentFilter', filter)
    }
  }
}
