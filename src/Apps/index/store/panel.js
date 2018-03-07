import ajax from '../../../../plugins/ajax.js'

const Panel = {
    namespaced: true,
    state() {
        return {
            panels: []
        }
    },
    actions: {
        fetchPanels({ commit }) {
            ajax.get('/banggo/').then(function (ret) {
                let retObj = []
                ret.match(/data-plate-id="(\d+)"\s+data-bgtj="plate\|.+"/g).forEach(element => {
                    element = element.replace(/data-plate-id="(\d+)"\s+data-bgtj="plate\|(.+)"/g, "$1,$2")
                    element = element.split(',')
                    retObj.push({
                        id: element[0],
                        template: element[1],
                        content: []
                    })
                })
                commit({
                    type: 'fillPanelList',
                    content: retObj
                })
            }).catch(function (e) {
                const modal = weex.requireModule('modal')
                modal.toast({
                    message: '网络错误' + e,
                    duration: 0.
                })
            })
        },
        fetchPanelContent({ commit }, last) {
            ajax.get('/banggo/plate/GetPlateContent?_ksTS=1520301287044_78&mark=wap_index&plate_id=' + last.id).then(function (ret) {
                ret = ret.replace(/\((.+)\)/, '$1')
                ret = JSON.parse(ret)
                if (ret.data && ret.data[last.template] && ret.data[last.template].plateContent) {
                    commit({
                        type: 'fillPanelContent',
                        content: ret.data[last.template].plateContent,
                        index: last.index,
                        template: last.template
                    })
                }
            }).catch(function (e) {
                const modal = weex.requireModule('modal')
                modal.toast({
                    message: '网络错误' + e,
                    duration: 0.
                })
            })
        }
    },
    getters: {

    },
    mutations: {
        fillPanelList(state, payload) {
            state.panels = payload.content
        },
        fillPanelContent(state, payload) {
            if(payload.template === 'wap_product'){
                // 热销商品特殊处理
                console.log(payload.content, 22222)
                state.panels[payload.index].content = payload.content[0].content.split(',')
            }else {
                state.panels[payload.index].content = payload.content.map(item => { return { src: item.image_url.replace('img.banggo', 'pic.ruiyun2015'), target: item.url_website } })
            }
        }
    },
    modules: {

    }
}

export default Panel