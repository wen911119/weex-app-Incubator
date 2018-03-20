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
            <fragment :info="info"></fragment>
        </scroller>

        <div class="bottom-btns flex flex-row">
            <div class="btn-reset flex-1 flex flex-x-center">
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
                info: {
                    value: [{
                        name: '0-69',
                        code: '0-69'
                    }, {
                        name: '70-139',
                        code: '70-139'
                    }, {
                        name: '140-199',
                        code: '140-199'
                    }, {
                        name: '200-799',
                        code: '200-799'
                    }, {
                        name: '2300-7399',
                        code: '2030-7139'
                    }, {
                        name: '212-72199',
                        code: '2030-7939'
                    }, {
                        name: '12-7399',
                        code: '2030-7939'
                    }, {
                        name: '2300-22',
                        code: '2030-7939'
                    }]
                }
            }
        },
        computed: {
            ...mapState({

            })
        },
        created(){
            this.fetchFilterOptions(this.keyword)
        },
        mounted() {

        },
        methods: {
            ...mapActions({
                fetchFilterOptions:'filter/fetchFilterOptions'
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