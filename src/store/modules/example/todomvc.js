let id = 0

export default {
  namespaced: true,

  getters: {
    // 全部完成 isCompletedAll true
    // 有一个没完成 isCompletedAll false
    isAllCompleted (state) {
      let isAllCompleted = true
      state.todoList.forEach(todo => {
        if (!todo.isCompleted) {
          isAllCompleted = false
        }
      })
      return isAllCompleted
    }
  },

  state: {
    todoList: [
      // {
      //   id: 1,
      //   text: 121,
      //   isCompleted: false,
      //   isEditing: false
      // }
    ]
  },

  mutations: {
    addTodo (state, text) {
      id++
      state.todoList.push({
        id,
        text,
        isCompleted: false,
        isEditing: false
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
      currentTodo.isEditing = false
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
    }
  }
}
