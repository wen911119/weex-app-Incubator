<template>
    <div class="wrap">
        <div class="filters-bar flex flex-row flex-v-center">
            <div class="fliter-item flex flex-row flex-v-center" @click="sortByX">
                <text class="item text32" :class="[activeIndex<=3?'active':'']">{{activeIndex===1?'综合':activeIndex===2?'新品':'销量'}}</text>
                <text class="iconfont triangle arrow" :class="[isSortByXShow?'rotate180':'rotate0']">&#xe60e;</text>
            </div>
            <div class="fliter-item flex flex-row flex-v-center" @click="sortByPrice">
                <text class="item text32" :class="[activeIndex>3&&activeIndex<6?'active':'']">价格</text>
                <div>
                    <text class="iconfont arrow arrow-samll" :class="[activeIndex===4?'active':'']">&#xe615;</text>
                    <text class="iconfont arrow arrow-samll" :class="[activeIndex===5?'active':'']">&#xe60e;</text>
                </div>
            </div>
            <div class="fliter-item flex flex-row flex-v-center" @click="onlyInStock=!onlyInStock">
                <text class="item text32" :class="[onlyInStock?'active':'']">有货</text>
            </div>
            <div class="fliter-item flex flex-row flex-v-center">
                <text @click="doFilter" class="item text32">筛选</text>
            </div>
            <div @click="toggle" class="fliter-item switch flex flex-row flex-v-center">
                <text class="item iconfont text34" v-if="listType==='middle'">&#xe626;</text>
                <text class="item text32 iconfont" v-if="listType==='small'">&#xe627;</text>
            </div>
        </div>
        <div class="popdown-mask" :class="[pullDown?'mask-show':'mask-hide']" v-if="isSortByXShow" @touchmove="touchmove" @click="sortByX">
            <div class="popdown" :class="[pullDown?'pullDown':'hide']">
                <div class="pulldown-inner flex flex-column">
                    <text class="flex-1 item text28 pulldown-item" :class="[activeIndex===1?'active':'']" @click="sortByX(1)">综合排序</text>
                    <text class="flex-1 item text28 pulldown-item" :class="[activeIndex===2?'active':'']" @click="sortByX(2)">新品优先</text>
                    <text class="flex-1 item text28 pulldown-item" :class="[activeIndex===3?'active':'']" @click="sortByX(3)">销量从高到低</text>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isSortByXShow: false,
                activeIndex: 1,
                pullDown: false,
                onlyInStock: false,
                listType: 'middle'
            }
        },
        watch: {
            activeIndex(nv, ov) {
                this.$emit('fliterChange', {
                    index: this.activeIndex,
                    onlyInStock: this.onlyInStock
                })
            },
            onlyInStock(nv, ov) {
                this.$emit('fliterChange', {
                    index: this.activeIndex,
                    onlyInStock: this.onlyInStock
                })
            },
            listType(nv, ov) {
                this.$emit('switch', this.listType)
            }
        },
        methods: {
            doFilter() {
                this.pullDown = this.isSortByXShow = false
                this.$emit('filter')
            },
            sortByX(index) {
                if (typeof index === 'number') {
                    this.pullDown = this.isSortByXShow = false
                    this.activeIndex = index
                } else {
                    this.isSortByXShow = !this.isSortByXShow
                    setTimeout(() => this.pullDown = this.isSortByXShow, 50)
                }
            },
            sortByPrice() {
                this.pullDown = this.isSortByXShow = false
                if (this.activeIndex === 4) {
                    this.activeIndex = 5
                } else {
                    this.activeIndex = 4
                }
            },
            toggle() {
                if (this.listType === 'middle') {
                    this.listType = 'small'
                } else {
                    this.listType = 'middle'
                }
            },
            touchmove(e) {
                e && e.preventDefault && e.preventDefault()
                return false
            }
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

    .filters-bar {
        padding-left: 35px;
        padding-right: 35px;
        height: 103px;
        justify-content: space-between;
        background-color: #f7f7f7;
    }

    .item {
        color: #919191;
    }
    .fliter-item{
        height: 103px;
    }
    .switch{
        width: 46px;
        justify-content: flex-end;
    }

    .pulldown-item {
        padding-left: 35px;
        padding-right: 35px;
        line-height: 102px;
    }

    .triangle {
        transition-property: transform;
        transition-duration: .2s;
    }

    .arrow {
        font-size: 20px;
        color: #919191;
        margin-left: 10px;
    }

    .arrow-samll {
        font-size: 16px;
    }

    .rotate180 {
        transform: rotate(180deg);
    }

    .rotate0 {
        transform: rotate(0deg);
    }

    .active {
        color: #f8584f;
    }

    .popdown-mask {
        position: fixed;
        left: 0;
        right: 0;
        top: 103px;
        bottom: 0;
        z-index: 1;
        background-color: rgba(0, 0, 0, 0);
        transition-property: backgroundColor;
        transition-duration: 200ms;
    }

    .mask-show {
        background-color: rgba(0, 0, 0, 0.1);
    }

    .mask-hide {
        background-color: rgba(0, 0, 0, 0);
    }

    .popdown {
        height: 0px;
        background-color: #fff;
        transition-property: height;
        transition-duration: 200ms;
        overflow: hidden;
    }

    .pullDown {
        height: 306px;
    }

    .hide {
        height: 0px;
    }

    .pulldown-inner {
        height: 306px;
    }
</style>