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
    <el-menu-item index="/reimburse">
      <i class="el-icon-user"></i>
      <span>审批报销</span>
    </el-menu-item>
    <el-menu-item index="/carGrossProfit">
      <i class="el-icon-user"></i>
      <span>车辆净利润</span>
    </el-menu-item>
    <el-menu-item index="/employeeSalary">
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
