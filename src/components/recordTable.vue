<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="id" label="序号" width="60" />
    <el-table-column prop="carNumber" label="车号" />
    <el-table-column prop="driver" label="驾驶员" />
    <el-table-column prop="carCount" label="车数" />
    <el-table-column prop="tonnage" label="吨位" />
    <el-table-column prop="grossProfit" label="毛利" />
    <el-table-column prop="commission" label="提成基本18%①" />
    <el-table-column prop="advance" label="借支" />
    <el-table-column prop="extraAudit" label="补加审车②" />
    <el-table-column prop="totalLabor" label="总劳务费（含借支）" />
    <el-table-column prop="actualLabor" label="实发劳务费" />
    <el-table-column prop="teamName" label="车队名称" />
    <el-table-column prop="remark" label="备注" />
    <!-- 操作列 -->
    <el-table-column label="操作" width="150" fixed="right">
      <template #default="scope">
        <el-button size="small" type="primary" @click="handleEdit(scope.row)">
          编辑
        </el-button>
        <el-button
          size="small"
          type="success"
          @click="handleApprove(scope.row)"
        >
          审批
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
const tableData = [
  {
    id: 1,
    carNumber: '粤B12345',
    driver: '张三',
    carCount: 2,
    tonnage: 30,
    grossProfit: 8000,
    commission: 1440,
    advance: 500,
    extraAudit: 200,
    totalLabor: 2140,
    actualLabor: 1640,
    teamName: '第一车队',
    remark: '按时完成',
  },
  {
    id: 2,
    carNumber: '粤B67890',
    driver: '李四',
    carCount: 1,
    tonnage: 15,
    grossProfit: 5000,
    commission: 900,
    advance: 300,
    extraAudit: 100,
    totalLabor: 1300,
    actualLabor: 1000,
    teamName: '第二车队',
    remark: '',
  },
  {
    id: 3,
    carNumber: '粤B24680',
    driver: '王五',
    carCount: 3,
    tonnage: 45,
    grossProfit: 12000,
    commission: 2160,
    advance: 700,
    extraAudit: 300,
    totalLabor: 3160,
    actualLabor: 2460,
    teamName: '第一车队',
    remark: '优质司机',
  },
  {
    id: 4,
    carNumber: '粤B13579',
    driver: '赵六',
    carCount: 2,
    tonnage: 25,
    grossProfit: 6000,
    commission: 1080,
    advance: 400,
    extraAudit: 150,
    totalLabor: 1630,
    actualLabor: 1230,
    teamName: '第三车队',
    remark: '',
  },
  {
    id: 5,
    carNumber: '粤B11223',
    driver: '钱七',
    carCount: 1,
    tonnage: 18,
    grossProfit: 4500,
    commission: 810,
    advance: 200,
    extraAudit: 100,
    totalLabor: 1110,
    actualLabor: 910,
    teamName: '第二车队',
    remark: '需审核资料',
  },
  {
    id: 6,
    carNumber: '粤B99887',
    driver: '孙八',
    carCount: 2,
    tonnage: 35,
    grossProfit: 9000,
    commission: 1620,
    advance: 600,
    extraAudit: 250,
    totalLabor: 2470,
    actualLabor: 1870,
    teamName: '第三车队',
    remark: '迟到',
  },
]
</script>
