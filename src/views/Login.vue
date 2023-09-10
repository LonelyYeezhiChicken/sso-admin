<template>
  <el-row :gutter="20">
    <el-col :span="12" :offset="6">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>登入吧!</span>
          </div>
        </template>
        <el-form ref="ruleFormRef" :model="user" status-icon :rules="rules" label-width="120px" class="demo-ruleForm">
          <el-form-item label="Name" prop="name">
            <el-input v-model="user.name" type="text" autocomplete="off" />
          </el-form-item>
          <el-form-item label="Password" prop="password">
            <el-input v-model="user.password" type="password" autocomplete="off" />
          </el-form-item>
          <el-form-item>
            <el-button @click="resetForm(ruleFormRef)">清除</el-button>
            <el-button type="primary" @click="submitForm(ruleFormRef)">登入</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>
  
  <script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";

const ruleFormRef = ref<FormInstance>();

const checkName = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error("Please input the name"));
  }
};

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the password"));
  } else {
    if (user.password !== "") {
      if (!ruleFormRef.value) return;
      ruleFormRef.value.validateField("checkPass", () => null);
    }
    callback();
  }
};

const user = reactive({
  name: "",
  password: "",
});

const rules = reactive<FormRules<typeof user>>({
  name: [{ validator: checkName, trigger: "blur" }],
  password: [{ validator: validatePass, trigger: "blur" }],
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!");
      return false;
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>
  