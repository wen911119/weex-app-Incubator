<template>
    <div class="flex flex-x-center">
        <text>new app</text>
        <text>{{gid}}</text>
        <text>{{count}}</text>
        <wxc-button text="加加加" @wxcButtonClicked="add(1)"></wxc-button>
        <test></test>
    </div>
</template>

<script>
    // weex-ui 文档地址 https://alibaba.github.io/weex-ui/#/cn/with-weex-toolkit
    import { WxcButton } from 'weex-ui'
    import { mapState, mapActions } from 'vuex'
    import test from './components/test.vue'
    
    export default {
        name: 'App',
        data() {
            return {
                gid:''
            }
        },
        computed: {
            ...mapState({
                count: state => state.count
            })
        },
        mounted(){
            let self = this
            this.$getNavigatorInfo().then(function (data) {
                self.gid = data.id
            })
        },
        methods: {
            ...mapActions({
                add: "add"
            })
        },
        components: {
            WxcButton,
            test
        }
    }
</script>

<style scoped>
</style>