<template>
    <div class="home">
        <img src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <el-button type="primary" @click="getProducts">getProducts</el-button>
        <el-button type="primary" @click="getProductsBuy">getProductsBuy</el-button>
        <el-button type="primary" @click="dispatch">dispatch</el-button>
        <span>{{this.number}}</span>
    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import API from '@/api/index.js';
import { mapState } from 'vuex'

export default {
    name: 'home',
    components: {
        HelloWorld
    },
    data () {
        return {
        }
    },
    computed: {
        ...mapState('counter', [
            'number'
        ])
    },
    methods: {
        getProducts () {
            API.getProducts().then((res) => {
                console.log(res, 11);
            });
        },
        getProductsBuy() {
            API.getProductsBuy().then((res) => {
                console.log(res, 22);
            });
        },
        dispatch () {
            this.$store.dispatch('counter/increment', {num: 1})
        }
    }
}
</script>

<style lang="stylus" scoped>
.home
    img
        display block
        margin: 200px auto 0
</style>

