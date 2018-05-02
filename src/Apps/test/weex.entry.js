import App from './app.vue';
import Vuex from 'vuex'
Vue.use(Vuex)
/* weex initialized here, please do not move this line */
/* eslint-disable no-new */
import _store from './store/index.js'
_store.strict = process.env.NODE_ENV !== 'production'
const store = new Vuex.Store(_store)
const myMixin = {
    methods: {
        $getNavigatorInfo() {
            return new Promise(function (resolve, reject) {
                let data = {}
                try {
                    let initInfo = weex.config.bundleUrl.replace(/.+init=(.+)/, "$1")
                    initInfo = Base64.decode(initInfo)
                    data = JSON.parse(initInfo)
                } catch (e) {
                }
                resolve(data)
            })
        }
    }
}
new Vue(Vue.util.extend({ el: '#root', store, mixins: [myMixin] }, App));

