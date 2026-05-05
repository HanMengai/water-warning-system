<template>
  <el-card>
    <h3>AI灾害检测（YOLOv8+LSTM）</h3>
    <el-button type="warning" @click="run" style="margin-top:15px">开始检测</el-button>
    <p style="margin-top:15px">结果：{{ res }}</p>
  </el-card>
</template>
<script setup>
import { ref } from 'vue'
const res = ref('无')
const run = () => res.value = '坝体裂缝 | 橙色预警 | 置信度0.96'
</script>