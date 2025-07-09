<script setup>

</script>

<template>
  <div class="container">
    <video ref="videoRef" autoplay muted loop playsinline class="background-video">
      <source src="@/assets/video/starrysky.mp4" type="video/mp4">
      您的浏览器不支持视频标签。
    </video>
    <!-- <div class="content">

    </div> -->
  </div>
</template>

<style scoped>
.container {
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: #45CB9C;
}

.background-video {
  display: block;
}

/* .content {
  background-color: aqua;
  height: 70px;
} */
</style>