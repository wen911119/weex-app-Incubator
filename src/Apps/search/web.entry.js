import Vue from 'vue';
import weex from 'weex-vue-render';
import Vuex from 'vuex'
import { Base64 } from 'js-base64'
Vue.use(Vuex)
weex.init(Vue);
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

const App = require('./app.vue');
const appName = window.location.pathname.replace('/', '').replace('.html', '')
window.parent.postMessage('app-ready-' + appName, '*')
new Vue(Vue.util.extend({ el: '#root', store, mixins: [myMixin] }, App))
