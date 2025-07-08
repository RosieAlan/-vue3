//用户模块
import { defineStore } from "pinia";
//引入接口
import { reqLogin } from "@/api/user";
import type { loginFormData, loginResponseData } from "@/api/user/type";
import type { UserState } from "./types/type";
import { SET_TOKEN, GET_TOKEN } from "@/utils/token";
const useUserStore = defineStore("User", {
  state: (): UserState => ({
    token: GET_TOKEN() || null,
  }),
  //异步|逻辑的地方
  actions: {
    async userLogin(loginForm: loginFormData) {
      const result: loginResponseData = await reqLogin(loginForm);
      if (result.code === 200) {
        this.token = result.data || "";
        SET_TOKEN(result.data || "");
        return "ok";
      } else {
        return Promise.reject(new Error(result.message));
      }
    },
  },
  getters: {},
});

export default useUserStore;
