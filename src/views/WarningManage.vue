<template>
  <el-card>
    <h3>预警管理</h3>
    <el-table :data="list" border style="margin-top:15px">
      <el-table-column prop="content" label="内容" /><el-table-column prop="level" label="等级" />
    </el-table>
  </el-card>
</template>
<script setup>
import { ref } from 'vue'
const list = ref([{ content:'裂缝风险', level:'橙色' },{ content:'水位异常', level:'黄色' }])
</script>