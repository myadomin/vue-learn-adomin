<template>
  <div>
    <div>
      <Message1 :msg1="msg.msg1" />
      <Message2 :msg2="msg.msg2" />
      <Message3 :msg3="msg.msg3" />
    </div>
    <div>
      <el-button type="primary" @click="changeMsg1()">改变msg1</el-button>
      <el-button type="primary" @click="changeMessage1()">dispatch改变message1</el-button>
    </div>
  </div>
</template>

<script>
import Message1 from '@/components/Message1.vue'
import Message2 from '@/components/Message2.vue'
import Message3 from '@/components/Message3.vue'
import API from '@/api/index.js'
import { mapState } from 'vuex'

export default {
  components: {
    Message1,
    Message2,
    Message3
  },
  data () {
    return {
      msg: {
        msg1: '11',
        msg2: '22',
        msg3: '33'
      }
    }
  },
  computed: {
    ...mapState('counter', [
      'number'
    ])
  },
  methods: {
    changeMsg1 () {
      // 只改变了this.msg.msg1 只有用了this.msg.msg1的Message1组件执行updated
      this.msg = {
        msg1: '1111111',
        msg2: '22',
        msg3: '33'
      }
    },
    changeMessage1 () {
      this.$store.dispatch('counter/changeMessage1', {
        message1: 'm11111',
        message2: 'm2',
        message3: 'm3'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>

