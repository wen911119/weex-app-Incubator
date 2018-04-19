<template>
    <div class="search-app flex flex-column">
        <status-bar bgColor="#f7f7f7"></status-bar>
        <text>new app</text>
    </div>
</template>

<script>
    import navigator from '../../../plugins/navigator'
    import StatusBar from '../../components/StatusBar.vue'


    export default {
        name: 'App',
        data() {
            return {

            }
        },
        beforeCreate() {
            const domModule = weex.requireModule('dom')
            domModule.addRule('fontFace', {
                'fontFamily': "iconfont",
                'src': "url('http://s.banggo.com/pub1/bgwap/public/icon/bgwap-iconfont.ttf?20170904')"
            })
        },
        mounted() {

        },
        methods: {

        },
        components: {
            StatusBar
        }
    }
</script>

<style scoped>
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

    .flex-row {
        flex-direction: row;
    }

    .flex-column {
        flex-direction: column;
    }

    .iconfont {
        font-family: iconfont;
    }

    .text {
        color: #333;
    }

    .text24 {
        font-size: 24px;
    }

    .text26 {
        font-size: 26px;
    }

    .text28 {
        font-size: 28px;
    }

    .text30 {
        font-size: 30px;
    }

    .text32 {
        font-size: 32px;
    }

    .text34 {
        font-size: 34px;
    }

    .text36 {
        font-size: 36px;
    }

    .text38 {
        font-size: 38px;
    }
</style>