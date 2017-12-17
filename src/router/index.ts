import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Mumble from '@/views/mumble/Mumble.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/mumble',
      name: 'mumble',
      component: Mumble,
    },
  ],
});
