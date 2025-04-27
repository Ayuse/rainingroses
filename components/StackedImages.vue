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
        class="image-wrapper overflow-hidden"
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
import { gsap } from "gsap";
import CustomEase from "gsap/CustomEase";

import { ref, onMounted, watch } from "vue";
import { useRouter } from "nuxt/app";
import { useNuxtApp } from "#app";

// Register plugins
gsap.registerPlugin(CustomEase);
CustomEase.create("customEase", "0.86,0,0.07,1");

// Get the animation bus from the plugin
const { $animBus } = useNuxtApp();

const images = [
  "/images/preload-img/img-1.png",
  "/images/preload-img/img-2.png",
  // "/images/preload-img/img-3.png",
  "/images/preload-img/img-4.png",
];

const imagesLoaded = ref(false);
const loadedImagesCount = ref(0);
const router = useRouter();

// Track if animation has played this session
const animationHasPlayed = ref(false);

// Check sessionStorage on component creation
onMounted(() => {
  if (sessionStorage.getItem('animationPlayed') === 'true') {
    animationHasPlayed.value = true;
  }
});

// Custom bezier curve for spring-like animation
const springBezier = [0.77, 0, 0.18, 1];

// Function to check if all images are loaded
const onImageLoad = () => {
  loadedImagesCount.value++;
  if (loadedImagesCount.value === images.length) {
    imagesLoaded.value = true;
  }
};

// Reset animation state
const resetAnimation = () => {
  console.log("resetting animation");

  // If animation has already played this session, don't reset
  if (animationHasPlayed.value) {
    return;
  }
  
  console.log("resetting animation 2");
  // Reset GSAP animations
  gsap.set(`.image-container`, { clipPath: "inset(100% 0 0 0)" });
  gsap.set(`.image-wrapper .image`, {
    clipPath: "inset(100% 0 0 0)",
    scale: 2,
  });
  gsap.set(`.preloader-header`, { y: "100%" });
  gsap.set(`.preloader_container`, { y: "0%" });
  // Reset loaded state to trigger animation again
  imagesLoaded.value = false;
  loadedImagesCount.value = 0;

  // Since images might be cached now, manually trigger the loaded state
  setTimeout(() => {
    loadedImagesCount.value = images.length;
    imagesLoaded.value = true;
  }, 100);
};

// Watch for when all images are loaded
watch(imagesLoaded, (newValue) => {
  if (newValue) {
    startAnimation();
  }
});

// Function to start the animation
const startAnimation = () => {
  // Skip animation if it has already played this session
  if (animationHasPlayed.value) {
    // Immediately set elements to their final state
    gsap.set(`.image-container`, { clipPath: "inset(0 0 100% 0)" });
    gsap.set(`.preloader-header`, { y: 0 });
    gsap.set(`.preloader_container`, { y: "-100%" });
    // Emit event through the bus if we're skipping the animation
    $animBus.emit('preloader:complete');
    return;
  }

  // Mark animation as played for this session
  animationHasPlayed.value = true;
  sessionStorage.setItem('animationPlayed', 'true');

  const pl = gsap.timeline({
    onComplete: () => {
      // Emit the event through the animation bus
      $animBus.emit('preloader:complete');
    }
  });
  const overlap = 0.5; // Seconds between animation starts
  pl.to(`.image-container `, {
    clipPath: "inset(0% 0 0 0)",
    duration: 0.7,
    ease: "power4.inOut",
  });
  //Loop through each image and apply the animation
  images.forEach((_, index) => {
    pl.fromTo(
      `.image-wrapper:nth-child(${index + 1}) .image`,
      { clipPath: "inset(100% 0 0 0)", scale: 2 }, // Start with the image fully clipped (bottom to top)
      {
        clipPath: "inset(0% 0 0 0)",
        scale: 1,
        duration: 0.9,
        ease: "customEase", // Use custom bezier curve
      },
      index * overlap // Delay the start of each animation based on the overlap
    );
  });

  //Add the final clip animation for the last image
  pl.to(`.image-container`, {
    clipPath: "inset(0 0 100% 0)",
    duration: 0.7,
    ease: "customEase",
  });
  pl.to(`.preloader-header`, {
    y: 0,
    duration: 1,
    ease: "customEase",
  });
  pl.to(`.preloader_container`, {
    y: "-100%",
    duration: 1,
    ease: "customEase",
  });
};

// Function to animate preloader when returning to home page
const animatePreloaderOnReturn = () => {
  // First set it to 0% (visible)
  gsap.set(`.preloader_container`, { y: "0%" });
  
  // Then animate it to -100% (off-screen)
  return gsap.to(`.preloader_container`, {
    y: "-100%",
    duration: 1,
    ease: "customEase",
  });
};

// Watch for route changes
onMounted(() => {
  // Start animation when component is first mounted
  if (loadedImagesCount.value === images.length) {
    imagesLoaded.value = true;
  }

  // Listen for route changes
  router.afterEach((to, from) => {
    // Check if we're navigating to the home page
    if (to.path === "/" && from.path !== "/") {
      // Always animate the preloader when returning to home
      animatePreloaderOnReturn();
      
      // Only reset and replay full animation if it hasn't played this session
      if (!animationHasPlayed.value) {
        nextTick(() => {
          setTimeout(() => {
            resetAnimation();
          }, 1000); // Small delay to ensure DOM is ready
        });
      }
    }
  });
});
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
