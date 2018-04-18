<template>
    <div class="filter-panel-1 flex flex-column flex-1">
        <div class="gap"></div>
        <div class="category flex flex-row flex-v-center">
            <text class="text text30">分类</text>
            <text class="flex-1 select">{{conditions['category']&&conditions['category'].label}}</text>
            <div class="flex flex-row flex-v-center" @click="gotoPanel2(category)">
                <text class="all sub-text text24">全部</text>
                <text class="iconfont text30 text">&#xe607;</text>
            </div>
        </div>
        <div class="gap"></div>
        <scroller class="flex-1 scroller2" :show-scrollbar="false">
            <div class="filter-fragment" v-for="fragment in fragments" :key="fragment.id">
                <div class="flex flex-row flex-v-center fragment-title">
                    <div class="flex-1 flex flex-row flex-v-center">
                        <text class="text30">{{fragment.title}}</text>
                        <text class="text30 select">{{conditions[fragment.id]&&conditions[fragment.id].label}}</text>
                    </div>
                    <div class="action flex flex-row flex-v-center" v-if="fragment.items.length>6" @click="gotoPanel2(fragment)">
                        <text class="all sub-text text24">全部</text>
                        <text class="iconfont text30 text">&#xe607;</text>
                    </div>
                </div>
                <div class="items flex flex-row">
                    <template v-for="(item,index) in fragment.items">
                        <text @click="doFilter({target:item, pid:fragment.id})" v-if="index<6" class="text24 sub-text item" :class="['item-'+(index+1),(conditions[fragment.id]&&conditions[fragment.id].value===item.value)?'active':'']"
                            :key="item.value">{{item.label}}</text>
                    </template>
                </div>
            </div>
        </scroller>
        <div class="bottom-btns flex flex-row">
            <div class="btn-reset flex-1 flex flex-x-center" @click="reset">
                <text>重置</text>
            </div>
            <div class="btn-confirm flex-1 flex flex-x-center" @click="confirm">
                <text style="color:#fff">确认</text>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'

    export default {
        data() {
            return {

            }
        },
        computed: {
            ...mapState({
                fragments: state => state._filter_panel_.fragments,
                category: state => state._filter_panel_.category,
                conditions: state => state._filter_panel_.conditions
            })
        },
        methods: {
            ...mapActions({
                doFilter: '_filter_panel_/doFilter'
            }),
            gotoPanel2(title) {
                this.$emit('more', title)
            },
            reset() {
                this.doFilter()
            },
            confirm() { 
                this.$emit('confirm')
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

    .sub-text {
        color: #919191;
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

    .gap {
        height: 20px;
        background-color: #f7f7f7;
    }

    .category {
        height: 108px;
        background-color: #fff;
        padding-left: 20px;
        padding-right: 20px;
    }

    .select {
        color: #f8584f;
        margin-left: 30px;
        font-size: 24px;
    }

    .active {
        color: #f8584f;
    }

    .all {
        margin-right: 14px;
        font-weight: bold;
    }

    .filter-fragment {
        padding-left: 20px;
        padding-right: 20px;
    }

    .fragment-title {
        height: 102px;
    }

    .items {
        flex-wrap: wrap;
    }

    .item {
        height: 74px;
        width: 191px;
        line-height: 72px;
        text-align: center;
        border-width: 1px;
        border-color: #eaeaea;
        border-radius: 7px;
        margin-right: 14px;
        margin-bottom: 30px;
    }

    .item-3,
    .item-6 {
        margin-right: 0;
    }

    .bottom-btns {
        height: 92px;
    }

    .btn-reset {
        background-color: #f7f7f7;
    }

    .btn-confirm {
        background-color: #f8584f;
    }

    .scroller2{
        
    }
</style>