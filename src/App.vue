<template>
  <q-layout view="hHh Lpr lFf" class="parent-page">
    <NavBar @search="handleSearch" />
    {{searchedKeyword}}

    <router-view :searchedKeyword="searchedKeyword"/>
  </q-layout>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import { ref } from "vue";

export default {
  components: {
    NavBar,
  },
  setup() {
    // searchedKeyword ref
    const searchedKeyword = ref("");

    const handleSearch = (searchInput) => {
      // set searchedKeyword to the searchInput
      searchedKeyword.value = searchInput;
    };
    return {
      handleSearch,
      searchedKeyword,
    };
  },
};
</script>

<style scoped>
.parent-page {
  /* # take full width of the screen */
  width: 90vw;
  height: 100vh;
}
</style>
