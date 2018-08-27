<template>
    <div class="hello">
        <h3>{{ msg3 }} --- {{$store.state.counter.message.message3}}</h3>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg3: String
  },
  mounted () {
  },
  updated () {
    console.log('hellowWorld3-updated')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
</style>
