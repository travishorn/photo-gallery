import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Photo from './views/Photo.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/photo/:id',
      name: 'photo',
      component: Photo,
    },
  ],
});
