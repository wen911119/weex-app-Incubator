import Vue from 'vue';
import weex from 'weex-vue-render';

weex.init(Vue);


const App = require('./app.vue');
const appName = window.location.pathname.replace('/', '').replace('.html', '')
window.parent.postMessage('app-ready-' + appName, '*')
new Vue(Vue.util.extend({el: '#root'}, App))