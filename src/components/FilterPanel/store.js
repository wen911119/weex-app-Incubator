import ajax from '../../../plugins/ajax.js'
export default {
    namespaced: true,
    state: function () {
        return {
            interactiveQueue: [],
            pool: {},
            result: {},
            keyword: ''
        }
    },
    actions: {
        interactiveChange({ commit, state }, interactive) {
            if (interactive === null) {
                // reset 操作
                commit({
                    type: 'interactiveQueue_reset'
                })
            } else {
                commit({
                    type: 'interactiveQueue_add',
                    content: interactive
                })
            }
            commit({
                type: 'result_update'
            })
            // 异步
            asyncFetchPoolData(commit, state)
        },
        init({ commit, state }, keyword) {
            commit({
                type: 'keyword_backup',
                content: keyword
            })
            asyncFetchPoolData(commit, state)
        }
    },
    mutations: {
        keyword_backup(state, payload) {
            state.keyword = payload.content
        },
        interactiveQueue_add(state, payload) {
            state.interactiveQueue.push(payload.content)
        },
        interactiveQueue_reset(state) {
            state.interactiveQueue = []
        },
        pool_update(state, payload) {
            state.pool = payload.content
        },
        result_update(state) {
            state.result = f1(state.interactiveQueue, state.pool)
        }
    },
    modules: {

    }
}

function computeUrl(result, keyword) {
    let shit = 'a1_a2_a3_a4_a5_a6_a7_a8_a9_a10_a11_a12'
    for (let key in result) {
        if (key === '品牌') {
            shit = shit.replace('a4', resultt[key].code)
        } else if (key === '价格') {
            shit = shit.replace('a3', result[key].code)
        } else if (key === '颜色') {
            shit = shit.replace('a5', result[key].code)
        } else {
            shit = shit + `_${result[key].typeCode}-${result[key].code}`
        }
    }
    shit = shit.replace(/a\d\d?/g, 'a')
    const url = `/banggo/search/get-filter-info/${shit}.shtml?discountRate=a&word=${keyword}`
    return url
}

function f2(result) {
    return {}
}

function f1(interactiveQueue, pool) {
    return {}
}

function asyncFetchPoolData(commit, state) {
    const url = computeUrl(state.result, state.keyword)
    ajax.get(url).then(function (ret) {
        if (ret.code === 1 && ret.data && ret.data.cate && ret.data.others) {
            commit({
                type: 'pool_update',
                content: ret.data
            })
        }
    })
}