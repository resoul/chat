import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/main/Home.vue')
      },
      {
        path: '/app',
        name: 'app',
        component: () => import('../views/main/App.vue')
      }
    ],
    meta: {
      middleware: 'auth',
      sidebar: 'MainSidebar',
      layout: 'Main'
    }
  },
  {
    path: '/chat',
    children: [
      {
        path: '',
        name: 'chat',
        component: () => import('../views/chat/Chat.vue')
      }
    ],
    meta: {
      sidebar: 'ChatSidebar',
      middleware: 'auth',
      layout: 'Chat'
    }
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
