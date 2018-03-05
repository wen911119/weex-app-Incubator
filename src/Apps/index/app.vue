<template>
    <div class="flex flex-column">
        <search-bar></search-bar>
        <div class="flex-1 flex">
            <scroller class="scroller flex-1">
                <slider class="slider" interval="3000" auto-play="true">
                    <div class="frame" v-for="img in imageList">
                        <image class="image" resize="cover" :src="img.src"></image>
                    </div>
                </slider>
                <div class="wrapper">
                    <div class="hold">
                        <text class="list-item" v-for="item of test" @click="goto">{{item}}</text>
                    </div>
                    <goto target="list">
                        <text>跳转到list页</text>
                    </goto>
                    <text @click="goto">跳到第二页</text>
                    <text @click="testAlert">testAlert{{count}}</text>
                </div>
                <wxc-button text="Open Popup" @wxcButtonClicked="buttonClicked"></wxc-button>
                <wxc-popup width="500" pos="left" :show="isShow" @wxcPopupOverlayClicked="overlayClicked"></wxc-popup>
            </scroller>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    import { WxcButton, WxcPopup } from 'weex-ui'
    import Goto from '@/components/Goto'
    import Router from '../../../plugins/router'
    import SearchBar from './components/search.vue'
    const stream = weex.requireModule('stream')
    export default {
        name: 'App',
        data() {
            return {
                logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',
                test: [],
                imageList: [
                    { src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg' },
                    { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg' },
                    { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg' }
                ],
                isShow: false
            }
        },
        computed: {
            ...mapState({
                count: state => state.count
            })
        },
        mounted() {
            for (let i = 0; i < 50; i++) {
                this.test.push(i)
            }
            stream.fetch({
                method: 'GET',
                url: 'http://m.banggo.com/dvert/getDvertInfo?siteMark=wap_index',
                type: 'jsonp'
            }, function (ret) {
                console.log(ret, 22222)
                if (!ret.ok) {
                    console.log(ret)
                    //me.getJsonpResult = "request failed";
                } else {
                    console.log('get:' + ret);
                    //me.getJsonpResult = JSON.stringify(ret.data);
                }
            }, function (response) {
                console.log('get jsonp in progress:' + response.length);
                //me.getJsonpResult = "bytes received:" + response.length;
            });

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
                console.log(1111111)
                Router.push('list')
            },
            testAlert() {
                alert()
            },
            buttonClicked() {
                this.isShow = true
            },
            overlayClicked() {
                this.isShow = false
            }
        },
        components: {
            Goto,
            SearchBar,
            WxcButton,
            WxcPopup
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

    .flex-column {
        flex-direction: column;
    }

    .image {
        width: 750px;
        height: 375px;
    }

    .slider {
        width: 750px;
        height: 375px;
    }

    .frame {
        width: 750px;
        height: 375px;
        position: relative;
    }

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
        width: 700px;
    }

    .list-item {
        background-color: #727272;
        color: #fff;
        height: 80px;
        line-height: 80px;
        text-align: center;
        margin-bottom: 10px;
    }
</style>