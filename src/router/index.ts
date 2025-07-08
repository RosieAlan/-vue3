// 创建路由实例
import { createRouter, createWebHashHistory } from "vue-router";
// 创建路由实例
import { constantRoutes } from "./routers";
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});
export default router;
