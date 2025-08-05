<template>
  <div class="layout">
    <Sidebar />
    <div class="main">
      <Header />
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from "@/components/Sidebar.vue"
import Header from "@/components/Header.vue"
</script>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
  overflow: hidden; /* 禁止页面级别的滚动条 */
}
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}
.content-wrapper {
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
</style>
