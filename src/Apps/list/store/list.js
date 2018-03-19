import ajax from '../../../../plugins/ajax.js'

const List = {
    namespaced: true,
    state() {
        return {
            goods: [],
            meta: {
                totalPage: 0,
                pageSize: 10,
                pageNum: 0,
                currentPage: 0
            }
        }
    },
    actions: {
        fetchGoodsData({ commit }, conditions) {
            let shit = 'a_a_a_a_a_a_a_a_a_a_a_a.shtml'
            let url = `/banggo/search/get-search-goods/${shit}?discountRate=a&word=${conditions.keyword}&currentPage=${conditions.currentPage}`
            ajax.get(url).then(function (ret) {
                if (ret.code === 1 && ret.data) {
                    if (ret.data.list) {
                        commit({
                            type: 'fillGoodsData',
                            content: ret.data.list,
                            reset: conditions.currentPage === 1
                        })
                    }
                    if (ret.data.fpage) {
                        commit({
                            type: 'fillMetaData',
                            content: ret.data.fpage
                        })
                    }
                }

            }).catch(function (e) {
                console.log(e)
                var modal = weex.requireModule('modal')
                modal.toast({
                    message: JSON.stringify(e),
                    duration: 3
                })
            })
        }
    },
    getters: {},
    mutations: {
        fillGoodsData(state, payload) {
            if (payload.reset) {
                state.goods = payload.content
            } else {
                state.goods = state.goods.concat(payload.content)
            }
        },
        fillMetaData(state, payload) {
            state.meta.pageNum = payload.content.pageNum
            state.meta.pageSize = payload.content.pagesize
            state.meta.currentPage = parseInt(payload.content.currentPage)
            state.meta.totalPage = payload.content.total
        }
    }
}

export default List