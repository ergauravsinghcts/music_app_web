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
                ><router-link to="/gaana" class="text-white"
                  >Gaana.com</router-link
                ></q-toolbar-title
              >
            </div>

            <div class="col-md-8">
              <!-- add search bar -->
              <q-input
                outlined
                dense
                placeholder="Search for songs"
                class="bg-white"
                v-model="searchInput"
                @update:model-value="$emit('search', searchInput)"
              />
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="row" style="padding-top: 2%">
            <div
              :class="
                this.$route.path == '/trending'
                  ? ' background-black col'
                  : 'col'
              "
            >
              <router-link to="/trending" class="menu-items"
                >Trending</router-link
              >
            </div>
            <div
              :class="
                this.$route.path == '/my-songs'
                  ? ' background-black col'
                  : 'col'
              "
            >
              <router-link to="/my-songs" class="menu-items"
                >My Songs</router-link
              >
            </div>
            <div class="col" v-if="loggedIn">
              {{userId?.sub}}
            </div>
          </div>
        </div>
      </div>
      <q-btn flat dense>
        <router-link :to="loggedIn ? '/logout' : '/login'" class="menu-items">
          <!-- whatshot icon -->
          <span>
            <q-icon name="whatshot" /> {{ loggedIn ? "Logout" : "Login" }}
          </span>
        </router-link>
      </q-btn>
    </q-toolbar>
  </q-header>
</template>

<script>
import logo from "../../public/g-logo-custom.png";
import { onMounted, ref, watch } from "vue";
// import isLoggedIn and getLoggedInUser authenticationUtil
import { isLoggedIn, getUser } from "../util/authenticationUtil";
// import route
import { useRoute } from "vue-router";

export default {
  name: "NavBar",

  setup() {
    // searchInput
    const searchInput = ref("");
    // loggedin flag
    const loggedIn = ref(false);
    // userid ref
    const userId = ref("");
    // route
    const route = useRoute();

    // check is logged in on mounted
    onMounted(() => {
      loggedIn.value = isLoggedIn();
      userId.value = getUser();
    });

    // watch route changee and reinitialize loggedIn and userId
    watch(route, () => {
      loggedIn.value = isLoggedIn();
      userId.value = getUser();
    }, {deep: true, immediate: true});

    return {
      logo,
      searchInput,
      loggedIn,
      userId,
    };
  },
};
</script>

<style scoped>
.header-navbar {
  background-color: #e72c30;
  color: white;
}
.menu-items {
  color: white;
  text-align: center;
  padding-top: 2%;
  font-size: larger;
  font-weight: 600;
}

.background-black {
  background: black;
}
</style>
