import Vue from 'vue';
import weex from 'weex-vue-render';
import Vuex from 'vuex'
Vue.use(Vuex)
weex.init(Vue);
import _store from './store/index.js'
_store.strict = process.env.NODE_ENV !== 'production'
const store = new Vuex.Store(_store)



const App = require('./app.vue');
const appName = window.location.pathname.replace('/', '').replace('.html', '')
window.parent.postMessage('app-ready-' + appName, '*')
new Vue(Vue.util.extend({ el: '#root', store }, App))
