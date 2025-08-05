import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login/index.vue"),
  },
{
  path: "/home",
  name: "Home",
  component: () => import("@/views/Home/index.vue"),
  children: [
    {
      path: "recordOrder",
      name: "RecordOrder",
      meta: { title: "录入单号", icon: "Edit" },
      component: () => import("@/views/RecordOrder/index.vue"),
    },
    {
      path: "reimburse",
      name: "Reimburse",
      meta: { title: "审批报销", icon: "Document" },
      component: () => import("@/views/Reimburse/index.vue"),
    },
    {
      path: "carDetail",
      name: "CarDetail",
      meta: { title: "车辆明细", icon: "Stamp" },
      component: () => import("@/views/CarDetail/index.vue"),
    },
    {
      path: "carGrossProfit",
      name: "CarGrossProfit",
      meta: { title: "车辆净利润", icon: "PieChart" },
      component: () => import("@/views/CarGrossProfit/index.vue"),
    },
    {
      path: "userSalary",
      name: "UserSalary",
      meta: { title: "员工工资", icon: "User" },
      component: () => import("@/views/UserSalary/index.vue"),
    },
        {
      path: "userInfo",
      name: "UserInfo",
      meta: { title: "用户信息", icon: "User" },
      component: () => import("@/views/UserInfo/index.vue"),
    },
  ],
}

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 路由守卫
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  if (to.path !== "/login" && !token) {
    next("/login");
  } else if (to.path === "/login" && token) {
    next("/home");
  } else {
    next();
  }
});

export default router;
