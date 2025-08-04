import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    redirect: '/login',
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
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 路由守卫
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.path !== '/login' && !token) {
    this.$message.error('请先登录')
    next('/login')
  } else if (to.path === '/login' && token) {
    // 已登录却想进登录页，跳转首页
    next('/home')
  } else {
    next()
  }
})

export default router;
