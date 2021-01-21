import Vue from 'vue'
// import App from './App.vue'
import router from './router'
import store from './store'
import lstore from '@/plugins/lstore/index.js'
import './util/rem'
import './style/app.less'
import './icons/iconfont.js'
import './registerServiceWorker'

import App from './app.js'
import bus from './bus'
import * as filters from './filters.js'
import components from './components.js'

components.forEach(component => {
  Vue.component(component.name, component)
})

Vue.config.productionTip = false

Vue.prototype.$bus = bus

Vue.use(lstore)

for (const k in filters) {
  Vue.filter(k, filters[k])
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
