<template>
  <header class="header">
    <h1>todos</h1>
    <input
      placeholder="What needs to be done?"
      v-model="todo"
      @keydown.enter="handleAddTodo"
      class="new-todo" />
  </header>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      todo: ''
    }
  },
  computed: {
  },
  methods: {
    ...mapActions('todomvc', ['addTodo']),
    handleAddTodo () {
      this.addTodo(this.todo)
      this.todo = ''
    }
  }
}
</script>

<style lang="less" scoped>
h1 {
  top: -100px
}
</style>
