<template>
  <el-dialog
    :model-value="visible"
    title="录入弹窗"
    width="30%"
    @close="handleClose"
    @update:modelValue="handleUpdate"
  >
    <!-- 将表单内容移出 footer 插槽 -->
    <el-form :model="form" label-width="120px">
      <el-form-item label="月份">
        <el-date-picker v-model="value2" type="month" placeholder="选择日期" />
      </el-form-item>
      <el-form-item label="车牌号">
        <el-input v-model="form.carNumber" />
      </el-form-item>
      <el-form-item label="驾驶员">
        <el-input v-model="form.userName" />
      </el-form-item>
      <el-form-item label="起始点">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="终点">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="单价">
        <el-input-number v-model="num"  @change="handleChange" />
      </el-form-item>
      <el-form-item label="吨位1">
        <el-input-number v-model="num" @change="handleChange" />
      </el-form-item>
      <el-form-item label="吨位2">
        <el-input-number v-model="num" @change="handleChange" />
      </el-form-item>
    </el-form>

    <template #footer>
      <span>
        <el-button type="primary" @click="handleClose">取消</el-button>
        <el-button type="primary" @click="handleConfirm">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { defineProps, defineEmits, reactive } from "vue";

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:visible"]);

const form = reactive({
  name: "",
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
});

// 处理对话框关闭事件
const handleClose = () => {
  console.log("关闭弹窗");
  emit("update:visible", false);
};

// 处理对话框更新事件（Element Plus 需要）
const handleUpdate = (value) => {
  emit("update:visible", value);
};

const handleConfirm = () => {
  console.log("确认操作");
  handleClose();
};
</script>
