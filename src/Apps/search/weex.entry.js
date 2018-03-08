import App from './app.vue';
import Vuex from 'vuex'
Vue.use(Vuex)
/* weex initialized here, please do not move this line */
/* eslint-disable no-new */
import _store from './store/index.js'
_store.strict = process.env.NODE_ENV !== 'production'
const store = new Vuex.Store(_store)
new Vue(Vue.util.extend({el: '#root', store}, App));

