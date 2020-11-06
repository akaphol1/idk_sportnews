require('./bootstrap');
window.Vue = require('vue')
import router from './router'
import ViewUI from 'view-design';

import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);

import common from './common'
Vue.mixin(common)

import moment from 'moment'

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY hh:mm')
  }
})

Vue.component('mainapp', require('./components/mainapp.vue').default)
const app = new Vue({
    el: '#app',
    router
});


