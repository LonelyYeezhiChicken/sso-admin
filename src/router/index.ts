import { createRouter, createWebHistory } from "vue-router";
import { RouterMap } from "../models/define";

const routes = [
  {
    path: RouterMap.Home,
    name: RouterMap.Home.toString(),
    component: () => import("../views/Home.vue"),
  },
  {
    path: RouterMap.Login,
    name: RouterMap.Login.toString(),
    component: () => import("../views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

let test = false;

router.beforeEach(async (to, from, next) => {
  next();
});
export default router;
