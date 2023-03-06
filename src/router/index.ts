// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    // component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/collected',
        name: 'Collection',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/CollectedBooks.vue'),
      },
      // {
      //   path: '/collected',
      //   name: 'Collected Books',
      //   icon: 'mdi-bookshelf',
      //   component: () => import('@/views/CollectedBooks.vue')
      // },
    ],
  },
  {
    path: '/:catchAll(,*)*',
    component: () => import('@/views/ErrorNotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
