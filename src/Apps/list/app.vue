<template>
    <div class="flex flex-column">
        <status-bar bgColor="#f7f7f7"></status-bar>
        <filters-bar @filter="openRightPopup" @filterChange="filterChange" @switch="toggleListType"></filters-bar>
        <list ref="list" class="flex-1" @loadmore="loadmore" loadmoreoffset=10 :show-scrollbar="false">
            <cell ref="listTop"></cell>
            <cell v-for="item in goods">
                <goods-item :goods="item" @onclick="gotoDetail(item.productId)"></goods-item>
            </cell>
            <cell ref="listBottom">
                <UC-scroll-fix></UC-scroll-fix>
            </cell>
        </list>

        <wxc-popup :show="isRightShow" :animation="{duration:150}" :overlay-cfg="{opacity:0.2,duration:150}" @wxcPopupOverlayClicked="popupOverlayRightClick"
            pos="right" width="645">
            <filter-panel :keyword="conditionsBackup.keyword" class="flex-1" @confirm="applyFilter"></filter-panel>
        </wxc-popup>
    </div>
</template>

<script>
    import navigator from '../../../plugins/navigator'
    import FiltersBar from './components/filtersBar.vue'
    import FilterPanel from '../../components/FilterPanel/app.vue'
    import StatusBar from '../../components/StatusBar.vue'
    import GoodsItem from '@/components/GoodsItem02.vue'
    import UCScrollFix from '@/components/UCScrollFix.vue'
    import { WxcPopup, WxcButton, WxcStepper } from 'weex-ui'
    import { mapState, mapActions } from 'vuex'


    export default {
        data() {
            return {
                isRightShow: false,
                keyword: '',
                conditionsBackup: {}
            }
        },
        computed: {
            ...mapState({
                goods: state => state.list.goods,
                currentPage: state => state.list.meta.currentPage,
                totalPage: state => state.list.meta.totalPage
            })
        },
        watch: {
            currentPage(nv) {
                nv === 1 && weex.requireModule('dom').scrollToElement(this.$refs.listTop, { animated: false })
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
                self.conditionsBackup.keyword = data.keyword
                self.conditionsBackup.currentPage = self.currentPage + 1
                self.fetchGoodsData(self.conditionsBackup)
            }).catch(function (e) {
                console.log(e)
            })

        },
        methods: {
            applyFilter(filter) {
                this.conditionsBackup = Object.assign(this.conditionsBackup, { filterData: filter }, { currentPage: 1 })
                this.fetchGoodsData(this.conditionsBackup)
                this.isRightShow = false
            },
            openRightPopup() {
                this.isRightShow = true
            },
            popupOverlayRightClick() {
                this.isRightShow = false
            },
            filterChange(filters) {
                this.conditionsBackup = Object.assign(this.conditionsBackup, filters, { currentPage: 1 })
                this.fetchGoodsData(this.conditionsBackup)
            },
            toggleListType(listType) {
                console.log(listType)
            },
            loadmore() {
                console.log('loadmore')
                this.conditionsBackup = Object.assign(this.conditionsBackup, { currentPage: this.currentPage + 1 })
                this.fetchGoodsData(this.conditionsBackup)
            },
            filterConfirm(v) {
                this.isRightShow = false
                this.conditionsBackup = Object.assign(this.conditionsBackup, { filterData: v })
                this.fetchGoodsData(this.conditionsBackup)
            },
            gotoDetail(gid) {
                navigator.push('detail', { id: gid })
            },
            ...mapActions({
                fetchGoodsData: 'list/fetchGoodsData'
            })
        },
        components: {
            FiltersBar,
            FilterPanel,
            WxcPopup,
            WxcButton,
            WxcStepper,
            StatusBar,
            GoodsItem,
            UCScrollFix
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

    .goods-cell {
        width: 348px;
    }

    .loader {
        font-size: 10px;
        margin: 50px auto;
        text-indent: -9999em;
        width: 11em;
        height: 11em;
        border-radius: 50%;
        background: #ffffff;
        background: -moz-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
        background: -webkit-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
        background: -o-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
        background: -ms-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
        background: linear-gradient(to right, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
        position: relative;
        -webkit-animation: load3 1.4s infinite linear;
        animation: load3 1.4s infinite linear;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
    }

    .loader:before {
        width: 50%;
        height: 50%;
        background: #ffffff;
        border-radius: 100% 0 0 0;
        position: absolute;
        top: 0;
        left: 0;
        content: '';
    }

    .loader:after {
        background: #0dc5c1;
        width: 75%;
        height: 75%;
        border-radius: 50%;
        content: '';
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }

    @-webkit-keyframes load3 {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @keyframes load3 {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
</style>