<template>
  <div class="content">
    <div>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="姓名">
          <el-input
            v-model="formInline.month"
            placeholder="输入姓名"
            clearable
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSearch">查询</el-button>
          <el-button type="primary" @click="handleAdd">添加</el-button>
        </el-form-item>
      </el-form>
      <TableData></TableData>
    </div>
    <div class="pagination-wrapper">
      <el-pagination background layout="prev, pager, next" :total="1000" />
    </div>
    <AddOrEditUser v-model:visible="isShowRecordDialog" :isEdit="false"></AddOrEditUser>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import TableData from "./TableData/index.vue";
import AddOrEditUser from "./components/AddOrEditUserDialog.vue";

const isShowRecordDialog = ref(false);

const formInline = reactive({
  month: "",
  carNumber: "",
  userName: "",
  date: "",
});

const handleSearch = () => {
  console.log("search!");
};

const handleAdd = () => {
  isShowRecordDialog.value = true;
  console.log("录入记录");
  console.log("handleRecord!");
};
</script>

<style>
.content {
  padding: 20px;
}
/* 分页容器样式：靠右对齐 */
.pagination-wrapper {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
.demo-form-inline .el-input {
  --el-input-width: 220px;
}

.demo-form-inline .el-select {
  --el-select-width: 220px;
}
</style>
