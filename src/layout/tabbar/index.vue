<template>
  <div class="tabbar">
    <div class="tabbar_left">
      <Breadcrumb />
    </div>
    <div class="tabbar_right">
      <Setting />
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from "./breadcrumb/index.vue";
import Setting from "./setting/index.vue";
defineOptions({ name: "Tabbar" }); // 设置组件名
</script>

<style scoped lang="scss">
.tabbar {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(
    to right,
    rgb(232, 223, 223),
    rgb(201, 178, 178),
    rgb(197, 165, 165)
  );

  .tabbar_left {
    display: flex;
    align-items: center;
    vertical-align: middle;
    margin-left: 20px;
  }

  .tabbar_right {
    display: flex;
    align-items: center;
  }
}
</style>
