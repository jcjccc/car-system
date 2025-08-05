<template>
  <el-dialog v-model="visible" title="操作日志" width="600px" @close="onClose">
    <el-table :data="logList" border style="width: 100%" v-loading="loading">
      <el-table-column prop="time" label="时间" width="180" />
      <el-table-column prop="user" label="操作人" width="120" />
      <el-table-column prop="action" label="操作内容" />
    </el-table>

    <template #footer>
      <el-button @click="visible = false">关闭</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineExpose } from 'vue'

// 父组件传入：弹窗显示、记录ID
const props = defineProps<{
  modelValue: boolean
  recordId: string | number
}>()

// 弹窗可见性
const visible = ref(props.modelValue)
watch(() => props.modelValue, val => visible.value = val)
watch(() => visible.value, val => emit('update:modelValue', val))

// 数据 & 状态
const loading = ref(false)
const logList = ref<{ time: string; user: string; action: string }[]>([])

const emit = defineEmits(['update:modelValue'])

watch(() => props.recordId, async (id) => {
    console.log('Record ID changed:', id)
  if (!id) return
  await fetchLogs(id)
})

async function fetchLogs(recordId: string | number) {
    console.log('Fetching logs for record ID:', recordId)
  loading.value = true
  try {
    // 模拟接口请求
    logList.value = [
      { time: '2025-08-04 13:00', user: '张三', action: '录入单号' },
      { time: '2025-08-04 14:20', user: '李四', action: '审批拒绝' },
      { time: '2025-08-04 14:20', user: '李四', action: '审批通过' },
    ]

    // 如果你有真实接口：
    // logList.value = await fetchLogListById(recordId)

  } catch (e) {
    console.error('获取日志失败', e)
  } finally {
    loading.value = false
  }
}

function onClose() {
  logList.value = []
}
</script>
