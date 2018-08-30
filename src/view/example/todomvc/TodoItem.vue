<template>
  <li class="todo" 
    @dblclick="isEditing = true"
    :class="{'completed': todo.isCompleted, 'editing': isEditing}">
    <div class="view">
      <input type="checkbox" class="toggle" @change="toggleTodo(todo)" :checked="todo.isCompleted" /> 
      <label @click="toggleTodo(todo)">{{ todo.text }}</label> 
      <button class="destroy" @click="delTodo(todo)"></button>
    </div> 
    <input class="edit" 
      v-show="isEditing" 
      v-focus="isEditing"
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
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      isEditing: false
    }
  },
  props: ['todo'],
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
  },
  methods: {
    ...mapActions('example/todomvc', ['delTodo', 'toggleTodo', 'editTodo']),
    doneEdit (ev, todo) {
      const editDoneValue = ev.target.value.trim()
      if (editDoneValue) {
        this.editTodo({ todo, editDoneValue })
        this.isEditing = false
      } else {
        this.delTodo(todo)
      }
    },
    cancelEdit (ev, todo) {
      ev.target.value = todo.text
      this.isEditing = false
    }
  }
}
</script>
