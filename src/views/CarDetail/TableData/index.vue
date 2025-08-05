<template>
  <div class="table-wrapper">
    <!-- 左表格 -->
    <el-table
      :data="leftData"
      border
      style="width: 100%; height: 600px"
      header-align="center"
    >
      <el-table-column prop="date" label="日期" />
      <el-table-column prop="carNumber" label="车号" />
      <el-table-column prop="driverName" label="驾驶员" />
      <el-table-column prop="startPoint" label="起点" />
      <el-table-column prop="endPoint" label="终点" />
      <el-table-column prop="unitPrice" label="单价" />
      <el-table-column prop="tonnage" label="吨数" />
      <el-table-column prop="remark" label="备注" />
      <!-- 毛利=吨数*单价 -->
      <el-table-column prop="grossProfit" label="毛利">
        <template #default="scope">
          {{ scope.row.tonnage * scope.row.unitPrice }}
        </template>
      </el-table-column>
    </el-table>

    <!-- 右表格 -->
    <el-table
      :data="rightData"
      border
      style="width: 100%; height: 600px"
      header-align="center"
    >
      <el-table-column prop="date" label="日期" />
      <el-table-column prop="carNumber" label="车牌号" />
      <el-table-column prop="expenseType" label="费用类型" />
      <el-table-column prop="expense" label="费用" />
      <el-table-column prop="unitPrice" label="审批结果" />
      <el-table-column prop="remark" label="备注" />
    </el-table>
  </div>
  <!-- 合计区域 -->
  <div class="summary">
    <el-descriptions title="统计信息" :column="3" border size="small">
      <el-descriptions-item label="总毛利">
        {{ totalGrossProfit }} 元
      </el-descriptions-item>
      <el-descriptions-item label="总费用">
        {{ totalExpense }} 元
      </el-descriptions-item>
      <el-descriptions-item label="净利润">
        {{ netProfit }} 元
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { computed } from "vue";

// 数据容器
const leftData = ref([]);
const rightData = ref([]);

// 模拟请求两个接口数据
async function getLeftData() {
  // TODO: 替换为真实 API 请求
  return [
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
}

async function getRightData() {
  return [
    {
      id: 1,
      date: "2023-10",
      carNumber: "粤B12345",
      driverName: "张三",
      carCount: 2,
      tonnage: 30,
      startPoint: "广州",
      expenseType: "过路费",
      expense: 300,
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
      expenseType: "加油",
      expense: 300,

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
      expense: 300,

      driverName: "王五",
      carCount: 3,
      startPoint: "韶关",
      endPoint: "广州",
      tonnage: 45,
      grossProfit: 12000,
      unitPrice: 25,
      expense: 300,

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
      expense: 300,

      grossProfit: 6000,
      commission: 1080,
      unitPrice: 29,
      expenseType: "加油",

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
      expense: 300,

      carCount: 1,
      tonnage: 18,
      grossProfit: 4500,
      unitPrice: 31,
      expenseType: "修理轮胎",
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
      expense: 300,

      carCount: 2,
      tonnage: 35,
      startPoint: "深圳",
      endPoint: "肇庆",
      grossProfit: 9000,
      commission: 1620,
      advance: 600,
      unitPrice: 15,
      expenseType: "修理轮胎",
      extraAudit: 250,
      totalLabor: 2470,
      actualLabor: 1870,
      teamName: "第三车队",
      remark: "迟到",
    },
    {
      id: 7,
      date: "2023-10",
      carNumber: "粤B12345",
      driverName: "张三",
      carCount: 2,
      tonnage: 30,
      startPoint: "广州",
      expenseType: "过路费",
      expense: 300,

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
      id: 8,
      date: "2023-10",
      expenseType: "加油",
      expense: 300,

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
      id: 9,
      carNumber: "粤B24680",
      date: "2023-10",
      expense: 300,

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
      id: 10,
      carNumber: "粤B13579",
      driverName: "赵六",
      carCount: 2,
      tonnage: 25,
      startPoint: "韶关",
      endPoint: "广州",
      date: "2023-10",
      expense: 300,

      grossProfit: 6000,
      commission: 1080,
      unitPrice: 29,
      expenseType: "加油",

      advance: 400,
      extraAudit: 150,
      totalLabor: 1630,
      actualLabor: 1230,
      teamName: "第三车队",
      remark: "",
    },
    {
      id: 11,
      carNumber: "粤B11223",
      driverName: "钱七",
      date: "2023-10",
      expense: 300,

      carCount: 1,
      tonnage: 18,
      grossProfit: 4500,
      unitPrice: 31,
      expenseType: "修理轮胎",
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
      id: 12,
      carNumber: "粤B99887",
      driverName: "孙八",
      date: "2023-10",
      expense: 300,

      carCount: 2,
      tonnage: 35,
      startPoint: "深圳",
      endPoint: "肇庆",
      grossProfit: 9000,
      commission: 1620,
      advance: 600,
      unitPrice: 15,
      expenseType: "修理轮胎",
      extraAudit: 250,
      totalLabor: 2470,
      actualLabor: 1870,
      teamName: "第三车队",
      remark: "迟到",
    },
  ];
}

// 加载数据
onMounted(async () => {
  leftData.value = await getLeftData();
  rightData.value = await getRightData();
});
// 计算总毛利
const totalGrossProfit = computed(
  () => {
    if (!leftData.value.length) return 0;
    console.log('leftData###', leftData.value);
    return leftData.value.reduce((sum, item) => sum + item.unitPrice * item.tonnage, 0)
  }
);

// 计算总费用
const totalExpense = computed(
  () => {
    if (!rightData.value.length) return 0;
    console.log('leftData###', rightData.value);
    return rightData.value.reduce((sum, item) => sum + (item.expense || 0), 0)
  }
);

// 计算净利润
const netProfit = computed(() => totalGrossProfit.value - totalExpense.value);
</script>

<style scoped>
.table-wrapper {
  display: flex;
  gap: 20px;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
}

.el-table {
  flex: 1;
  min-width: 0; /* 避免表格撑开容器 */
}
.summary {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
</style>
