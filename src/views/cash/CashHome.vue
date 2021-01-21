<template>
  <div class="p-cash">
    <CommonHeader :pinned="true" class="header">
      <span slot="left" />
      <nav class="type-switch-bar">
        Lucky ball
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
  name: 'CashHome'
}
</script>

<style lang="less" scoped>
.p-cash {
}
</style>
