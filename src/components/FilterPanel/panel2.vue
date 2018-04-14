<template>
    <div class="filter-panel-2">
        <div class="flex flex-row flex-v-center panel2-title">
            <div class="back flex-1 flex flex-v-center flex-row" @click="$emit('back')">
                <text class="iconfont text30 text" style="padding-left:20px">&#xe60c;</text>
            </div>
            <text style="text-align:center">全部{{content.title}}</text>
            <text class="flex-1"></text>
        </div>
        <div class="tree-box" v-if="content.id==='category'">
            <div class="level-1-item" v-for="level1 in content.items">
                <div class="main tree-row flex flex-row flex-v-center" @click="toggle(level1.cateId)">
                    <text class="flex-1">{{level1.cateName}}</text>
                    <text class="iconfont text text30" :class="[folds.indexOf(level1.cateId)>-1?'open':'']" v-if="level1.subs && level1.subs.length>0">&#xe60e;</text>
                </div>
                <div class="level-2-box" v-if="level1.subs && folds.indexOf(level1.cateId)>-1">
                    <div class="level-2-item" v-for="level2 in level1.subs">
                        <div class="tree-row flex flex-row flex-v-center" @click="toggle(level2.cateId)">
                            <text class="flex-1">{{level2.cateName}}</text>
                            <text class="iconfont text text30" :class="[folds.indexOf(level2.cateId)>-1?'open':'']" v-if="level2.subs && level2.subs.length>0">&#xe60e;</text>
                        </div>
                        <div class="level-3-box" v-if="level2.subs && folds.indexOf(level2.cateId)>-1">
                            <div class="tree-row flex flex-row flex-v-center" v-for="level3 in level2.subs">
                                <text class="flex-1">{{level3.cateName}}</text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="items-box" v-else>
            <div class="item flex flex-row flex-v-center" v-for="item in content.items">
                <text class="text30">{{item.label}}</text>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'

    export default {
        props: {
            content: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                folds: []
            }
        },
        methods: {
            toggle(id) {
                let index = this.folds.indexOf(id)
                if (index > -1) {
                    this.folds.splice(index, 1)
                } else {
                    this.folds.push(id)
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

    .panel2-title {
        height: 102px;
        background-color: #f7f7f7;
    }

    .back {
        height: 102px;
    }

    .item {
        height: 102px;
        padding-left: 30px;
        border-bottom-width: 1px;
        border-bottom-color: #eaeaea;
    }

    .tree-row {
        height: 102px;
        padding-right: 30px;
        border-bottom-width: 1px;
        border-bottom-color: #eaeaea;
    }

    .main {
        padding-left: 30px;
        border-bottom-width: 1px;
        border-bottom-color: #eaeaea;
    }

    .level-2-box,
    .level-3-box {
        padding-left: 70px;
    }

    .open {
        transform: rotate(180deg);
    }
</style>