import About from '@/views/About.vue'
import IndexPage from '@/views/Home.vue'

export default [
  {
    name: 'test',
    path: '/test',
    component: IndexPage,
    meta: {
      title: '首页',
      requiresAuth: false
    }
  },
  {
    name: 'about',
    path: '/about',
    component: About,
    meta: {
      title: '测试页面',
      requiresAuth: false
    }
  }
]
