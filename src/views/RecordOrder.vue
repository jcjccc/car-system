<template>
  <div class="content">
    <div>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="车牌号">
          <el-input v-model="formInline.user" placeholder="车牌号" clearable />
        </el-form-item>
        <el-form-item label="司机名称">
          <el-select
            v-model="formInline.region"
            placeholder="司机名称"
            clearable
          >
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button type="primary" @click="onSubmit">录入</el-button>
        </el-form-item>
      </el-form>
      <RecordTable></RecordTable>
    </div>
    <div class="pagination-wrapper">
      <el-pagination background layout="prev, pager, next" :total="1000" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import RecordTable from '../components/recordTable.vue'

const formInline = reactive({
  user: '',
  region: '',
  date: '',
})

const onSubmit = () => {
  console.log('submit!')
}
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
