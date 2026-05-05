<template>
  <div class="layout">
    <aside class="sidebar">
      <div class="logo">水利灾害预警系统</div>
      <el-menu :default-active="$route.path" router background="#002140" text="#fff" active="#409eff">
        <el-menu-item index="/dashboard">控制台</el-menu-item>
        <el-menu-item index="/collect">数据采集</el-menu-item>
        <el-menu-item index="/detect">AI灾害检测</el-menu-item>
        <el-menu-item index="/warning">预警管理</el-menu-item>
        <el-menu-item index="/task">任务闭环</el-menu-item>
        <el-menu-item index="/report">报告生成</el-menu-item>
        <el-menu-item index="/user">用户管理</el-menu-item>
      </el-menu>
    </aside>
    <div class="main">
      <header class="header">
        <span>{{ $route.meta.title }}</span>
        <div>
          <el-tag type="success">管理员</el-tag>
          <span style="margin-left:10px">王欣雅 202419404</span>
          <el-button size="small" type="danger" @click="logout" style="margin-left:10px">退出</el-button>
        </div>
      </header>
      <div class="content" style="position:relative;z-index:1">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const logout = () => router.push('/login')
</script>

<style scoped>
.layout { display: flex; height: 100vh; }
.sidebar { width: 230px; background: #002140; color: #fff; }
.logo { padding: 20px; text-align: center; font-weight: bold; }
.main { flex: 1; display: flex; flex-direction: column; }
.header { height: 60px; background: #fff; padding: 0 20px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 1px 4px #0001; }
.content { flex: 1; padding: 20px; overflow: auto; }
</style>