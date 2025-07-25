<script setup>
import {ref, onMounted} from 'vue'
import {queryAllApi} from '@/api/work'

// 声明列表展示数据
let deptList= ref([])

// 动态加载数据-查询合伙人
const queryAll = async () => {
  const result = await queryAllApi()
  deptList.value = result.data
}

//钩子函数
onMounted(() => {
  queryAll()
})
</script>

<template>
    <div class="container">
        <!-- 表格添加了自定义类名 semi-transparent-table 用于样式定制 -->
        <el-table class="semi-transparent-table" :data="deptList" height="250" style="width: 100%">
            <el-table-column prop="id" label="id" width="180" />
            <el-table-column prop="name" label="姓名" width="180" />
            <el-table-column prop="age" label="年龄" width="180" />
            <el-table-column prop="sex" label="性别" width="180" />
            <el-table-column prop="major" label="专业" width="180" />
            <el-table-column prop="hobby" label="兴趣" />
        </el-table>
    </div>
</template>

<style scoped>
.container {
    position: relative;
    width: 100%;
    height: 760px;
    background: linear-gradient(to bottom,
            #197AA7 0%,
            #4F96BB 20%,
            #52AAC6 40%,
            #4BBBAF 60%,
            #49C1A7 80%,
            #45CB9C 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: #333;
}

/* 添加表格半透明效果和悬停效果 */
:deep(.semi-transparent-table) {
    /* 设置表格整体背景为半透明灰色 */
    background-color: rgba(128, 128, 128, 0.2) !important;
    border-radius: 8px;
    overflow: hidden;
}

/* 表头样式 */
:deep(.semi-transparent-table .el-table__header th) {
    background-color: rgba(0, 0, 0, 0.15) !important;
    color: #fff;
    font-weight: bold;
}

/* 表格行基础样式 */
:deep(.semi-transparent-table .el-table__row td) {
    background-color: rgba(255, 255, 255, 0.1) !important;
    color: #fff;
}

/* 鼠标悬停效果 */
:deep(.semi-transparent-table .el-table__row:hover td) {
    background-color: rgba(0, 0, 0, 0.35) !important;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

/* 斑马纹效果（可选） */
:deep(.semi-transparent-table .el-table__row--striped td) {
    background-color: rgba(0, 0, 0, 0.25) !important;
}

/* 单元格边框样式 */
:deep(.semi-transparent-table td),
:deep(.semi-transparent-table th) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
}

/* 移除表格底部多余边框 */
:deep(.semi-transparent-table::before) {
    display: none;
}
</style>