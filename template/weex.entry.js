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
                const storage = weex.requireModule('storage')
                storage.getItem('_navigator_data_', function (e) {
                    if (e.result === 'success') {
                        try {
                            resolve(JSON.parse(e.data))
                        }catch(err){
                            reject(err)
                        }
                    } else {
                        reject()
                    }
                })
            })
        }
    }
}
new Vue(Vue.util.extend({ el: '#root', store, mixins: [myMixin] }, App));

