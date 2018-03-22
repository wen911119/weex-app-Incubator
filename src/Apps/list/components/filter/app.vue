<template>
    <div class="flex flex-column flex-1">
        <div class="top">
            <div class="category flex flex-row flex-v-center">
                <text class="flex-1">分类</text>
                <div class="flex flex-row flex-v-center">
                    <text class="all sub-text text28">全部</text>
                    <text class="iconfont text30 text">&#xe607;</text>
                </div>
            </div>
        </div>
        <scroller class="flex-1" :show-scrollbar="false">
            <fragment @select="onSelect" :info="item" v-for="item in others" :selectInfo="select[item.name] || {}" :key="item.code"></fragment>
        </scroller>

        <div class="bottom-btns flex flex-row">
            <div class="btn-reset flex-1 flex flex-x-center" @click="resetSelect">
                <text>重置</text>
            </div>
            <div class="btn-confirm flex-1 flex flex-x-center">
                <text style="color:#fff">确认</text>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    import fragment from './fragment.vue'

    export default {
        props: {
            keyword: {
                type: String,
                required: true
            }
        },
        data() {
            return {

            }
        },
        computed: {
            ...mapState({
                others: state => state.filter.others,
                category: state => state.filter.category,
                select: state => state.filter.select
            })
        },
        created() {
            this.fetchFilterOptions(this.keyword)
        },
        mounted() {
 
        },
        methods: {
            onSelect(v) {
                this.doSelect(v)
                this.updateFilter()
            },
            resetSelect(){
                this.reset()
                this.updateFilter()
            },
            ...mapActions({
                fetchFilterOptions: 'filter/fetchFilterOptions',
                doSelect: 'filter/doSelect',
                updateFilter:'filter/updateFilter',
                reset:'filter/reset'
            })
        },
        components: {
            fragment
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

    .top {
        padding-top: 20px;
        padding-bottom: 20px;
        background-color: #f7f7f7;
    }

    .category {
        height: 108px;
        background-color: #fff;
        padding-left: 20px;
        padding-right: 20px;
    }

    .all {
        margin-right: 14px;
        font-weight: bold;
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
</style>