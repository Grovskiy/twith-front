import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import { redirectAuthUser } from '@/router/middleware/redirectAuthUser';

const Auth = () => import(/* webpackChunkName: "auth" */ '../views/Auth.vue');
const PostPage = () =>
  import(/* webpackChunkName: "posts" */ '../views/PostPage.vue');

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: redirectAuthUser,
  },
  {
    path: '/posts',
    name: 'PostPage',
    component: PostPage,
    beforeEnter: redirectAuthUser,
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
