<style src="todomvc-app-css/index.css"></style>
<style scoped lang="less">
.todoapp {
  margin-top: 200px;
}
</style>

<template>
  <section class="todoapp">
    <AddTodo />
    <TodoList />
    <Footer />
  </section>
</template>

<script>
import { mapState } from 'vuex'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'

export default {
  data () {
    return {
    }
  },
  components: {
    AddTodo,
    TodoList,
    Footer
  },
  watch: {
    todoList: {
      handler (val) {
        this.setLocalStroage()
      },
      deep: true
    },
    currentFilter (val) {
      this.setLocalStroage()
    }
  },
  computed: {
    ...mapState('todomvc', ['currentFilter', 'todoList'])
  },
  methods: {
    setLocalStroage () {
      window.localStorage.setItem('todomvc', JSON.stringify({
        todoList: this.todoList,
        currentFilter: this.currentFilter
      }))
    }
  }
}
</script>
