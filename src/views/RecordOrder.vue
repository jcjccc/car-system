<template>
  <div class="content">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="车牌号">
        <el-input
          v-model="formInline.user"
          placeholder="车牌号"
          clearable
        />
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
    <el-pagination background layout="prev, pager, next" :total="1000" />
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
.demo-form-inline .el-input {
  --el-input-width: 220px;
}

.demo-form-inline .el-select {
  --el-select-width: 220px;
}
</style>
