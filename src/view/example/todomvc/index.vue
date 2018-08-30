<style src="todomvc-app-css/index.css"></style>
<style scoped>
.todoapp {
  margin: 260px 0 0 0;
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

window.addEventListener('hashchange', () => {
  console.log(window.location.hash)
})

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
  computed: {
  }
}
</script>
