<!-- 布局组件 -->
<script setup>
import { ref, onMounted } from 'vue';

// 引用音频元素
const audioRef = ref(null);
// 播放状态
const isPlaying = ref(false);

// 切换音乐播放状态
const toggleMusic = () => {
  if (isPlaying.value) {
    // 暂停播放
    audioRef.value.pause();
  } else {
    // 开始播放
    audioRef.value.play().catch(error => {
      console.error('播放失败:', error);
      // 可以在这里添加用户提示
    });
  }
  // 更新播放状态
  isPlaying.value = !isPlaying.value;
};

// 组件挂载后初始化
onMounted(() => {
  // 检查是否有保存的播放状态（可选）
  // 可以添加本地存储逻辑来记住用户的播放偏好
});
</script>

<template>
  <div class="common-layout">
    <el-container class="full-height">
      <el-header id="header-container" router>
        <div id="logo-container" index="/index">
          <!-- LOGO -->
          <img src="@/assets/image/layout/logo.svg" alt="网站Logo" id="logo-image">

          <!-- 使用ElementPlus分隔线 -->
          <el-divider direction="vertical" id="custom-divider" />

          <!-- 音乐播放器 -->
          <img src="@/assets/image/layout/disk.png" alt="音乐播放器" id="disk-image" @click="toggleMusic"
            :class="{ 'playing': isPlaying }">

          <!-- 音频元素 - 设置为隐藏 -->
          <audio ref="audioRef" loop>
            <source src="@/assets/audio/J.T.Peterson - Tales of Neverlandinspiring) [mqms2].mp3" type="audio/mpeg">
          </audio>
        </div>
        <div class="button-container">
          <el-button type="primary" @click="logout">退出</el-button>
        </div>
      </el-header>

      <!-- 主体内容 -->
      <el-main class="main-content">
        <router-view />
      </el-main>

      <!-- 页脚内容 -->
      <el-footer class="footer-content">
        <div class="copyright-container">
          <!-- 版权信息主体 -->
          <p class="copyright-text">
            © {{ new Date().getFullYear() }} 神奇之星 | BUPT 人工智能专业
          </p>
          <!-- 附加信息（可选） -->
          <p class="extra-info">
            专注于AI技术探索与实践 | 学习记录与分享
          </p>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<style scoped>
/* .full-height {
  height: 100vh;
  display: flex;
  flex-direction: column;
} */

html,
body {
  margin: 0;
  padding: 0;
}

#header-container {
  background-color: #0F172A;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 70px;
  /* 新增：固定头部在顶端 */
  /* 固定定位 */
  position: fixed;
  /* 距离顶部0 */
  top: 0;
  /* 距离左侧0 */
  left: 0;
  /* 占满全屏宽度 */
  width: 100%;
  /* 确保在其他内容上方（避免被遮挡） */
  z-index: 1000;
  /* 新增：底部亮线分隔 */
  box-shadow: 0 2px 4px rgba(148, 163, 184, 0.2);
  border-bottom: 1px solid rgba(148, 163, 184, 0.3);
}

#logo-container {
  cursor: pointer;
  height: 40px;
}

#logo-image {
  height: 40px;
  transition: filter 0.3s ease;
}

#logo-image:hover {
  /* 降低亮度至70% */
  filter: brightness(70%);
  /* 或者使用: filter: grayscale(50%); 增加灰度效果 */
}

#custom-divider {
  height: 35px;
  margin: 0 8px;
  /* 上移 5px（正值向下，负值向上） */
  transform: translateY(-13px);
}

#disk-image {
  height: 35px;
  transition: filter 0.3s ease;
}

#disk-image:hover {
  filter: brightness(1.2);
}

/* 播放状态下的样式 - 可以自定义 */
#disk-image.playing {
  /* 播放时亮度提高 */
  filter: brightness(1.5);
  /* 应用脉动动画 */
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {

  /* 初始状态：正常大小 */
  0% {
    transform: scale(1);
  }

  /* 中间状态：放大 5% */
  50% {
    transform: scale(1.05);
  }

  /* 结束状态：恢复正常 */
  100% {
    transform: scale(1);
  }
}

.button-container {
  display: flex;
  justify-content: flex-end;
}

.main-content {
  /* 取消固定的min-height */
  /* min-height: calc(100vh - 120px); */

  /* 使用flex-grow让main占据剩余空间 */
  /* flex-grow: 1; */

  /* 顶部留出header的高度 */
  margin-top: 70px;

  /* 确保宽度占满 */
  width: 100%;

  /* 移除可能影响宽度的内边距 */
  padding: 0;
}

.footer-content {
  /* 与header背景色统一，增强整体感 */
  background-color: #0F172A;
  /* 略微提高透明度，避免过于厚重 */
  opacity: 0.9;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* 浅灰色文字，提升可读性 */
  color: #E2E8F0;
  /* 左右内边距，避免内容贴边 */
  padding: 0 20px;
  /* 确保在页面底部（配合main的min-height） */
  /* margin-top: auto; */
  width: 100%;
  /* 新增：顶部亮线分隔 */
  box-shadow: 0 -2px 4px rgba(148, 163, 184, 0.2);
  border-top: 1px solid rgba(148, 163, 184, 0.3);
}

.copyright-container {
  /* 文字居中 */
  text-align: center;
}

.copyright-text {
  font-size: 14px;
  /* 底部外边距，与附加信息分隔 */
  margin: 0 0 8px 0;
  /* 略微加粗主版权信息 */
  font-weight: 500;
}

.extra-info {
  font-size: 12px;
  /* 更浅的文字色，区分主次 */
  color: #94A3B8;
  /* 清除默认外边距 */
  margin: 0;
}
</style>