import { createRouter, createWebHistory } from 'vue-router'
import AdminLayout from '../layouts/AdminLayout.vue'
import Login from '../views/Login.vue'

const routes = [
  { path: '/login', component: Login, meta: { title: '登录' } },
  {
    path: '/', component: AdminLayout, redirect: '/dashboard',
    children: [
      { path: '/dashboard', component: () => import('../views/Dashboard.vue'), meta: { title: '控制台' } },
      { path: '/collect', component: () => import('../views/DataCollect.vue'), meta: { title: '数据采集' } },
      { path: '/detect', component: () => import('../views/DisasterDetect.vue'), meta: { title: 'AI检测' } },
      { path: '/warning', component: () => import('../views/WarningManage.vue'), meta: { title: '预警管理' } },
      { path: '/task', component: () => import('../views/TaskManage.vue'), meta: { title: '任务闭环' } },
      { path: '/report', component: () => import('../views/Report.vue'), meta: { title: '报告生成' } },
      { path: '/user', component: () => import('../views/UserManage.vue'), meta: { title: '用户管理' } },
    ]
  }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router