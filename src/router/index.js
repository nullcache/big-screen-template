import { createRouter, createWebHashHistory } from 'vue-router'
import BaseLayout from '@/components/BaseLayout.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: BaseLayout,
      redirect: '/big-screen',
      children: [
        {
          path: '/big-screen',
          name: 'BigScreen',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('@/views/BigScreen/BigScreen.vue')
        },
        {
          path: '/news-list',
          name: 'NewsList',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('@/views/NewsList/NewsList.vue')
        }
      ]
    }
  ]
})

export default router
