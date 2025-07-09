<script setup>

</script>

<template>
  <div class="video-container" :style="{ height: containerHeight }">
    <video ref="videoRef" autoplay muted loop playsinline class="background-video">
      <source src="@/assets/video/starrysky.mp4" type="video/mp4">
      您的浏览器不支持视频标签。
    </video>
  </div>
  <!-- <div class="content">
  </div> -->
</template>

<style scoped>
.video-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}
</style>