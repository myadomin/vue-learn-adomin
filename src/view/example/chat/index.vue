<style src="./chat.css"></style>

<template>
  <div class="chatapp">
    <div class="thread-section">
      <div class="thread-count">threads</div> 
      <Thread />
    </div> 
    <div class="message-section">
      <h3 class="message-thread-heading">{{ currentThread && currentThread.name }}</h3> 
      <Message />
      <textarea class="message-composer" v-model="addedMessage" @keyup.enter.prevent="handleAddMessage"></textarea>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import Message from './Message'
import Thread from './Thread'

export default {
  data () {
    return {
      addedMessage: ''
    }
  },
  components: {
    Message,
    Thread
  },
  created () {
    this.getAllMessages()
  },
  computed: {
    ...mapGetters('example/chat', ['currentThread'])
  },
  methods: {
    ...mapActions('example/chat', [
      'getAllMessages',
      'addMessage'
    ]),
    handleAddMessage () {
      this.addMessage({
        text: this.addedMessage
      }).then(() => {
        this.addedMessage = ''
      })
    }
  }
}
</script>
