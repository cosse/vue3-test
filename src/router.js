import {createRouter, createWebHistory} from 'vue-router'
// there is also createWebHashHistory and createMemoryHistory

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/about.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('./views/test.vue')
    }
  ],
});
