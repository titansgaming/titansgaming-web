// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import PageMeta from './components/PageMeta.vue';

Vue.component('page-meta', PageMeta);

Vue.config.productionTip = false;

/* eslint-disable no-new */
let v = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
