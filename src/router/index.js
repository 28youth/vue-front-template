import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  base: process.env.BASE_URL,
  strict: process.env.NODE_ENV !== 'production',
  mode: process.env.VUE_APP_ROUTER_MODE || 'history'
})

/**
 * 路由守卫 登录检测 islogin
 *
 * 需要登录的页面路由需要添加
 * 登录后不可访问的路由需要添加
 * meta.forGuest = true
 *
 */
router.beforeEach((to, from, next) => {
  const logged = !!window.$lstore.hasData('H5_ACCESS_TOKEN')
  const forGuest = to.matched.some(record => record.meta.forGuest)
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (logged) {
    forGuest ? next({ path: '/about' }) : next()
  } else {
    forGuest ? next() : requiresAuth ? next({ path: '/signin', query: { redirect: to.fullPath } }) : next()
  }
})

export default router
