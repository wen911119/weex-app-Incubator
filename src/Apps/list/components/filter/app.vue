<template>
    <div class="flex flex-column flex-1">
        <div class="top" :class="[moreInfo.title?'more-info-title':'']">
            <div class="flex flex-row flex-v-center" v-if="moreInfo.title">
                <text class="iconfont text30 text flex-1" style="padding-left:20px" @click="closeMoreInfo">&#xe60c;</text>
                <text style="text-align:center">全部{{moreInfo.title}}</text>
                <text class="flex-1"></text>
            </div>
            <div class="category flex flex-row flex-v-center" v-else>
                <text class="flex-1">分类</text>
                <div class="flex flex-row flex-v-center" @click="showAll({title:'分类',content:category})">
                    <text class="all sub-text text28">全部</text>
                    <text class="iconfont text30 text">&#xe607;</text>
                </div>
            </div>
        </div>
        <scroller class="flex-1" :show-scrollbar="false" v-if="moreInfo.title">
            <div class="category-more" v-if="moreInfo.title==='分类'">
                <text>分类</text>
            </div>
            <div class="more" v-else>
                <text @click="onSelect({type:moreInfo.title,value:moreInfo.content[index], typeCode:moreInfo.typeCode})" class="more-item text text34"
                    v-for="(item,index) in moreInfo.content" :class="[(select[moreInfo.title]&&select[moreInfo.title].code===item.code)?'select':'']">{{item && item.name}}</text>
            </div>
        </scroller>
        <scroller class="flex-1" :show-scrollbar="false" v-else>
            <fragment @showAll="showAll" @select="onSelect" :info="item" v-for="item in others" :selectInfo="select[item.name] || {}"
                :key="item.code"></fragment>
        </scroller>

        <div class="bottom-btns flex flex-row">
            <div class="btn-reset flex-1 flex flex-x-center" @click="resetSelect">
                <text>重置</text>
            </div>
            <div class="btn-confirm flex-1 flex flex-x-center" @click="apply">
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
                moreInfo: {
                    title: '',
                    content: [],
                    typeCode: ''
                }
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
                this.moreInfo.title = ''
            },
            resetSelect() {
                this.reset()
                this.updateFilter()
                this.$emit('confirm', {})
            },
            apply() {
                this.$emit('confirm', this.select)
            },
            showAll({ title, content, typeCode }) {
                this.moreInfo.title = title
                this.moreInfo.typeCode = typeCode
                this.moreInfo.content = content.filter(item => (item && item.name))
            },
            closeMoreInfo() {
                this.moreInfo.title = ''
            },
            ...mapActions({
                fetchFilterOptions: 'filter/fetchFilterOptions',
                doSelect: 'filter/doSelect',
                updateFilter: 'filter/updateFilter',
                reset: 'filter/reset'
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

    .more-info-title {
        border-bottom-width: 1px;
        border-bottom-color: #eaeaea;
    }

    .more-item {
        height: 103px;
        line-height: 102px;
        padding-left: 35px;
        border-bottom-width: 1px;
        border-bottom-color: #eaeaea;
    }

    .select {
        color: #f8584f;
    }
</style>