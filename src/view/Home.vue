<template>
    <div class="home">
        <img src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <el-button type="primary" @click="getProducts">getProducts</el-button>
        <el-button type="primary" @click="getProductsBuy">getProductsBuy</el-button>
    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import API from '@/api/index.js';

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
    }
}
</script>

<style lang="stylus" scoped>
.home
    img
        display block
        margin: 200px auto 0
</style>

