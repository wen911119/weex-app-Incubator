<template>
    <div class="home-page flex flex-column flex-1">
        <status-bar></status-bar>
        <search-bar :search="search"></search-bar>
        <div class="flex-1">
            <scroller class="scroller flex-1" @loadmore="loadmore" show-scrollbar=false ref="scroller" loadmoreoffset=100>
                <slider class="slider" interval="3000" auto-play="true">
                    <div class="frame" v-for="img in imageList">
                        <image class="image" resize="cover" :src="img.src"></image>
                    </div>
                </slider>
                <panel ref="panel" template="wap_index_banner1" id="375" @update="panelUpdate"></panel>
                <UC-scroll-fix></UC-scroll-fix>
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
    import navigator from '../../../../plugins/navigator'
    import StatusBar from '../../../components/StatusBar.vue'
    import UCScrollFix from '@/components/UCScrollFix.vue'
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
                entryList: state => state.home.entryList,
                search: state => state.home.search
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
            loadmore() {
                const modal = weex.requireModule('modal')
                modal.toast({
                    message: 'bottom',
                    duration: 0.8
                })
                this.$refs.panel.detect()
            },
            panelUpdate() {
                this.$refs.scroller.updateLayout && this.$refs.scroller.updateLayout()
            },
            goto() {
                navigator.push('list')
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
            Goto,
            StatusBar,
            UCScrollFix
        }
    }
</script>
<style scoped>
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