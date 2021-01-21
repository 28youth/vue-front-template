import Vue from 'vue'
import Vuex from 'vuex'
import { detectOS } from '@/util/'
import lstore from '@/plugins/lstore/'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    /* 终端信息 */
    BROWSER: detectOS(),

    /* 当前登录用户信息 */
    CURRENTUSER: lstore.getData('H5_CUR_USER') || {},

    // 定位信息
    POSITION: lstore.getData('H5_CURRENT_POSITION') || {},

    /**
     * 用户信息
     */
    USERS: lstore.getData('H5_USERS') || {}
  },
  mutations: {},
  actions: {},
  modules: {}
})
