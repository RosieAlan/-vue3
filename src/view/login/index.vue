<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <!-- 登录的表单 -->
        <el-form
          :model="loginForm"
          :rules="rules"
          class="login_form"
          ref="loginForms"
        >
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item prop="username">
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              :prefix-icon="Lock"
              v-model="loginForm.password"
              type="password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              :loading="loading"
              class="login_btn"
              type="primary"
              size="default"
              @click="login"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import { User, Lock } from "@element-plus/icons-vue";
import { reactive, ref } from "vue";
import { ElMessage, ElNotification } from "element-plus";
import { useRouter } from "vue-router";
import { getTime } from "@/utils/time";
import useUserStore from "@/store/modules/user";
let userStore = useUserStore();
let $router = useRouter();
let loginForm = reactive({
  username: "admin",
  password: "111111",
});
let loading = ref(false);
let loginForms = ref();
// 登录按钮
let login = async () => {
  let result = await loginForms.value.validate();
  console.log("result", result);
  if (!result) return;
  loading.value = true;
  try {
    await userStore.userLogin(loginForm);
    $router.push("/");
    loading.value = false;
    ElNotification({
      title: "登录成功",
      message: `hi,${getTime()}`,
      type: "success",
    });
  } catch (error) {
    ElMessage.error((error as Error).message);
  } finally {
    loading.value = false;
  }
};
//定义表单验证规则
const validateUsername = (_: any, value: any, callback: any) => {
  //rule: 规则
  //value: 值
  //callback: 回调
  if (value.length < 3 || value.length > 10 || /[\u4e00-\u9fa5]/.test(value)) {
    callback(new Error("用户名长度在3-10个字符之间,且不能是中文"));
  } else {
    callback();
  }
};
const rules = {
  username: [{ validator: validateUsername, trigger: "blur" }],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 5, max: 15, message: "密码长度在5-15个字符之间", trigger: "blur" },
  ],
};
</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url("@/assets/images/background.jpg") no-repeat;
  background-size: cover;

  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url("@/assets/images/login_form.png") no-repeat;
    background-size: cover;
    padding: 40px;

    h1 {
      color: white;
      font-size: 40px;
    }

    h2 {
      font-size: 20px;
      color: white;
      margin: 20px 0px;
    }

    .login_btn {
      width: 100%;
    }
  }
}
</style>
