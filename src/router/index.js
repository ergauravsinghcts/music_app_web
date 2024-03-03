// create vue router using routes

import { createRouter, createWebHistory } from "vue-router";
import ROUTES from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes: ROUTES,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export default router;
