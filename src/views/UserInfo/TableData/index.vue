<template>
  <div>
    <div>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="name" label="姓名" align="center" />
        <el-table-column prop="account" label="账号" align="center" />
        <el-table-column prop="password" label="密码" align="center" />
        <el-table-column prop="remark" label="备注" align="center" />
        <el-table-column label="操作" align="center" width="160">
          <template #default="scope">
            <el-button
              size="small"
              type="primary"
              @click="openEditDialog(scope.row)"
              >编辑</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <AddOrEditUser v-model:visible="isShowAddOrEditUserDialog" :isEdit="true"></AddOrEditUser>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import AddOrEditUser from "../components/AddOrEditUserDialog.vue";
const isShowAddOrEditUserDialog = ref(false); // 添加/编辑用户弹窗

const tableData = ref([
  { id: 1, name: '张三', account: '13411161151', password: '123456', remark: '管理员' },
  { id: 2, name: '李四', account: '18888888888', password: 'abc123', remark: '普通用户' },
  { id: 3, name: '王五', account: '19999999999', password: 'hello123', remark: '财务' },
])
const rowData = ref({
  id: null,
}); // 当前行数据
const openEditDialog = (row: any) => {
  isShowAddOrEditUserDialog.value = true
}
</script>
