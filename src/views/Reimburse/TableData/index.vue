<template>
  <div>
    <div>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="日期" />
        <el-table-column prop="carNumber" label="车牌号" />
        <el-table-column prop="expenseType" label="费用类型" />
        <el-table-column prop="expense" label="费用" />
        <el-table-column prop="unitPrice" label="审批结果" />
        <el-table-column prop="remark" label="备注" />
        <el-table-column prop="approvalStatus" label="审批状态" />
        <!-- 操作列 -->
        <el-table-column label="操作" fixed="right" width="300" align="center">
          <template #default="scope">
            <el-button
              size="small"
              type="primary"
              @click="handleEdit(scope.row)"
            >
              编辑
            </el-button>
            <el-button
              size="small"
              type="primary"
              @click="handleApprove(scope.row)"
            >
              审批
            </el-button>
            <el-button
              size="small"
              type="primary"
              @click="handleLog(scope.row)"
            >
              操作日志
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <ReimburseDialog v-model:visible="isShowRecordDialog"></ReimburseDialog>
    <ApproveDialog v-model:visible="isShowApproveDialog"></ApproveDialog>
    <LogDialog v-model="isShowLogDialog" :recordId="rowData.id"></LogDialog>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import ApproveDialog from "../components/ApproveDialog.vue";
import ReimburseDialog from "../components/ReimburseDialog.vue";
import LogDialog from "../components/LogDialog.vue";
const isShowApproveDialog = ref(false); // 审批弹窗
const isShowRecordDialog = ref(false); // 编辑弹窗
const isShowLogDialog = ref(false); // 操作日志弹窗

const rowData = ref({
  id: null,
}); // 当前行数据
const handleEdit = (row: any) => {
  isShowRecordDialog.value = true;
};
const handleApprove = (row: any) => {
  isShowApproveDialog.value = true;
};
const handleLog = (row: any) => {
  rowData.value = row;
  isShowLogDialog.value = true;
};
const tableData = [
  {
    id: 1,
    date: "2023-10",
    carNumber: "粤B12345",
    driverName: "张三",
    carCount: 2,
    tonnage: 30,
    startPoint: "广州",
    endPoint: "深圳",
    grossProfit: 8000,
    commission: 1440,
    unitPrice: 21,
    advance: 500,
    extraAudit: 200,
    totalLabor: 2140,
    actualLabor: 1640,
    teamName: "第一车队",
    remark: "按时完成",
  },
  {
    id: 2,
    date: "2023-10",

    carNumber: "粤B67890",
    driverName: "李四",
    carCount: 1,
    startPoint: "广州",
    endPoint: "深圳",
    tonnage: 15,
    grossProfit: 5000,
    unitPrice: 21,

    commission: 900,
    advance: 300,
    extraAudit: 100,
    totalLabor: 1300,
    actualLabor: 1000,
    teamName: "第二车队",
    remark: "",
  },
  {
    id: 3,
    carNumber: "粤B24680",
    date: "2023-10",

    driverName: "王五",
    carCount: 3,
    startPoint: "韶关",
    endPoint: "广州",
    tonnage: 45,
    grossProfit: 12000,
    unitPrice: 25,

    commission: 2160,
    advance: 700,
    extraAudit: 300,
    totalLabor: 3160,
    actualLabor: 2460,
    teamName: "第一车队",
    remark: "优质司机",
  },
  {
    id: 4,
    carNumber: "粤B13579",
    driverName: "赵六",
    carCount: 2,
    tonnage: 25,
    startPoint: "韶关",
    endPoint: "广州",
    date: "2023-10",

    grossProfit: 6000,
    commission: 1080,
    unitPrice: 29,

    advance: 400,
    extraAudit: 150,
    totalLabor: 1630,
    actualLabor: 1230,
    teamName: "第三车队",
    remark: "",
  },
  {
    id: 5,
    carNumber: "粤B11223",
    driverName: "钱七",
    date: "2023-10",

    carCount: 1,
    tonnage: 18,
    grossProfit: 4500,
    unitPrice: 31,

    commission: 810,
    startPoint: "肇庆",
    endPoint: "广州",
    advance: 200,
    extraAudit: 100,
    totalLabor: 1110,
    actualLabor: 910,
    teamName: "第二车队",
    remark: "需审核资料",
  },
  {
    id: 6,
    carNumber: "粤B99887",
    driverName: "孙八",
    date: "2023-10",

    carCount: 2,
    tonnage: 35,
    startPoint: "深圳",
    endPoint: "肇庆",
    grossProfit: 9000,
    commission: 1620,
    advance: 600,
    unitPrice: 15,

    extraAudit: 250,
    totalLabor: 2470,
    actualLabor: 1870,
    teamName: "第三车队",
    remark: "迟到",
  },
];
</script>
