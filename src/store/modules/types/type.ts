import type { RouteRecordRaw } from "vue-router";
interface UserState {
  token: string | null;
  menuRoutes: RouteRecordRaw[];
}

export type { UserState };
