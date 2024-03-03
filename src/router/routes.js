// create application routes
import LandingPage from "../components/LandingPage.vue"




const ROUTES = [
  { path: "/gaana", component: LandingPage },
  // default to /home
  { path: "/", redirect: "/gaana" },
];

export default ROUTES;
