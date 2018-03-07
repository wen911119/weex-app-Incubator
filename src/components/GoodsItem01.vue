<template>
    <div @click="select" class="goods-item-01" v-if="goods">
        <image :src="goods.imgUrl_320_320.replace('pic.banggo', 'pic.ruiyun2015').replace('w_286', 'w_300').replace('h_392', 'h_410').replace('m_lfit', 'm_fill')" class="goods-img"></image>
        <text class="goods-name">{{ goods.product_name}}</text>
        <text class="goods-price">¥{{ goods.sales_price}}</text>
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
        /* border-style: solid;
        border-color: #333;
        border-width: 1px; */
        margin-bottom: 10px;
    }
    .goods-img{
        width: 347px;
        height: 473.44px;
        margin-bottom: 9px;
    }
    .goods-name{
        height: 75px;
        font-size: 28px;
        color: #919191;
    }
    .goods-price{
        color: #000;
        font-size: 34px;
        margin-top: 6px;
    }
</style>