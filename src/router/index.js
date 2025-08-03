import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/reimburse",
    name: "Reimburse",
    component: () => import("@/views/Reimburse.vue"),
  },
  {
    path: "/reimburse",
    name: "Reimburse",
    component: () => import("@/views/Reimburse.vue"),
  },
  {
    path: "/reimburse",
    name: "Reimburse",
    component: () => import("@/views/Reimburse.vue"),
  },
  {
    path: "/reimburse",
    name: "Reimburse",
    component: () => import("@/views/Reimburse.vue"),
  },
  {
    path: "/recordOrder",
    name: "RecordOrder",
    component: () => import("@/views/RecordOrder/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
