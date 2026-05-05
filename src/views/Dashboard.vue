<template>
  <div style="position:relative;z-index:1">
    <el-row :gutter="20">
      <el-col :span="6"><el-card class="card blue"><h3>在线设备</h3><h1>136</h1></el-card></el-col>
      <el-col :span="6"><el-card class="card orange"><h3>今日预警</h3><h1>18</h1></el-card></el-col>
      <el-col :span="6"><el-card class="card red"><h3>高风险</h3><h1>5</h1></el-card></el-col>
      <el-col :span="6"><el-card class="card green"><h3>已闭环</h3><h1>64</h1></el-card></el-col>
    </el-row>

    <el-row :gutter="20" style="margin-top:20px">
      <el-col :span="12">
        <el-card><h3>水位趋势</h3><div ref="c1" style="height:280px;margin-top:10px"></div></el-card>
      </el-col>
      <el-col :span="12">
        <el-card><h3>预警统计</h3><div ref="c2" style="height:280px;margin-top:10px"></div></el-card>
      </el-col>
    </el-row>

    <el-card style="margin-top:20px">
      <h3>最新预警</h3>
      <el-table :data="list" border style="margin-top:10px">
        <el-table-column prop="content" label="内容" /><el-table-column prop="level" label="等级" />
      </el-table>
    </el-card>
  </div>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue'
const echarts = inject('$echarts')
const c1 = ref(null), c2 = ref(null)
const list = ref([{ content:'裂缝风险', level:'橙色' },{ content:'水位超限', level:'黄色' }])

onMounted(() => {
  setTimeout(() => {
    echarts.init(c1.value).setOption({
      xAxis: { data: ['00:00','04:00','08:00','12:00','16:00','20:00'] },
      yAxis: {}, series: [{ data: [12.2,12.4,12.7,13.2,13.5,14.1], type: 'line' }]
    })
    echarts.init(c2.value).setOption({
      series: [{ type: 'pie', data: [
        { name:'红色',value:2 },{ name:'橙色',value:8 },{ name:'黄色',value:12 }
      ]}]
    })
  }, 500)
})
</script>

<style scoped>
.card { padding:20px; color:white; }
.blue { background:#409eff; }
.orange { background:#ff9800; }
.red { background:#f44336; }
.green { background:#4caf50; }
</style>