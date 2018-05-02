// vuex文档地址 https://vuex.vuejs.org/zh-cn/getting-started.html
export default {
    state: {
        count: 100
    },
    actions: {
        add({ commit }, num) {
            commit({
                type: 'compute',
                num
            })
        }
    },
    getters: {},
    mutations: {
        compute(state, payload) {
            state.count += parseInt(payload.num)
        }
    },
    modules: {


    }
}