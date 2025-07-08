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
    <el-container>
      <el-header id="header-container" router>
        <div id="logo-container" index="/index">
          <!-- LOGO -->
          <img src="@/assets/img/layout/logo.svg" alt="网站Logo" id="logo-image">

          <!-- 使用ElementPlus分隔线 -->
          <el-divider direction="vertical" id="custom-divider" />

          <!-- 音乐播放器 -->
          <img src="@/assets/img/layout/disk.png" alt="音乐播放器" id="disk-image" @click="toggleMusic"
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

      </el-main>
      <!-- 页脚内容 -->
      <el-footer class="footer-content">

      </el-footer>
    </el-container>
  </div>
</template>

<style scoped>
#header-container {
  background-color: #0F172A;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 70px;
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
  transform: translateY(-11px);
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
  background-color: #45CB9C;
  min-height: calc(100vh - 120px);
  /* 减去header和footer的高度 */
}

.footer-content {
  background-color: #242424;
  opacity: 0.5;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}
</style>