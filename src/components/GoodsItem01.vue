<template>
    <div @click="select" class="goods-item-01">
        <text>{{id}}</text>
        <text>{{ goods? goods.product_name:'waiting...'}}</text>
    </div>
</template>

<script>
    import router from '../../plugins/router.js'
    import { mapState, mapActions } from 'vuex'
    import ajax from '../../plugins/ajax.js'
    export default {
        props: {
            id: {
                type: String,
                required: true
            }
        },
        computed: {
            ...mapState({
                goods: function (state) {
                    return state._goods_.goods[this.id]
                }
            })
        },
        beforeCreate() {
            // 避免重复注册
            if (!this.$store.state._goods_) {
                this.$store.registerModule('_goods_', {
                    namespaced: true,
                    state: {
                        goods: {},
                        queue: []
                    },
                    actions: {
                        fetchGoodsDetail({ commit, state }, gid) {
                            if (state.queue.length === 0) {
                                // 收集100毫秒内的请求统一处理
                                setTimeout(() => {
                                    ajax.get('/banggo/plate/goods-list.shtml?productIds=' + state.queue.join(',')).then(function (ret) {
                                        if (ret.code === 0 && ret.data && ret.data.length > 0) {
                                            commit({
                                                type: 'fill',
                                                data: ret.data
                                            })
                                        }
                                    })
                                }, 100)
                            }
                            commit({
                                type: 'wait',
                                id: gid
                            })
                        }
                    },
                    mutations: {
                        wait(state, payload) {
                            state.queue.push(payload.id)
                        },
                        fill(state, payload) {
                            let temp = {}
                            payload.data.forEach(goods => {
                                temp[goods.product_id] = goods
                            })
                            state.goods = temp
                        }
                    }
                })
            }
        },
        created() {
            this.fetchGoodsDetail(this.id)
        },
        methods: {
            select() {
                this.$emit('click', this.id)
            },
            ...mapActions({
                fetchGoodsDetail: '_goods_/fetchGoodsDetail'
            })
        }
    }
</script>

<style scoped>
    .goods-item-01 {
        height: 618px;
        width: 347px;
        border-style: solid;
        border-color: #333;
        border-width: 1px;
        margin-bottom: 10px;
    }
</style>