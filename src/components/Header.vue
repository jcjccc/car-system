<template>
  <header class="app-header">
    <el-button type="primary" @click="logout()"> 退出 </el-button>
    <div class="user-info">
      <img class="avatar" :src="user.avatar" alt="avatar" />
      <span class="username">{{ user.name }}</span>
    </div>
  </header>
</template>

<script setup lang="ts">
const user = {
  name: '张炜',
  avatar: 'https://i.pravatar.cc/40', // 示例头像地址
}

const logout = () => {
  // 在此处调用退出登录的逻辑
  alert('退出登录')
}
</script>

<style scoped>
.app-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #f8f8f8;
  border-bottom: 1px solid #ddd;
}

.user-info {
  margin-left: 10px;
  display: flex;
  align-items: center;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 8px;
}

.username {
  font-size: 14px;
  color: #333;
}

.logout-btn {
  background-color: transparent;
  border: 1px solid #ccc;
  padding: 4px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.logout-btn:hover {
  background-color: #eee;
}
</style>
