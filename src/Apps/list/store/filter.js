import ajax from '../../../../plugins/ajax.js'

const Filter = {
    namespaced: true,
    state() {
        return {
            category: [],
            others: [],
            select: {
                '品牌': ''
            }
        }
    },
    actions: {
        fetchFilterOptions({ commit }, keyword) {
            let url = `/banggo/search/get-filter-info/a_a_a_a_a_a_a_a_a_a_a_a.shtml?ts=&discountRate=a&word=${keyword}`
            console.log(keyword)
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
        }
    },
    getters: {},
    mutations: {
        fillFilterData(state, payload) {
            state.category = payload.content.cate
            state.others = payload.content.others.filter(function (item) {
                return !!item.name
            })
        },
        applySelect(state, payload) {
            state.select[payload.content.type] = payload.content.value
        }
    }
}

export default Filter