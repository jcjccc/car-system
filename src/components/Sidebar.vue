<template>
  <el-menu
    class="sidebar"
    :default-active="activePath"
    background-color="#2d3a4b"
    text-color="#fff"
    active-text-color="#409EFF"
    router
  >
    <el-menu-item
      v-for="item in menuItems"
      :key="item.path"
      :index="item.path"
    >
      <el-icon v-if="item.icon">
        <component :is="item.icon" />
      </el-icon>
      <span>{{ item.title }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import router from '@/router'

// 引入所有 Element Plus 图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const route = useRoute()
const activePath = computed(() => route.path)

// 将图标名称和组件映射出来
const iconMap = ElementPlusIconsVue

const menuItems = computed(() => {
  const homeRoute = router.getRoutes().find(r => r.path === '/home')
  if (!homeRoute || !homeRoute.children) return []

  return homeRoute.children.map(child => ({
    path: '/home/' + child.path,
    title: child.meta?.title || child.name || '未命名',
    icon: iconMap[child.meta.icon] || null,
  }))
})
</script>

<style scoped>
.sidebar {
  width: 200px;
  height: 100vh;
}
</style>
