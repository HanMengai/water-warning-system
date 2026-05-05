<template>
  <el-card>
    <h3>任务闭环</h3>
    <el-table :data="list" border style="margin-top:15px">
      <el-table-column prop="content" label="任务" /><el-table-column prop="status" label="状态" />
    </el-table>
  </el-card>
</template>
<script setup>
import { ref } from 'vue'
const list = ref([{ content:'现场核查', status:'待处理' },{ content:'设备检修', status:'已闭环' }])
</script>