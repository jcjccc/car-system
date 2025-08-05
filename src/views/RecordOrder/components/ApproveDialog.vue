<template>
  <el-dialog v-model="visible" title="审批弹窗" width="30%">
    <template #footer>
      <el-form :model="form" label-width="120px">
        <el-form-item label="结果">
          <el-radio-group v-model="form.resource">
            <el-radio label="通过" />
            <el-radio label="不通过" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="form.desc" type="textarea" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">取消</el-button>
          <el-button>确定</el-button>
        </el-form-item>
      </el-form>
    </template>
  </el-dialog>
</template>

<script setup>
import { defineProps, toRef, reactive } from "vue";
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
const props = defineProps({
  visible: {
    // 使用 Vue 3 标准命名
    type: Boolean,
    default: false,
  },
});
const visible = toRef(props, "visible");
const emit = defineEmits(["update:visible"]);
const handleConfirm = () => {
  console.log("确认操作");
  handleClose();
};
const handleClose = () => {
  console.log("关闭弹窗");
  emit("update:visible", false); // 关闭弹窗
};
</script>
