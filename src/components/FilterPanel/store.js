import ajax from '../../../plugins/ajax.js'
export default {
    namespaced: true,
    state: function () {
        return {
            interactiveQueue: [],
            pool: {},
            result: {},
            keyword: '',
            fetching: false,
            conditions: {},
            panel2: {
                show: false,
                name: ''
            },
            folds: [],
            category: {
                title: '分类',
                id: 'category',
                items: [{
                    cateName: '男装',
                    cateId: 3,
                    subs: [{
                        cateName: '全部'
                    }, {
                        cateName: 'T恤',
                        cateId: 15,
                        subs: [{
                            cateName: '全部'
                        }, {
                            cateName: 'POLO',
                            cateId: 110,
                            subs: []
                        }]
                    }]
                },
                {
                    cateName: '女装'
                }]
            },
            fragments: [{
                title: '品牌',
                id: 'brand',
                items: [{
                    label: '全部品牌',
                    value: 'all'
                }]
            }]
        }
    },
    actions: {
        doFilter({ commit, state }, intention) {
            console.log(intention)
            if (!state.fetching) {
                commit({
                    type: 'conditions_update',
                    content: intention
                })
                asyncFetchPoolData(commit, state)
            }
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
        conditions_update(state, payload) {
            state.fetching = true
            if (payload.content) {
                state.conditions[payload.content.pid] = payload.content.target
            } else {
                // reset
                state.conditions = {}
            }
        },
        pool_update(state, payload) {
            console.log(payload.content, 6666666)
            //state.pool = payload.content
            state.category.items = payload.content.cate
            state.fragments = payload.content.others.filter(o => o.value.length > 0).map(item => {
                return {
                    title: item.name,
                    id: item.code,
                    items: item.value.filter(i => i !== null).map(j => {
                        return {
                            label: j.name,
                            value: j.code
                        }
                    })
                }
            })
            state.fetching = false
        },
        result_update(state) {
            state.result = f1(state.interactiveQueue, state.pool)
        }
    },
    modules: {

    }
}

function computeUrl(conditions, keyword) {
    let shit = 'a1_a2_a3_a4_a5_a6_a7_a8_a9_a10_a11_a12'
    for (let key in conditions) {
        if (key === 'brand') {
            shit = shit.replace('a4', conditions[key].value)
        } else if (key === 'price') {
            shit = shit.replace('a3', conditions[key].value)
        } else if (key === 'color') {
            shit = shit.replace('a5', conditions[key].value)
        } else if (key === 'category') {
            shit = shit.replace('a2', conditions[key].value)
        } else {
            shit = shit + `_${key}-${conditions[key].value}`
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
    const url = computeUrl(state.conditions, state.keyword)
    ajax.get(url).then(function (ret) {
        if (ret.code === 1 && ret.data && ret.data.cate && ret.data.others) {
            commit({
                type: 'pool_update',
                content: ret.data
            })
        }
    })
}