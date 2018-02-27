<template>
    <div class="wrapper" @viewappear="onshow">
        <image :src="logo" class="logo" />
        <text class="greeting" @click="clear">The environment is ready!</text>
        <HelloWorld/>
        <goto target="list">
            <text>跳转到list页</text>
        </goto>

    </div>
</template>

<script>
    import RouterStackMixin from '@/mixins/routerStack.js'
    import HelloWorld from '@/components/HelloWorld'
    import Goto from '@/components/Goto'
    export default {
        name: 'App',
        mixins: [RouterStackMixin],
        data() {
            return {
                logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',
            }
        },
        ready(enterType) {
            var modal = weex.requireModule('modal')
            modal.toast({
                message: enterType,
                duration: 0.8
            })
        },
        methods: {
            clear() {
                const storage = weex.requireModule('storage')
            },
            onshow() {
                var modal = weex.requireModule('modal')
                modal.toast({
                    message: 'show',
                    duration: 0.8
                })
            }
        },
        components: {
            HelloWorld,
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