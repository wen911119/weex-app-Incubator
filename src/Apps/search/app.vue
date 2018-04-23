<template>
    <div class="search-app flex flex-column">
        <status-bar bgColor="#f7f7f7"></status-bar>
        <div class="input-box flex flex-row flex-v-center">
            <div class="close-icon flex flex-x-center" @click="close">
                <text class="iconfont close-icon-text">&#xe611;</text>
            </div>
            <div class="input-wrap flex-1 flex flex-row">
                <div class="input-border flex-1 flex flex-row flex-v-center">
                    <input type="text" class="input flex-1" @input="onInput" :placeholder="placeholder">
                </div>
                <div class="search-icon flex flex-x-center">
                    <text class="iconfont search-icon-text">&#xe60f;</text>
                </div>
            </div>
        </div>
        <scroller class="flex-1" show-scrollbar=false v-if="keyword">
            <associate :seed="keyword" @select="gotoList"></associate>
        </scroller>
        <div v-else>
            <text class="hot-box-title text28">热门搜索:</text>
            <div class="hot-box flex flex-row">
                <text v-for="item in hotwords" class="hot-word text28" @click="gotoList(item)">{{item}}</text>
            </div>
        </div>
    </div>
</template>

<script>
    import Associate from './components/associate.vue'
    import navigator from '../../../plugins/navigator'
    import StatusBar from '../../components/StatusBar.vue'


    export default {
        name: 'App',
        data() {
            return {
                keyword: '',
                placeholder: '',
                hotwords: []
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
            let self = this
            this.$getNavigatorInfo().then(function (data) {
                self.placeholder = data.searchInfo.placeholder
                self.hotwords = data.searchInfo.hotwords
            })
        },
        methods: {
            close() {
                navigator.back()
            },
            onInput(event) {
                console.log(event.value)
                this.keyword = event.value
            },
            gotoList(keyword) {
                navigator.push('list', { keyword })
            }
        },
        components: {
            Associate,
            StatusBar
        }
    }
</script>

<style scoped>
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
        outline: none;
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

    .hot-box-title {
        height: 102px;
        line-height: 102px;
        padding-left: 35px;
        padding-right: 35px;
        color: #919191;
    }

    .hot-box {
        flex-wrap: wrap;
        padding-left: 35px;
        padding-right: 35px;
        justify-content: space-between;
    }

    .hot-word {
        color: #333;
        border-width: 1px;
        border-radius: 8px;
        border-color: #c7c7c7;
        width: 175px;
        height: 60px;
        line-height: 58px;
        text-align: center;
        margin-bottom: 37.5px;
    }
</style>