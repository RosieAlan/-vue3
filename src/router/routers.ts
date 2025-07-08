export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/view/login/index.vue"),
    name: "login", //命名路由
  },
  //登陆成功后进入首页
  {
    path: "/",
    component: () => import("@/view/home/index.vue"),
    name: "layout",
  },
  {
    path: "/404",
    component: () => import("@/view/404/index.vue"),
    name: "404",
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    name: "any",
  },
];
