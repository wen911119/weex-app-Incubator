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
                'src': "url('https://ruiyun-assets.oss-cn-shanghai.aliyuncs.com/font/bgwap-iconfont.ttf')"
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
    .goods-cell {
        width: 348px;
    }
</style>