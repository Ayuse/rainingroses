<template>
  <div class="container">
    <!-- Loader -->
    <!-- <div v-if="!imagesLoaded" class="loader">Loading...</div> -->

    <!-- Image Container -->
    <div
      class="text-[clamp(48px,8vw,96px)] font-dancing fixed preloader-header overflow-hidden text-[#E6E3DC]"
    >
      <h1 class="translate-y-full preloader-header">Raining Roses</h1>
    </div>
    <div
      class="flex flex-col md:h-[456px] h-[300px] md:w-full w-[300px] relative overflow-hidden items-center image-container"
    >
      <div
        v-for="(img, index) in images"
        :key="index"
        class="image-wrapper overflow-hidden md:w-[500px] w-[300px]"
      >
        <NuxtImg
          :src="img"
          class="image"
          preset="default"
          fit="cover"
          @load="onImageLoad"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const images = [
  '/images/preload-img/img-1.png',
  '/images/preload-img/img-2.png',
  '/images/preload-img/img-3.png',
];
</script>
<style scoped>
/* Keep existing styles the same */
.container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.loader {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.image-wrapper {
  position: absolute;
  top: 0;
  /* clip-path: inset(100% 0 0 0); */
}

.image-container {
  position: relative;
  clip-path: inset(100% 0 0 0);
  /* Start hidden */
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
