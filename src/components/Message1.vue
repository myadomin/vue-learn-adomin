<template>
    <div class="hello">
        <h3>{{ msg1 }} --- {{$store.state.counter.message.message1}}</h3>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg1: String
  },
  updated () {
    console.log('hellowWorld1-updated')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
</style>
