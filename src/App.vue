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
@import url('./style.css');

.main {
  height: 100%;
  width: 100%;
}
</style>
