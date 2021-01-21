<template>
  <footer class="foot-guide">
    <section :class="{ active: isCurPath('/home') }" class="guide-item" @click="to('/home')">
      <svg class="m-style-svg m-svg-def icon-hot">
        <use xlink:href="#icon-hot" />
      </svg>
      <span>Cash</span>
    </section>
    <section :class="{ active: isCurPath('profile') }" class="guide-item" @click="to('/profile')">
      <BadgeIcon :dot="profile">
        <svg class="m-style-svg m-svg-def">
          <use xlink:href="#icon-me" />
        </svg>
      </BadgeIcon>
      <span>Me</span>
    </section>
  </footer>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'FootGuide',
  data() {
    return {
      // has_fans: false,
    }
  },
  computed: {
    profile () {
      return 0
    },
    notification () {
      return 0
    }
  },
  mounted() {
    this.$el.parentNode.style.paddingBottom = '1rem'
  },
  methods: {
    to(path) {
      this.$router.push(path)
    },
    isCurPath(path) {
      return this.$route.fullPath.indexOf(path) > -1
    },
    showPostMenu() {
      this.$bus.$emit('post-menu')
    }
  }
}
</script>

<style lang="less" scoped>
.foot-guide {
  background-color: #363844;
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0 10px;
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  height: 100px;
  display: flex;
  box-shadow: 0 -0.026667rem 0.053333rem rgba(0, 0, 0, 0.1);

  .m-svg-def {
    width: 45px;
    height: 45px;
    margin-bottom: 5px;
    &.plus {
      width: 65px;
      height: 65px;
    }
    &.icon-hot {
      fill: red;
    }
  }

  .guide-item {
    flex: 1;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #ccc;
    .v-badge-dot {
      top: 0;
    }
    &.plus {
      color: #fff !important;
      background-color: @primary;
      margin: 0 15px;
    }
    &.active {
      color: @primary;

      > svg {
        color: @primary;
      }
    }
    span {
      font-size: 24px;
      color: inherit;
    }
  }
}
</style>
