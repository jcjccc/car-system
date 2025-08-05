<template>
  <router-view />
</template>

<script setup lang="ts">
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
