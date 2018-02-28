<template>
    <div class="wrapper">
        <image :src="logo" class="logo" />
        <text @click="back">返回</text>
    </div>
</template>

<script>
    import RouterStackMixin from '@/mixins/routerStack.js'
    import Router from '../../../plugins/router'
    
    import Goto from '@/components/Goto'
    export default {
        name: 'App',
        // mixins: [RouterStackMixin],
        data() {
            return {
                logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',
            }
        },
        mounted() {
            // var modal = weex.requireModule('modal')
            // modal.toast({
            //     message: this.$ENTERTYPE,
            //     duration: 0.8
            // })
        },
        methods: {

            back() {
                Router.back()
            }
        },
        components: {
            Goto
        }
    }
</script>

<style scoped>
    .wrapper {
        justify-content: center;
        align-items: center;
    }

    .logo {
        width: 424px;
        height: 200px;
    }

    .greeting {
        text-align: center;
        margin-top: 70px;
        font-size: 50px;
        color: #41B883;
    }

    .message {
        margin: 30px;
        font-size: 32px;
        color: #727272;
    }
</style>