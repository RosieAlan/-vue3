<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_slider" :class="{ fold: layoutSettingStore.fold }">
      <!-- 展示菜单 -->
      <Logo></Logo>
      <!-- 滚动组件 -->
      <el-scrollbar class="scrollbar">
        <el-menu
          :collapse="layoutSettingStore.fold"
          background-color="#001529"
          text-color="white"
          :default-active="$route.path"
          active-text-color="deeppink"
        >
          <!--根据路由动态生成菜单-->
          <MenuComponent :menuList="userStore.menuRoutes"></MenuComponent>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航 -->
    <div class="layout_tabbar" :class="{ fold: layoutSettingStore.fold }">
      <!-- layout组件的顶部导航tabbar -->
      <Tabbar></Tabbar>
    </div>
    <!-- 内容展示区域 -->
    <div class="layout_main" :class="{ fold: layoutSettingStore.fold }">
      <Main></Main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import useLayOutSettingStore from "@/store/modules/setting";
import { useRoute } from "vue-router";
import Logo from "./logo/index.vue";
import MenuComponent from "./menu/index.vue";
import Main from "./main/index.vue";
//顶部导航
import Tabbar from "./tabbar/index.vue";
//获取路由对象
import useUserStore from "@/store/modules/user";
let userStore = useUserStore();
//获取当前路由
let $route = useRoute();
console.log("当前路由", $route.path);
//获取layout配置相关的仓库
let layoutSettingStore = useLayOutSettingStore();
console.log("layoutSettingStore", layoutSettingStore);
let { fold } = storeToRefs(layoutSettingStore);
console.log("layoutSettingStoxxxxxre", fold.value);
defineOptions({ name: "Layout" }); // 设置组件名
</script>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;

  .layout_slider {
    color: white;
    width: $base-menu-width;
    height: 100vh;
    background: $base-menu-background;
    transition: all 0.1s;

    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);

      .el-menu {
        border-right: none;
      }
    }

    &.fold {
      width: $base-menu-min-width;
    }
  }

  .layout_tabbar {
    position: fixed;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    top: 0px;
    left: $base-menu-width;
    transition: all 0.3s;
    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }

  .layout_main {
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    left: $base-menu-width;
    top: $base-tabbar-height;
    padding: 20px;
    overflow: auto;
    transition: all 0.3s;

    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
}
</style>
