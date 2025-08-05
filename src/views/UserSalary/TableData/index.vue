<template>
  <el-table :data="tableData" border style="width: 100%" header-align="center">
    <el-table-column prop="driverName" label="驾驶员" align="center" />
    <el-table-column prop="carCount" label="车数" align="center" />
    <el-table-column prop="tonnage" label="吨位" align="center" />
    <el-table-column prop="grossProfit" label="毛利" align="center" />
    <el-table-column prop="commission" label="提成基本18%①" align="center" />
    <el-table-column prop="advance" label="借支" align="center" />
    <el-table-column prop="extraAudit" label="补加审车②" align="center" />
    <el-table-column prop="totalLabor" label="总劳务费（含借支）" align="center" />
    <el-table-column prop="actualLabor" label="实发劳务费" align="center" />
    <el-table-column prop="teamName" label="车队名称" align="center" />
    <el-table-column prop="remark" label="备注" align="center" />
  </el-table>
</template>

<script setup lang="ts">
const tableData = [
  {
    driverName: "张三",
    carCount: 2,
    tonnage: 30,
    grossProfit: 8000,
    commission: 1440,
    advance: 500,
    extraAudit: 200,
    totalLabor: 2140,
    actualLabor: 1640,
    teamName: "第一车队",
    remark: "按时完成",
  },
  {
    driverName: "李四",
    carCount: 1,
    tonnage: 15,
    grossProfit: 5000,
    commission: 900,
    advance: 300,
    extraAudit: 100,
    totalLabor: 1300,
    actualLabor: 1000,
    teamName: "第二车队",
    remark: "",
  },
  // 你可以继续添加更多数据
]
</script>
