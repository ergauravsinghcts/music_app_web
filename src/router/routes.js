// create application routes
import LandingPage from "../components/LandingPage.vue";
// import Trending songs
import TrendingSongs from "../components/TrendingSongs.vue";
// import MySongs
import MySongs from "../components/MySongs.vue";
// import LoginPage
import LoginPage from "../components/LoginPage.vue";
// import register page
import RegisterPage from "../components/RegisterPage.vue";

// import logout util
import { logout, isLoggedIn } from "../util/authenticationUtil";

const ROUTES = [
  {
    path: "/gaana",
    component: LandingPage,
  },
  {
    // check if user is logged in before route enter
    beforeEnter: (to, from, next) => {
      if (isLoggedIn()) {
        next();
      } else {
        next("/login");
      }
    },
    path: "/trending",
    component: TrendingSongs,
  },
  {
    // check if user is logged in before route enter
    beforeEnter: (to, from, next) => {
      if (isLoggedIn()) {
        next();
      } else {
        next("/login");
      }
    },
    path: "/my-songs",
    component: MySongs,
  },
  {
    // logout before route enter
    beforeEnter: (to, from, next) => {
      logout();
      next();
    },
    path: "/login",
    component: LoginPage,
  },
  {
    // logout before route enter
    beforeEnter: (to, from, next) => {
      logout();
      next();
    },
    path: "/register",
    component: RegisterPage,
  },
  // logout route
  {
    beforeEnter: (to, from, next) => {
      logout();
      next();
    },
    path: "/logout",
    redirect: "/gaana",
  },
  // catch all route using regex pathMatch
  { path: "/:pathMatch(.*)*", redirect: "/gaana" },
  // default to /home
  { path: "/", redirect: "/gaana" },
];

export default ROUTES;
