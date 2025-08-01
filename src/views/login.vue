<template>
  <div style="padding: 20px">
    <el-form :inline="true" :model="query" @submit.native.prevent>
      <el-form-item label="用户名">
        <el-input v-model="query.name" placeholder="请输入用户名" />
      </el-form-item>
      <el-button type="primary" @click="fetchUsers">搜索</el-button>
    </el-form>

    <el-table :data="tableData" style="width: 100%; margin-top: 20px">
      <el-table-column prop="id" label="ID" width="80" />
      <el-table-column prop="name" label="用户名" />
      <el-table-column prop="email" label="邮箱" />
    </el-table>

    <el-pagination
      style="margin-top: 20px"
      background
      layout="prev, pager, next"
      :total="total"
      :current-page="query.page"
      :page-size="query.pageSize"
      @current-change="handlePageChange"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const query = ref({
  name: '',
  page: 1,
  pageSize: 10
})

const tableData = ref([])
const total = ref(0)

function fetchUsers() {
  // 模拟请求
  const allUsers = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `用户${i + 1}`,
    email: `user${i + 1}@example.com`
  }))

  const start = (query.value.page - 1) * query.value.pageSize
  const end = start + query.value.pageSize
  const filtered = allUsers.filter(u => u.name.includes(query.value.name))

  tableData.value = filtered.slice(start, end)
  total.value = filtered.length
}

function handlePageChange(page) {
  query.value.page = page
  fetchUsers()
}

fetchUsers()
</script>
