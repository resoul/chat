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
      },
      {
        path: '/onboarding',
        name: 'onboarding',
        component: () => import('../views/main/Onboarding.vue')
      },
      {
        path: '/elements',
        redirect: '/elements/avatar',
        children: [
          {
            path: 'alert',
            name: 'alert',
            component: () => import('../views/main/elements/Alert.vue')
          },
          {
            path: 'avatar',
            name: 'avatar',
            component: () => import('../views/main/elements/Avatar.vue')
          },
          {
            path: 'badge',
            name: 'badge',
            component: () => import('../views/main/elements/Badge.vue')
          },
          {
            path: 'breadcrumb',
            name: 'breadcrumb',
            component: () => import('../views/main/elements/Breadcrumb.vue')
          },
          {
            path: 'button',
            name: 'button',
            component: () => import('../views/main/elements/Breadcrumb.vue')
          },
          {
            path: 'button-group',
            name: 'button-group',
            component: () => import('../views/main/elements/ButtonGroup.vue')
          },
          {
            path: 'spinner',
            name: 'spinner',
            component: () => import('../views/main/elements/Spinner.vue')
          },
          {
            path: 'tag',
            name: 'tag',
            component: () => import('../views/main/elements/Tag.vue')
          },
          {
            path: 'tooltip',
            name: 'tooltip',
            component: () => import('../views/main/elements/Tooltip.vue')
          },
          {
            path: 'card',
            name: 'card',
            component: () => import('../views/main/elements/Card.vue')
          },
          {
            path: 'divider',
            name: 'divider',
            component: () => import('../views/main/elements/Divider.vue')
          },
          {
            path: 'mask',
            name: 'mask',
            component: () => import('../views/main/elements/Mask.vue')
          },
          {
            path: 'progress',
            name: 'progress',
            component: () => import('../views/main/elements/Progress.vue')
          },
          {
            path: 'skeleton',
            name: 'skeleton',
            component: () => import('../views/main/elements/Skeleton.vue')
          }
        ]
      },
      {
        path: '/forms',
        redirect: '/forms/input-text',
        children: [
          {
            path: 'input-text',
            name: 'input-text',
            component: () => import('../views/main/forms/InputText.vue')
          },
          {
            path: 'input-group',
            name: 'input-group',
            component: () => import('../views/main/forms/InputGroup.vue')
          },
          {
            path: 'layout',
            name: 'layout',
            component: () => import('../views/main/forms/Layout.vue')
          },
          {
            path: 'layout-2',
            name: 'layout-2',
            component: () => import('../views/main/forms/Layout2.vue')
          },
          {
            path: 'layout-3',
            name: 'layout-3',
            component: () => import('../views/main/forms/Layout3.vue')
          },
          {
            path: 'layout-4',
            name: 'layout-4',
            component: () => import('../views/main/forms/Layout4.vue')
          },
          {
            path: 'layout-5',
            name: 'layout-5',
            component: () => import('../views/main/forms/Layout5.vue')
          },
          {
            path: 'input-mask',
            name: 'input-mask',
            component: () => import('../views/main/forms/InputMask.vue')
          },
          {
            path: 'checkbox',
            name: 'checkbox',
            component: () => import('../views/main/forms/Checkbox.vue')
          },
          {
            path: 'date-time-picker',
            name: 'date-time-picker',
            component: () => import('../views/main/forms/DateTimePicker.vue')
          },
          {
            path: 'date-picker',
            name: 'date-picker',
            component: () => import('../views/main/forms/DatePicker.vue')
          },
          {
            path: 'radio',
            name: 'radio',
            component: () => import('../views/main/forms/Radio.vue')
          },
          {
            path: 'range',
            name: 'range',
            component: () => import('../views/main/forms/Range.vue')
          },
          {
            path: 'select',
            name: 'select',
            component: () => import('../views/main/forms/Select.vue')
          },
          {
            path: 'switch',
            name: 'switch',
            component: () => import('../views/main/forms/Switch.vue')
          },
          {
            path: 'text-area',
            name: 'text-area',
            component: () => import('../views/main/forms/TextArea.vue')
          },
          {
            path: 'text-editor',
            name: 'text-editor',
            component: () => import('../views/main/forms/TextEditor.vue')
          },
          {
            path: 'time-picker',
            name: 'time-picker',
            component: () => import('../views/main/forms/TimePicker.vue')
          },
          {
            path: 'tom-select',
            name: 'tom-select',
            component: () => import('../views/main/forms/TomSelect.vue')
          },
          {
            path: 'upload',
            name: 'upload',
            component: () => import('../views/main/forms/Upload.vue')
          }
        ]
      },
      {
        path: '/components',
        redirect: '/components/accordion',
        children: [
          {
            path: 'accordion',
            name: 'accordion',
            component: () => import('../views/main/components/Accordion.vue')
          },
          {
            path: 'apex-chart',
            name: 'apex-chart',
            component: () => import('../views/main/components/ApexCharts.vue')
          },
          {
            path: 'carousel',
            name: 'carousel',
            component: () => import('../views/main/components/Carousel.vue')
          },
          {
            path: 'clipboard',
            name: 'clipboard',
            component: () => import('../views/main/components/Clipboard.vue')
          },
          {
            path: 'notification',
            name: 'notification',
            component: () => import('../views/main/components/Notification.vue')
          },
          {
            path: 'table',
            name: 'table',
            component: () => import('../views/main/components/Table.vue')
          },
          {
            path: 'table-grid',
            name: 'table-grid',
            component: () => import('../views/main/components/TableGrid.vue')
          },
          {
            path: 'table-advanced',
            name: 'table-advanced',
            component: () => import('../views/main/components/TableAdvanced.vue')
          }
        ]
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
