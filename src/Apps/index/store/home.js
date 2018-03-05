import ajax from '../../../../plugins/ajax.js'

const Home = {
    namespaced: true,
    state() {
        return {
            count: 100,
            imageList: [
            ]
        }
    },
    actions: {
        add({ commit }, num) {
            commit({
                type: 'compute',
                num
            })
        },
        async fetchImageList({ commit }) {
            try {
                let ret = await ajax.get('/banggo/dvert/getDvertInfo?siteMark=wap_index&ts=1503969642')
                ret = ret.replace('var adList = ', '')
                ret = JSON.parse(ret)
                if (ret.wap_index_01 && ret.wap_index_01.data && ret.wap_index_01.data.content) {
                    commit({
                        type: 'fillImageList',
                        content: ret.wap_index_01.data.content
                    })
                }
            } catch (e) {
                const modal = weex.requireModule('modal')
                modal.toast({
                    message: '网络错误',
                    duration: 0.
                })
            }

        }
    },
    getters: {

    },
    mutations: {
        compute(state, payload) {
            state.count += parseInt(payload.num)
        },
        fillImageList(state, payload) {
            state.imageList = payload.content.map(item => { return { src: item.ad_content_url } })
        }
    },
    modules: {

    }
}

export default Home