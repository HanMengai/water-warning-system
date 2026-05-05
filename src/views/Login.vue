<template>
  <div class="login">
    <el-card class="box">
      <h2>水利灾害预警系统</h2>
      <el-input v-model="name" placeholder="账号" style="margin-top:20px" />
      <el-input v-model="pwd" placeholder="密码" type="password" style="margin-top:15px" />
      <el-button type="primary" block @click="login" style="margin-top:20px">登录</el-button>
    </el-card>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
const router = useRouter()
const name = ref(''), pwd = ref('')
const login = () => {
  if (name.value === 'admin' && pwd.value === '123456') {
    ElMessage.success('登录成功')
    router.push('/dashboard')
  } else ElMessage.error('账号密码错误')
}
</script>
<style scoped>
.login { height:100vh; display:flex; align-items:center; justify-content:center; background:#f5f7fa; }
.box { width:400px; padding:30px; text-align:center; }
</style>