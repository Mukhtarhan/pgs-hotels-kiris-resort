import { createRouter, createWebHistory } from 'vue-router';
import Index from '../src/views/Index.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { el: to.hash, top: 100, behavior: 'smooth' };
  },
});

export default router;
