import { createRouter, createWebHistory } from "vue-router";
import main from "../layouts/main.vue";
import home from "../pages/Home.vue";
import profile from "../pages/Profile.vue";

const routes = [
  {
    name: "Main",
    path: "/",
    component: main,
    children: [
      {
        name: "Home",
        path: "/home",
        component: home,
      },
      {
        name: "Profile",
        path: "/profile",
        component: profile,
      },
    ],
  },
];

const router = Router();
function Router() {
  const router = new createRouter({
    history: createWebHistory(),
    routes,
  });
  return router;
}

export default router;
