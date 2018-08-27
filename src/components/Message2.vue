<template>
    <div class="hello">
        <h3>{{ msg2 }} --- {{$store.state.counter.message.message2}}</h3>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg2: String
  },
  updated () {
    console.log('hellowWorld2-updated')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
</style>
