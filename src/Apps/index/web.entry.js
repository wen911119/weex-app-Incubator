import Vue from 'vue';
import weex from 'weex-vue-render';

weex.init(Vue);


const App = require('./app.vue');
new Vue(Vue.util.extend({el: '#index'}, App))