<template>
  <div class="login-container">
    <el-card class="login-card">
      <h2>登录系统</h2>
      <el-form :model="loginForm" ref="loginFormRef" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="loginForm.username" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="loginForm.password" type="password" placeholder="请输入密码" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const router = useRouter()

const loginForm = reactive({
  username: '',
  password: ''
})

const handleLogin = () => {
  if (loginForm.username === 'admin' && loginForm.password === '123456') {
    const fakeToken = 'abc123456token' // 模拟返回的token
    localStorage.setItem('token', fakeToken)
    ElMessage.success('登录成功')
    router.push('/home')
  } else {
    ElMessage.error('用户名或密码错误')
  }
}
</script>

<style scoped>
.login-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f2f2f2;
}

.login-card {
  width: 400px;
  padding: 20px;
}
</style>
