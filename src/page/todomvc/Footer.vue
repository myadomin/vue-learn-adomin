<template>
  <footer class="footer" v-show="todoList.length">
    <span class="todo-count"><strong>{{ todoItemsLeft }}</strong> items left </span>
    <ul class="filters">
      <li v-for="filter in filters" :key="filter">
        <a
          style="cursor: pointer"
          :class="{'selected': currentFilter === filter}"
          @click="filterTodos(filter)">
          {{ filter }}
        </a>
      </li>
    </ul>
    <button class="clear-completed" @click="clearCompleted"> Clear completed </button>
  </footer>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  data () {
    return {
      filters: ['all', 'active', 'completed']
    }
  },
  computed: {
    ...mapState('todomvc', ['currentFilter', 'todoList']),
    ...mapGetters('todomvc', ['todoItemsLeft'])
  },
  methods: {
    ...mapActions('todomvc', ['filterTodos', 'clearCompleted'])
  }
}
</script>
