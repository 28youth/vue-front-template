import ProfileHome from '@/views/profile/ProfileHome.vue'

export default [
  {
    name: 'profile',
    path: '/profile',
    component: ProfileHome,
    meta: {
      title: '首页',
      requiresAuth: false
    }
  }
]
