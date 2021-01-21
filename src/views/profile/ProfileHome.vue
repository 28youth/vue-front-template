<template>
  <div class="p-cash">
    <CommonHeader :pinned="true" class="header">
      <span slot="left" />
      <nav class="type-switch-bar">
        profile page
      </nav>
    </CommonHeader>

    <main class="p-cash-main">
      
    </main>

    <FootGuide />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ProfileHome'
}
</script>

<style lang="less" scoped>
.p-cash {
}
</style>
