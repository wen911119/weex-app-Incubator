import ajax from '../../../../plugins/ajax.js'

const Filter = {
    namespaced: true,
    state() {
        return {
            keyword: '',
            category: [],
            others: [],
            select: {

            }
        }
    },
    actions: {
        fetchFilterOptions({ commit }, keyword) {
            let url = `/banggo/search/get-filter-info/a_a_a_a_a_a_a_a_a_a_a_a.shtml?ts=&discountRate=a&word=${keyword}`
            ajax.get(url).then(function (ret) {
                console.log(ret, 89899989)
                if (ret.code === 1 && ret.data && ret.data.cate && ret.data.others) {
                    commit({
                        type: 'fillFilterData',
                        content: ret.data
                    })
                }
            }).catch(function (e) {
                console.log(e)
            })
        },
        doSelect({ commit }, select) {
            console.log(select)
            commit({
                type: 'applySelect',
                content: select
            })
        },
        reset({ commit }) {
            commit({
                type: 'resetSelect'
            })
        },
        updateFilter({ commit, state }) {
            let shit = 'a1_a2_a3_a4_a5_a6_a7_a8_a9_a10_a11_a12'
            for (let key in state.select) {
                if (key === '品牌') {
                    shit = shit.replace('a4', state.select[key].code)
                } else if (key === '价格') {
                    shit = shit.replace('a3', state.select[key].code)
                } else if (key === '颜色') {
                    shit = shit.replace('a5', state.select[key].code)
                } else {
                    shit = shit + `_${state.select[key].typeCode}-${state.select[key].code}`
                }
            }
            shit = shit.replace(/a\d\d?/g, 'a')
            let url = `/banggo/search/get-filter-info/${shit}.shtml?ts=&discountRate=a&word=${state.keyword}`
            ajax.get(url).then(function (ret) {
                if (ret.code === 1 && ret.data && ret.data.cate && ret.data.others) {
                    commit({
                        type: 'fillFilterData',
                        content: ret.data
                    })
                }
            }).catch(function (e) {
                console.log(e)
            })
        }
    },
    getters: {},
    mutations: {
        fillFilterData(state, payload) {
            state.category = payload.content.cate
            state.others = payload.content.others.filter(function (item) {
                return !!item.name
            })
            state.keyword = payload.content.request.word
        },
        applySelect(state, payload) {
            if (state.select[payload.content.type] && state.select[payload.content.type].code === payload.content.value.code) {
                state.select[payload.content.type] = {}
            } else {
                let temp = {}
                temp[payload.content.type] = payload.content.value
                temp[payload.content.type].typeCode = payload.content.typeCode
                state.select = Object.assign({}, state.select, temp)
            }
        },
        resetSelect(state) {
            state.select = {}
        }
    }
}

export default Filter