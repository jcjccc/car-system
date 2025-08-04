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
}
.main {
  flex: 1;
  margin: 0;
}
</style>
