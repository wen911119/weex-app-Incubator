<template>
    <div class="search-app flex flex-column">
        <div class="input-box flex flex-row flex-v-center">
            <div class="close-icon flex flex-x-center" @click="close">
                <text class="iconfont close-icon-text">&#xe611;</text>
            </div>
            <div class="input-wrap flex-1 flex flex-row">
                <div class="input-border flex-1 flex flex-row flex-v-center">
                    <input type="text" class="input flex-1">
                </div>
                <div class="search-icon flex flex-x-center">
                    <text class="iconfont search-icon-text">&#xe60f;</text>
                </div>
            </div>
        </div>
        <scroller class="flex-1" show-scrollbar=false>
            <associate seed="s"></associate>
        </scroller>
    </div>
</template>

<script>
    import Associate from './components/associate.vue'
    import Router from '../../../plugins/router'
    
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
        methods: {
            close(){
                Router.back()
            }
        },
        components: {
            Associate
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

    .input-box {
        height: 105px;
        background-color: #f7f7f7;
        padding-right: 35px;
    }

    .close-icon {
        height: 105px;
        width: 105px;
    }

    .close-icon-text {
        color: #474747;
        font-size: 36px;
    }

    .input-border {
        border-color: #eaeaea;
        border-width: 1px;
        box-sizing: border-box;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        margin-right: -1px;
        background-color: #fff;
        padding-left: 15px;
        padding-right: 15px;
    }

    .input {
        margin: 0;
        padding: 0;
        -webkit-appearance: none;
        height: 70px;
    }

    .search-icon {
        height: 75px;
        width: 75px;
        background-color: #f8584f;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }

    .search-icon-text {
        color: #fff;
        font-size: 51px;
    }
</style>