<script setup>

</script>

<template>
  <div class="container">
    <!-- 星空背景 -->
    <video ref="videoRef" autoplay muted loop playsinline class="background-video">
      <source src="@/assets/video/starrysky.mp4" type="video/mp4">
      您的浏览器不支持视频标签。
    </video>

    <!-- 视频中央文字 -->
    <div class="video-text">
      <div class="welcome-text">欢迎来到</div>
      <div class="magic-text">神奇之星</div>
    </div>

    <!-- 个人信息 -->
    <div class="personal-info">
      <div class="info-container">
        <div class="info-item">电子邮箱：sqzx0524@163.com</div>
        <div class="info-item">
          <a href="https://github.com/SyqJzcX" target="_blank" rel="noopener noreferrer">
            Github 个人主页：https://github.com/SyqJzcX
          </a>
        </div>
        <div class="info-item">研究方向: Artificial Intelligence, Data Science, Software Engineering</div>
        <div class="info-item">办公地点: Room 128, Teaching Building 2, Beijing University of Posts and Telecommunications</div>
      </div>
    </div>

    <!-- 内容块 -->
    <div class="content">
    </div>
  </div>
</template>

<style scoped>
/* 总容器 */
.container {
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: #45CB9C;
}

/* 星空背景 */
.background-video {
  /* 设置为块级（默认是行内），防止出现空行 */
  display: block;
  width: 100%;
}

/* 视频中央文字样式 */
.video-text {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  text-align: left;
  width: 80%;
  /* max-width: 1200px; */
  padding: 2rem;
  background-color: transparent;
}

.welcome-text {
  font-size: 2rem;
  font-weight: normal;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 0.5rem;
  /* text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); */
  background-color: transparent;
  animation: float 3s ease-in-out 0.3s infinite;
}

.magic-text {
  font-size: 25rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.3);
  /* text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7); */
  line-height: 1.2;
  background-color: transparent;
  animation: float 6s ease-in-out 0.6s infinite;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
  100% {
    transform: translateY(0);
  }
}

/* 个人信息 */
.personal-info {
  position: relative;
  z-index: 1;
  background-color: #197AA7;
  padding: 2rem 0;
  text-align: center;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.info-container {
  background-color: #197AA7;
  max-width: 1200px;
  margin: 0 auto;
  display: inline-block;
  text-align: left;
}

.info-item {
  background-color: #197AA7;
  font-size: 1.3rem;
  line-height: 1.75;
  letter-spacing: 0.025em;
  margin-bottom: 0.5rem;
}

.info-item:last-child {
  margin-bottom: 0;
}

.info-item a {
  background-color: #197AA7;
  color: #a8dadc;
  text-decoration: none;
  transition: color 0.3s;
}

.info-item a:hover {
  color: #f1faee;
  text-decoration: underline;
}

/* 内容展示 */
.content {
  background: linear-gradient(
    to bottom,
    #197AA7 0%,
    #4F96BB 20%,
    #52AAC6 40%,
    #4BBBAF 60%,
    #49C1A7 80%,
    #45CB9C 100%
  );
  height: 700px;
}
</style>