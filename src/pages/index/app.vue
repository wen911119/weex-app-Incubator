<template>
    <div class="wrapper">
        <image :src="logo" class="logo" />
        <text class="greeting">The environment is ready!</text>
        <HelloWorld/>
        <goto target="list">
            <text>跳转到list页</text>
        </goto>
    </div>
</template>

<script>
    import HelloWorld from '@/components/HelloWorld'
    import Goto from '@/components/Goto'
    export default {
        name: 'App',
        data() {
            return {
                logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',
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