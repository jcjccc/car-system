<!-- src/App.vue -->
<template>
  <div class="layout">
    <Sidebar />
    <div class="main">
      <Header />
      <header>
        <div class="logo">
        </div>
      </header>
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'
</script>

<style>
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.layout {
  display: flex;
}
.main {
  flex: 1;
  margin: 0;
}
</style>
