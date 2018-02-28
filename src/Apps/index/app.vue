<template>
    <app-shell>
        <div class="wrapper" @viewappear="onshow">
            <image :src="logo" class="logo" />
            <text class="greeting" @click="clear">The environment is ready!</text>
            <HelloWorld/>
            <div class="hold">
                <ul class="test-list">
                    <li v-for="item of test" @click="goto">{{item}}</li>
                </ul>
            </div>
            <goto target="list">
                <text>跳转到list页</text>
            </goto>
            <text @click="goto">跳到第二页</text>
        </div>
    </app-shell>
</template>

<script>
    import HelloWorld from '@/components/HelloWorld'
    import RouterStackMixin from '@/mixins/routerStack.js'
    import Goto from '@/components/Goto'
    import AppShell from '@/components/AppShell'
    import Router from '../../../plugins/router'

    export default {
        name: 'App',
        // mixins: [RouterStackMixin],
        data() {
            return {
                logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',
                test: []
            }
        },
        mounted() {
            let self = this
            // var modal = weex.requireModule('modal')
            // modal.toast({
            //     message: self.$ENTERTYPE,
            //     duration: 0.8
            // })
            for (let i = 0; i < 1500; i++) {
                this.test.push(i)
            }
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
            },
            goto() {
                Router.push('list')
            }
        },
        components: {
            HelloWorld,
            Goto,
            AppShell
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

    .hold {
        background-color: #f5f5f5;
        width: 100%;
    }

    .test-list li {
        background-color: #727272;
        color: #fff;
        height: 80px;
        line-height: 80px;
        text-align: center;
        margin-bottom: 10px;
    }
</style>