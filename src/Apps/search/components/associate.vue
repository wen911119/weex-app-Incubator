<template>
    <div class="associate-box">
        <div class="item flex flex-row flex-v-center" v-for="item in associated">
            <text class="item-text flex-1">{{item.word}}</text>
            <text class="item-text">约{{item.count}}条结果</text>
        </div>
    </div>
</template>

<script>
    import ajax from '../../../../plugins/ajax.js'

    export default {
        props: {
            seed: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                associated: [{
                    word: '时尚男裤子',
                    count: 1494
                }, {
                    word: '时尚包',
                    count: 133
                }]
            }
        },
        watch: {
            seed: function (nv, ov) {
                if (nv) {
                    this.associate(nv)
                } else {
                    this.associated = []
                }
            }
        },
        created() {
            if (this.seed) {
                this.associate(this.seed)
            }
        },
        methods: {
            associate(seed) {
                let self = this
                ajax.get('/banggo/search/GetAssociate.shtml?newVal=' + seed).then(function (ret) {
                    ret = ret.replace(/\((.+)\)/, "$1")
                    ret = JSON.parse(ret)
                    if (ret.code === 1 && ret.data && ret.data.key && ret.data.key.length > 0) {
                        self.associated = ret.data.key
                    }
                })
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

    .flex-row {
        flex-direction: row;
    }

    .item {
        height: 104px;
        border-bottom-width: 1px;
        border-bottom-color: #eaeaea;
        padding-left: 35px;
        padding-right: 35px;
    }

    .item-text {
        color: #919191;
        font-size: 34px;
    }
</style>