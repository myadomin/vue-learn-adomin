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
    // 刷新页面state才会重置
    // 不刷新页面 只是通过前进后退或者输url进入页面 state不重置
    // 所以如果state.threads之前已set过就不再getAllMessages
    if (JSON.stringify(this.threads) === '{}') {
      this.getAllMessages()
    }
  },
  computed: {
    ...mapGetters('chat', ['currentThread']),
    ...mapState('chat', ['threads'])
  },
  methods: {
    ...mapActions('chat', [
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
