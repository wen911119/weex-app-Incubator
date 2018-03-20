import ajax from '../../../../plugins/ajax.js'

const Filter = {
    namespaced: true,
    state() {
        return {
            
        }
    },
    actions: {
        fetchFilterOptions({ commit }, keyword){
            console.log(keyword)
        }
    },
    getters: {},
    mutations: {
        fillFilterData(state, payload){

        }
    }
}

export default Filter