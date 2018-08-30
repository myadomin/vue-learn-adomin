<template>
  <section class="main">
    <!-- v-model="isAllCompleted" 拆分成:checked="isAllCompleted" @click="toggleAll"  -->
    <input id="toggle-all" type="checkbox" class="toggle-all" :checked="isAllCompleted" /> 
    <label for="toggle-all" @click="toggleAll"></label> 
    <ul class="todo-list">
      <li class="todo" 
        v-for="todo in todoList" 
        :key="todo.id" 
        @dblclick="todo.isEditing = true"
        :class="{'completed': todo.isCompleted, 'editing': todo.isEditing}">
        <div class="view">
          <input type="checkbox" class="toggle" v-model="todo.isCompleted" /> 
          <label>{{ todo.text }}</label> 
          <button class="destroy" @click="delTodo(todo)"></button>
        </div> 
        <input class="edit" 
          v-show="todo.isEditing" 
          v-focus="todo.isEditing"
          @keyup.enter="(ev) => {
            doneEdit(ev, todo)
          }"
          @blur="(ev) => {
            doneEdit(ev, todo)
          }"
          @keyup.esc="(ev) => {
            cancelEdit(ev, todo)
          }"
          :value="todo.text" />
      </li>
    </ul>
  </section> 
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      isEditing: false
    }
  },
  watch: {
  },
  directives: {
    focus (el, { value }, { context }) {
      if (value) {
        context.$nextTick(() => {
          el.focus()
        })
      }
    }
  },
  computed: {
    ...mapState('example/todomvc', ['todoList']),
    ...mapGetters('example/todomvc', ['isAllCompleted'])
  },
  methods: {
    ...mapActions('example/todomvc', ['toggleAll']),
    ...mapActions('example/todomvc', ['delTodo', 'editTodo']),
    doneEdit (ev, todo) {
      console.log(121)
      const editDoneValue = ev.target.value.trim()
      if (editDoneValue) {
        this.editTodo({ todo, editDoneValue })
      } else {
        this.delTodo(todo)
      }
    },
    cancelEdit (ev, todo) {
      ev.target.value = todo.text
      todo.isEditing = false
    }
  }
}
</script>
