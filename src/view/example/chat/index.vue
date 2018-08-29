<style src="./chat.css"></style>

<template>
  <div class="chatapp">
    <div class="thread-section">
      <div class="thread-count">
      <span style=""> Unread threads: 2 </span>
      </div> 
      <ul class="thread-list">
        <li v-for="thread in threads" 
          :key="thread.id" 
          :class="{'active': thread.id === currentThreadID}"
          @click="changeCurrentThread(thread.id)"
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
    </div> 
    <div class="message-section">
      <h3 class="message-thread-heading">Functional Heads</h3> 
      <ul class="message-list">
        <li v-for="message in currentMessages" :key="message.id" class="message-list-item">
          <h5 class="message-author-name">{{ message.authorName }}</h5> 
          <div class="message-time">
          {{ message.timestamp }}
          </div> 
          <div class="message-text">
          {{ message.text }}
          </div>
        </li>
      </ul> 
      <textarea class="message-composer" v-model="addedMessage" @keyup.enter.prevent="handleaddMessage"></textarea>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  data () {
    return {
      addedMessage: ''
    }
  },
  created () {
    this.getAllMessages()
  },
  computed: {
    ...mapState('example/chat', {
      threads: 'threads',
      currentThreadID: 'currentThreadID'
    }),
    ...mapGetters('example/chat', ['currentMessages'])
  },
  methods: {
    ...mapActions('example/chat', {
      getAllMessages: 'getAllMessages',
      addMessage: 'addMessage',
      changeCurrentThread: 'changeCurrentThread'
    }),
    handleaddMessage () {
      this.addMessage({
        text: this.addedMessage
      }).then(() => {
        this.addedMessage = ''
      })
    }
  }
}
</script>
