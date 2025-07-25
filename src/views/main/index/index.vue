<script lang="ts" setup>
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'

const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<template>
    <div class="common-layout">
        <el-container class="full-height">
            <!-- 侧边栏 -->
            <el-aside class="el-aside">
                <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router>
                    <el-sub-menu index="1">
                        <template #title>
                            <el-icon>
                                <location />
                            </el-icon>
                            <span>Navigator One</span>
                        </template>
                        <el-menu-item-group title="Group One">
                            <el-menu-item index="1-1">item one</el-menu-item>
                            <el-menu-item index="1-2">item two</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="Group Two">
                            <el-menu-item index="1-3">item three</el-menu-item>
                        </el-menu-item-group>
                        <el-sub-menu index="1-4">
                            <template #title>item four</template>
                            <el-menu-item index="1-4-1">item one</el-menu-item>
                        </el-sub-menu>
                    </el-sub-menu>
                    <el-menu-item index="/main/hobby">
                        <el-icon><icon-menu /></el-icon>
                        <span>Hobby</span>
                    </el-menu-item>
                    <el-menu-item index="/main/working">
                        <el-icon>
                            <document />
                        </el-icon>
                        <span>Work</span>
                    </el-menu-item>
                    <el-menu-item index="/main/learning">
                        <el-icon>
                            <setting />
                        </el-icon>
                        <span>Learning anything</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>

            <!-- 展示区 -->
            <el-main class="el-main">
                <RouterView />
            </el-main>
        </el-container>
    </div>
</template>

<style scoped>
.common-layout {
    /* 相对定位 */
    position: relative;
    width: 100%;
    height: 100%;
    /* 隐藏超出元素边界的内容 */
    overflow: hidden;
    background-color: #45CB9C;
}

.full-height {
    height: 100%;
}

.el-aside {
    height: 100%;
    background-color: transparent;
}

.el-main {
    padding: 0px;
    height: 100%;
}

/* 设置菜单中所有常规状态文字颜色为白色 */
:deep(.el-menu) {
    --el-menu-text-color: white; /* 常规状态文字颜色 */
    --el-menu-item-group-title-color: white; /* 分组标题颜色 */
    background-color: transparent;
    border-right: none;
}

/* 确保图标在常规状态下为白色 */
:deep(.el-menu .el-icon) {
    color: white;
}

/* 设置激活状态文字颜色为 #45CB9C */
:deep(.el-menu-item.is-active) {
    color: #45CB9C !important;
}

/* 设置激活状态图标颜色为 #45CB9C */
:deep(.el-menu-item.is-active .el-icon) {
    color: #45CB9C !important;
}

/* 设置子菜单标题文字颜色 */
:deep(.el-sub-menu__title) {
    color: white !important;
}

/* 设置子菜单标题在激活状态下的颜色 */
:deep(.el-sub-menu.is-active .el-sub-menu__title) {
    color: #45CB9C !important;
}

/* 设置子菜单标题在激活状态下的图标颜色 */
:deep(.el-sub-menu.is-active .el-sub-menu__title .el-icon) {
    color: #45CB9C !important;
}

/* 设置分组标题文字颜色 */
:deep(.el-menu-item-group__title) {
    color: white;
    padding: 7px 0 7px 20px;
    line-height: normal;
    font-size: 12px;
}

/* 设置菜单项悬停效果 */
:deep(.el-menu-item:hover),
:deep(.el-sub-menu__title:hover) {
    background-color: rgba(255, 255, 255, 0.2) !important;
}

/* 设置激活菜单项背景色 */
/* :deep(.el-menu-item.is-active) {
    background-color: rgba(255, 255, 255, 0.3) !important;
} */
</style>