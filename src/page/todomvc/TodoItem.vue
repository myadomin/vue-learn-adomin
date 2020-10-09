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
      // 独立作用域 每一个TodoItem独享一个isEditing
      // 如果不封装TodoItem组件 那就需要todoList里的每个对象加一个isEditing的key
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
    ...mapActions('todomvc', ['delTodo', 'toggleTodo', 'editTodo']),
    doneEdit (ev, todo) {
      const editDoneText = ev.target.value.trim()
      if (editDoneText) {
        this.editTodo({ todo, text: editDoneText })
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
