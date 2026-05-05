<template>
  <el-card>
    <h3>用户管理</h3>
    <el-table :data="list" border style="margin-top:15px">
      <el-table-column prop="name" label="姓名" /><el-table-column prop="role" label="角色" />
    </el-table>
  </el-card>
</template>
<script setup>
import { ref } from 'vue'
const list = ref([{ name:'王欣雅', role:'管理员' },{ name:'张三', role:'运维' }])
</script>