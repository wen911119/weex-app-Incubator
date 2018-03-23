import ajax from '../../../../plugins/ajax.js'
function pure(conditions) {
    let ret = 'a1_a2_a3_a4_a5_a6_a7_a8_a9_a10_a11_a12'
    switch (conditions.index) {
        case 2:
            ret = ret.replace('a8', '3').replace('a9', '-1')
            break
        case 3:
            ret = ret.replace('a8', '2').replace('a9', '-1')
            break
        case 4:
            ret = ret.replace('a8', '1').replace('a9', '1')
            break
        case 5:
            ret = ret.replace('a8', '1').replace('a9', '-1')
            break
    }
    if (conditions.filterData) {
        for (let key in conditions.filterData) {
            if (key === '品牌') {
                ret = ret.replace('a4', conditions.filterData[key].code)
            } else if (key === '价格') {
                ret = ret.replace('a3', conditions.filterData[key].code)
            } else if (key === '颜色') {
                ret = ret.replace('a5', conditions.filterData[key].code)
            } else {
                ret = ret + `_${conditions.filterData[key].typeCode}-${conditions.filterData[key].code}`
            }
        }
    }
    ret = ret.replace(/a\d\d?/g, 'a')
    return ret
}
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
            // let conditions = {
            //     keyword:'',
            //     index:'',
            //     currentPage:'',
            //     onlyInStock:'',
            //     filterData:{
            //         '品牌':{
            //             code:'',
            //             typeCode:''
            //         }
            //     }
            // }
            let shit = pure(conditions)
            let url = `/banggo/search/get-search-goods/${shit}.shtml?discountRate=a&word=${conditions.keyword}&currentPage=${conditions.currentPage}&avn=${conditions.onlyInStock ? 1 : 0}`
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