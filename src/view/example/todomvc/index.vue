<style src="todomvc-app-css/index.css"></style>
<style scoped>
.todoapp {
  margin: 300px 0 0 0;
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
  computed: {
  }
}
</script>
