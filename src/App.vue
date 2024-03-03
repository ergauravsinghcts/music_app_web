<template>
  <q-layout view="hHh Lpr lFf" class="parent-page">
    <NavBar />

    <router-view />
  </q-layout>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  setup() {},
};
</script>

<style scoped>
.parent-page {
  /* # take full width of the screen */
  width: 90vw;
  height: 100vh;
}
</style>
