<template>
  <div class="content">
    <div>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="日期">
          <el-input v-model="formInline.month" placeholder="选择日期" clearable />
        </el-form-item>
        <el-form-item label="车牌号">
          <el-input v-model="formInline.carNumber" placeholder="车牌号" clearable />
        </el-form-item>
        <el-form-item label="司机名称">
          <el-select
            v-model="formInline.userName"
            placeholder="司机名称"
            clearable
          >
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>
         <el-form-item label="审批状态">
          <el-select
            v-model="formInline.userName"
            placeholder="审批状态"
            clearable
          >
            <el-option label="待审批" value="shanghai" />
            <el-option label="审批通过" value="beijing" />
            <el-option label="审批不通过" value="beijing" />
          </el-select>
        </el-form-item>
      </el-form>
      <TableData></TableData>
    </div>
    <div class="pagination-wrapper">
      <el-pagination background layout="prev, pager, next" :total="1000" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import TableData from "./TableData/index.vue";

const isShowRecordDialog = ref(false)

const formInline = reactive({
  month: '',
  carNumber: '',
  userName: '',
  date: '',
})

const handleSearch = () => {
  console.log('search!')
}

const handleRecord = () => {
  isShowRecordDialog.value = true
  console.log('录入记录')
  console.log('handleRecord!')
}
</script>

<style>
.content {
  padding: 20px;
}

.demo-form-inline .el-input {
  --el-input-width: 220px;
}

.demo-form-inline .el-select {
  --el-select-width: 220px;
}
.pagination-wrapper {
  flex-shrink: 0;
  padding-top: 10px;
  display: flex;
  justify-content: flex-end;
}
</style>
