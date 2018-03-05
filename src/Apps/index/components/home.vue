<template>
    <div class="home-page flex flex-column flex-1">
        <search-bar></search-bar>
        <div class="flex-1">
            <scroller class="scroller flex-1">
                <slider class="slider" interval="3000" auto-play="true">
                    <div class="frame" v-for="img in imageList">
                        <image class="image" resize="cover" :src="img.src"></image>
                    </div>
                </slider>
                <div class="flex-x-center">
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
                <wxc-popup width="500" pos="left" :show="isShow" @wxcPopupOverlayClicked="overlayClicked"></wxc-popup>
            </scroller>
        </div>
    </div>
</template>
<script>
    import { mapState, mapActions } from 'vuex'
    import { WxcButton, WxcPopup } from 'weex-ui'
    import SearchBar from './search.vue'
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
                imageList: state => state.home.imageList
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
            WxcButton,
            WxcPopup,
            Goto
        }
    }
</script>
<style scoped>
    /* .home-page {
        height: 100%;
    } */

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