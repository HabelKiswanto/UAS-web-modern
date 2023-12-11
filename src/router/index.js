import Vue from 'vue';
import VueRouter from 'vue-router';
import MyFirstPage from '@/components/MyFirstPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MyFirstPage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;