<template>
    <div class="home">
        <img src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
    name: 'home',
    components: {
        HelloWorld
    },
    data () {
        return {
        }
    },
    methods: {
    }
}
</script>

<style lang="stylus" scoped>
.home
    img
        display block
        margin: 200px auto 0
</style>

