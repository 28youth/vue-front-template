// vuex utils
import { mapState } from 'vuex'
import PopupDialog from './components/PopupDialog.vue'

export default {
  render() {
    return (
      <div id="app" class="wap-wrap">
        <keep-alive>{this.keepAlive && <router-view />}</keep-alive>
        {!this.keepAlive && <router-view />}
        <div>
          <PopupDialog />
        </div>
      </div>
    )
  },
  name: 'App',
  /**
   * The App data.
   *
   * @return {Object}
   */
  data: () => ({
    title: 'world'
  }),
  computed: {
    keepAlive() {
      return this.$route.meta.keepAlive || false
    },
    ...mapState({
      /**
       * Global user id.
       *
       * @param  {Object} state
       *
       * @return {number}
       */
      UID: state => state.CURRENTUSER.id
      /**
       * Easemob status.
       *
       * @param  {Object} state
       *
       */
    })
  },
  watch: {
    /**
     * `$route` watcher.
     *
     * @param  {Object} newRoute
     *
     * @return {void}
     */
    $route(newRoute) {
      let { title } = newRoute.meta || {}
      console.log('newRoute', newRoute);
      if (title) {
        this.title = title
      }
    },
    /**
     * Set document title.
     *
     * @param  {string} newTitle
     *
     * @return {void}
     */
    title(newTitle) {
      if (newTitle) {
        document.title = newTitle
      }
    }
  },
  /**
   * The created hook.
   * @return {void}
   */
  created() {}
}
