<template>
  <ul class="message-list">
    <li v-for="message in currentMessages" :key="message.id" class="message-list-item">
      <h5 class="message-author-name">{{ message.authorName }}</h5> 
      <div class="message-time">
      {{ $dayjs(message.timestamp).format('HH:mm:ss') }} 
      </div> 
      <div class="message-text">
      {{ message.text }}
      </div>
    </li>
  </ul> 
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters('chat', ['currentMessages'])
  },
  methods: {
  }
}
</script>
