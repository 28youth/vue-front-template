<template>
  <div class="home m-text-c">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <RouterLink
      exact
      tag="div"
      exact-active-class="active"
      to="/about"
    >
      <a>关于我们</a>
    </RouterLink>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
