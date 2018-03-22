import ajax from '../../../../plugins/ajax.js'

const Home = {
    namespaced: true,
    state() {
        return {
            count: 100,
            imageList: [
            ],
            entryList: [],
            search:{
                placeholder:'',
                hotwords:[]
            }
        }
    },
    actions: {
        add({ commit }, num) {
            commit({
                type: 'compute',
                num
            })
        },
        fetchImageList({ commit }) {
            ajax.get('/banggo/dvert/getDvertInfo?siteMark=wap_index&ts=1503969642').then(function (ret) {
                ret = ret.replace('var adList = ', '')
                ret = JSON.parse(ret)
                if (ret.wap_index_01 && ret.wap_index_01.data && ret.wap_index_01.data.content) {
                    commit({
                        type: 'fillImageList',
                        content: ret.wap_index_01.data.content
                    })
                    commit({
                        type: 'fillSearch',
                        content: ret.WAP_search.data.content[0]
                    })
                }
            }).catch(function (e) {
                const modal = weex.requireModule('modal')
                modal.toast({
                    message: '网络错误:' + JSON.stringify(e),
                    
                    duration: 9.8
                })
            })
        },
        fetchEntryList({ commit }) {
            ajax.get('/banggo/plate/GetPlateContent?_ksTS=1520301287044_78&mark=wap_index&plate_id=375').then(function (ret) {
                ret = ret.replace(/\((.+)\)/, '$1')
                ret = JSON.parse(ret)
                if (ret.data && ret.data.wap_index_banner1 && ret.data.wap_index_banner1.plateContent) {
                    commit({
                        type: 'fillEntryList',
                        content: ret.data.wap_index_banner1.plateContent
                    })
                }
            }).catch(function (e) {
                const modal = weex.requireModule('modal')
                modal.toast({
                    message: '网络错误' + e,
                    duration: 0.8
                })
            })
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
        },
        fillEntryList(state, payload) {
            state.entryList = payload.content.map(item => { return { src: item.image_url.replace('img.banggo', 'pic.ruiyun2015'), target: item.url_website } })
        },
        fillSearch(state, payload){
            state.search.placeholder = payload.content.ad_content_title
            state.search.hotwords = payload.content.ad_content_info.match(/<span>.+?<\/span>/g).map(item=>item.replace(/<span>(.+)<\/span>/,"$1"))
        }
    },
    modules: {

    }
}

export default Home