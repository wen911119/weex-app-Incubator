<template>
    <div class="filter-fragment">
        <div class="flex flex-row flex-v-center title">
            <div class="flex-1 flex flex-row flex-v-center">
                <text class="text36">{{info.name}}</text>
                <text style="margin-left:30px" class="text30" :class="[selectInfo?'select':'']" v-if="selectInfo.name">{{selectInfo.name}}</text>
            </div>
            <div class="action flex flex-row flex-v-center" v-if="info.value.length>6">
                <text class="all sub-text text28" @click="showAll">全部</text>
                <text class="iconfont text30 text">&#xe607;</text>
            </div>
        </div>
        <div class="content flex flex-row">
            <text class="text28 text item" v-for="(item,index) in content" :class="['item-'+(index+1),selectInfo.code===item.code?'select':'']"
                :key="item.code" @click="emit(item)">{{item.name}}</text>
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
                type: Object,
                default: function () {
                    return {}
                }
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
                this.$emit('select', { type: this.info.name, value: v, typeCode: this.info.code })
            },
            showAll() {
                console.log(this.info)
                this.$emit('showAll', { title: this.info.name, content: this.info.value, typeCode: this.info.code })
            }
        }
    }
</script>

<style scoped>
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