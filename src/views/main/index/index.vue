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
                        <span></span>
                    </el-menu-item>
                    <el-menu-item index="3" disabled>
                        <el-icon>
                            <document />
                        </el-icon>
                        <span>Navigator Three</span>
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
    /* width: 100%; */
    height: 100%;
    /* display: flex; */
}

.el-main {
    padding: 0px;
    height: 100%;
}
</style>