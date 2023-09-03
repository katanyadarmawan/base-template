import { createRouter, createWebHistory } from "vue-router";
import main from "../layouts/main.vue";
import home from "../pages/HomePage.vue";
import profile from "../pages/ProfilePage.vue";
import form from "../pages/FormPage.vue"

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
      {
        name: "Form",
        path: "/form",
        component: form,
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
