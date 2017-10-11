
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import localforage from 'localforage'
require('./bootstrap');
import router from './router';
import store from './vuex';

localforage.config({
    driver:localforage.LOCALSTORAGE,
    storeName:'webapp'

})
window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('app', require('./components/App.vue'));
Vue.component('navigation', require('./components/Navigation.vue'));

const app = new Vue({
    el: '#app',
    router: router,
    store:store,
});
