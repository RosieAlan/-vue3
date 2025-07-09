// 创建路由实例
import { createRouter, createWebHashHistory } from "vue-router";
// 创建路由实例
import { constantRoute } from "./routers";
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoute,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});
export default router;
