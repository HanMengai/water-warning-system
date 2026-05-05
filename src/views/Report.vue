<template>
  <el-card>
    <h3>安全报告生成</h3>
    <el-button type="primary" @click="create" style="margin-top:15px">生成月度报告</el-button>
    <p style="margin-top:15px">状态：{{ status }}</p>
  </el-card>
</template>
<script setup>
import { ref } from 'vue'
const status = ref('未生成')
const create = () => status.value = '2026年5月报告已生成（PDF）'
</script>