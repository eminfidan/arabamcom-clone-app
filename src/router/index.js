import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/showcase",
    name: "Showcase",
    component: () => import("@/views/Showcase.vue"),
  },
  {
    path: "/showcase/:id",
    name: "VehicleDetail",
    component: () => import("@/views/VehicleDetail.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  mode: "hash|history",
  routes,
});

export default router;
