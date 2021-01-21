import CashHome from '@/views/cash/CashHome.vue'

export default [
  {
    name: 'home',
    path: '/home',
    component: CashHome,
    meta: {
      title: '首页',
      requiresAuth: false
    }
  },
]
