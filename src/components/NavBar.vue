<template>
  <!-- create quasar navbar -->
  <q-header elevated class="header-navbar">
    <q-toolbar>
      <q-avatar>
        <!-- add image from public folder -->
        <img :src="logo" alt="Quasar Logo" />
      </q-avatar>
      <div class="row" style="width: 100%">
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-3">
              <q-toolbar-title style="padding-top: 2%"
                >Gaana.com</q-toolbar-title
              >
            </div>
            <div class="col-md-8">
              <!-- add search bar -->
              <q-input
                outlined
                dense
                placeholder="Search for songs"
                class="bg-white"
              />
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="row" style="padding-top: 2%">
            <div class="col">Trending Songs</div>
            <div class="col">My Songs</div>
            <div class="col">Logout</div>
          </div>
        </div>
      </div>
      <q-btn flat round dense icon="whatshot" />
    </q-toolbar>
  </q-header>
</template>

<script>
import logo from "../../public/g-logo-custom.png";
export default {
  setup() {
    return {
      logo,
    };
  },
};
</script>

<style scoped>
.header-navbar {
  background-color: #e72c30;
  color: white;
}
</style>
