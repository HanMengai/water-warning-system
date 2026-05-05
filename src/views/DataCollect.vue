<template>
  <el-card>
    <h3>实时数据采集</h3>
    <el-table :data="list" border style="margin-top:15px">
      <el-table-column prop="device" label="设备" /><el-table-column prop="water" label="水位" />
      <el-table-column prop="status" label="状态" />
    </el-table>
  </el-card>
</template>
<script setup>
import { ref } from 'vue'
const list = ref([
  { device:'SB-001', water:'12.54m', status:'正常' },
  { device:'SB-002', water:'11.32m', status:'正常' },
])
</script>