<template>
  <div class="main">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue"

export default {
  name: 'App',
  components: {
    Header,
  },
}
</script>

<style scoped>
.main {
  height: 100%;
  width: 100%;
}
</style>
