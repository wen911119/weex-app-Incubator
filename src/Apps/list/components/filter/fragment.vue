<template>
    <div class="filter-fragment">
        <div class="flex flex-row flex-v-center title">
            <text class="flex-1 text36" :class="[selectInfo?'select':'']">{{info.name}}</text>
            <div class="action flex flex-row flex-v-center">
                <text class="all sub-text text28">全部</text>
                <text class="iconfont text30 text">&#xe607;</text>
            </div>
        </div>
        <div class="content flex flex-row">
            <text class="text28 text item" v-for="(item,index) in content" :class="['item-'+(index+1),selectInfo===item.code?'select':'']"
                :key="item.code" @click="emit(item.code)">{{item.name}}</text>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            info: {
                type: Object,
                required: true
            },
            selectInfo: {
                type: String,
                required: true
            }
        },
        data() {
            return {

            }
        },
        computed: {
            content: function () {
                let ret = []
                if (this.info.value && this.info.value.length && this.info.value.length > 6) {
                    ret = this.info.value.filter(item => item && item.code).slice(0, 6)
                } else {
                    ret = this.info.value.filter(item => item && item.code)
                }
                return ret
            }
        },
        methods: {
            emit(v) {
                if ((typeof this.info.code) === 'string') {
                    this.$emit('select', { type: this.info.name, value: v })
                } else {
                    this.$emit('select', { type: this.info.name, value: `${this.info.code}-${v}` })
                }
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

    .filter-fragment {
        padding-left: 20px;
        padding-right: 20px;
    }

    .all {
        margin-right: 14px;
    }

    .title {
        height: 102px;
    }

    .select {
        color: #f8584f;
    }

    .content {
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
</style>