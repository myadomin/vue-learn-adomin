<template>
  <ul class="thread-list">
    <li v-for="thread in threads" 
      :key="thread.id" 
      :class="{'active': thread.id === currentThread.id}"
      @click="changeThread(thread.id)"
      class="thread-list-item">
      <h5 class="thread-name">
        {{ thread.name }}
      </h5> 
      <div class="thread-time">
      {{ thread.lastMessage.time }}
      </div> 
      <div class="thread-last-message">
      {{ thread.lastMessage.text }}
      </div>
    </li>
  </ul>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState('example/chat', ['threads']),
    ...mapGetters('example/chat', ['currentThread'])
  },
  methods: {
    ...mapActions('example/chat', ['changeThread'])
  }
}
</script>
