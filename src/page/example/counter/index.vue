<template>
  <div>
    <span> Clicked: {{ count }} times, count is</span>
    <span> {{ isCountEven ? 'odd' : 'even' }}</span>.
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapState('example/count', ['count']),
    ...mapGetters('example/count', ['isCountEven'])
  },
  methods: {
    ...mapActions('example/count', [
      'increment',
      'decrement',
      'incrementIfOdd',
      'incrementAsync'
    ])
  }
}
</script>

<style scoped>

</style>
