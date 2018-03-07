<template>
    <div class="home-page flex flex-column flex-1">
        <search-bar></search-bar>
        <div class="flex-1">
            <scroller class="scroller flex-1" @loadmore="loadmore" ref="scroller" loadmoreoffset=100>
                <slider class="slider" interval="3000" auto-play="true">
                    <div class="frame" v-for="img in imageList">
                        <image class="image" resize="cover" :src="img.src"></image>
                    </div>
                </slider>
                <panel ref="panel" template="wap_index_banner1" id="375" @update="panelUpdate"></panel>
                <!-- <div class="flex-x-center">
                    <div class="hold">
                        <text class="list-item" v-for="item of test" @click="goto">{{item}}</text>
                    </div>
                    <goto target="list">
                        <text>跳转到list页</text>
                    </goto>
                    <text @click="goto">跳到第二页</text>
                    <text>testAlert{{count}}</text>
                </div>
                <wxc-button text="Open Popup" @wxcButtonClicked="buttonClicked"></wxc-button>
                <wxc-popup width="500" pos="left" :show="isShow" @wxcPopupOverlayClicked="overlayClicked"></wxc-popup> -->
            </scroller>
        </div>
    </div>
</template>
<script>
    import { mapState, mapActions } from 'vuex'
    import { WxcButton, WxcPopup } from 'weex-ui'
    import SearchBar from './search.vue'
    import Panel from './panel.vue'
    import Goto from '@/components/Goto'
    import Router from '../../../../plugins/router'

    export default {
        data() {
            return {
                test: [],
                isShow: false
            }
        },
        computed: {
            ...mapState({
                count: state => state.home.count,
                imageList: state => state.home.imageList,
                entryList: state => state.home.entryList
            })
        },
        created() {
            this.fetchImageList()
        },
        mounted() {
            for (let i = 0; i < 50; i++) {
                this.test.push(i)
            }
        },
        methods: {
            ...mapActions({
                fetchImageList: 'home/fetchImageList'
            }),
            loadmore(){
                const modal = weex.requireModule('modal')
                modal.toast({
                    message: 'bottom',
                    duration: 0.8
                })
                this.$refs.panel.detect()
            },
            panelUpdate(){
                this.$refs.scroller.updateLayout()
            },
            goto() {
                Router.push('list')
            },
            buttonClicked() {
                this.isShow = true
            },
            overlayClicked() {
                this.isShow = false
            }
        },
        components: {
            SearchBar,
            Panel,
            WxcButton,
            WxcPopup,
            Goto
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

    .hold {
        background-color: #f5f5f5;
        width: 700px;
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

    .list-item {
        background-color: #727272;
        color: #fff;
        height: 80px;
        line-height: 80px;
        text-align: center;
        margin-bottom: 10px;
    }
</style>