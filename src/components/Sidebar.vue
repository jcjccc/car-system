<template>
  <el-menu
    class="sidebar"
    :default-active="activePath"
    background-color="#2d3a4b"
    text-color="#fff"
    active-text-color="#409EFF"
    router
  >
    <el-menu-item index="/recordOrder">
      <i class="el-icon-house"></i>
      <span>录入单号</span>
    </el-menu-item>
    <el-menu-item index="/user">
      <i class="el-icon-user"></i>
      <span>审批单号</span>
    </el-menu-item>
    <el-menu-item index="/record3">
      <i class="el-icon-house"></i>
      <span>录入报销</span>
    </el-menu-item>
    <el-menu-item index="/user1">
      <i class="el-icon-user"></i>
      <span>审批报销</span>
    </el-menu-item>
    <el-menu-item index="/user2">
      <i class="el-icon-user"></i>
      <span>车辆毛利</span>
    </el-menu-item>
    <el-menu-item index="/record3">
      <i class="el-icon-house"></i>
      <span>员工工资</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const activePath = route.path
</script>

<style scoped>
.sidebar {
  width: 200px;
  height: 100vh;
}
</style>
