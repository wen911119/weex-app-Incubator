import Vue from 'vue';
import weex from 'weex-vue-render';
import Vuex from 'vuex'

Vue.use(Vuex)
weex.init(Vue);
import _store from './store/index.js'
_store.strict = process.env.NODE_ENV !== 'production'
const store = new Vuex.Store(_store)

const myMixin = {
    methods: {
        $getNavigatorInfo() {
            return new Promise(function (resolve, reject) {
                const storage = weex.requireModule('storage')
                storage.getItem('_navigator_data_', function (e) {
                    if (e.result === 'success') {
                        resolve(e.data)
                    } else {
                        reject()
                    }
                })
            })
        }
    }
}

const App = require('./app.vue');
const appName = window.location.pathname.replace('/', '').replace('.html', '')
window.parent.postMessage('app-ready-' + appName, '*')
new Vue(Vue.util.extend({ el: '#root', store, mixins: [myMixin] }, App))
