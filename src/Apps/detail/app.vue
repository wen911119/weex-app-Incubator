<template>
    <div class="flex flex-x-center">
        <text>{{count}}</text>
        <wxc-button text="加加加" @wxcButtonClicked="add(1)"></wxc-button>
    </div>
</template>

<script>
    // weex-ui 文档地址 https://alibaba.github.io/weex-ui/#/cn/with-weex-toolkit
    import { WxcButton } from 'weex-ui'
    import { mapState, mapActions } from 'vuex'
    
    export default {
        name: 'App',
        data() {
            return {
            }
        },
        computed: {
            ...mapState({
                count: state => state.count
            })
        },
        methods: {
            ...mapActions({
                add: "add"
            })
        },
        components: {
            WxcButton
        }
    }
</script>

<style>
    .flex {
        display: flex;
    }

    .flex-1 {
        flex: 1;
    }

    .flex-h-center {
        justify-content: center;
    }

    .flex-v-center {
        align-items: center;
    }

    .flex-x-center {
        justify-content: center;
        align-items: center;
    }
</style>