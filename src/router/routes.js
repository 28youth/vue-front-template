import NotFound from '../views/notFound'
import baseRoutes from './base.js'
import cashRoutes from './cash.js'
import profileRoutes from './profile.js'

const routes = [
  /* 入口重定向 */
  { path: '/', redirect: '/home' },

  ...baseRoutes,
  ...cashRoutes,
  ...profileRoutes,

  { path: '*', component: NotFound } /* 404 页面 */
]

export default routes
