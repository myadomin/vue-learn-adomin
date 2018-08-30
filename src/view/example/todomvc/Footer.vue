<template>
  <footer class="footer">
    <span class="todo-count"><strong>2</strong> items left </span> 
    <ul class="filters">
      <li><a href="#/all" class="selected">All</a></li>
      <li><a href="#/active" class="">Active</a></li>
      <li><a href="#/completed" class="">Completed</a></li>
    </ul> 
    <button class="clear-completed" style=""> Clear completed </button>
  </footer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
  }
}
</script>
