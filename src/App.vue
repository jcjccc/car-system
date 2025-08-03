<!-- src/App.vue -->
<template>
  <div class="layout">
    <Sidebar />
    <div class="main">
      <Header />
      <header>
        <div class="logo"></div>
      </header>
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from "./components/Sidebar.vue";
import Header from "./components/Header.vue";
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
.layout {
  display: flex;
}
.main {
  flex: 1;
  margin: 0;
}
</style>
