
<template>
    <div class="container">
        <!-- Loader -->
        <!-- <div v-if="!imagesLoaded" class="loader">Loading...</div> -->

        <!-- Image Container -->
        <div class="text-[96px] font-dancing absolute preloader-header overflow-hidden text-[#E6E3DC] ">
            <h1 class="translate-y-full preloader-header">Raining Roses</h1>
        </div>
        <div class="flex flex-col h-[456px] relative overflow-hidden w-full items-center image-container">
            <div v-for="(img, index) in images" :key="index" class="image-wrapper">
                <NuxtImg :src="img" class="image" preset="default" fit="cover" @load="onImageLoad" />
            </div>
        </div>
    </div>
</template>

<script setup>
import gsap, { Power2 } from "gsap";
import CustomEase from "gsap/CustomEase";

import { ref, onMounted } from "vue";
gsap.registerPlugin(CustomEase);
// Register CustomEase
CustomEase.create("customEase", "0.86,0,0.07,1");
const images = [
    "/images/preload-img/img-1.png",
    // "/images/preload-img/img-2.png",
    // "/images/preload-img/img-3.png",
    "/images/preload-img/img-4.png",
];

const imagesLoaded = ref(false);
const loadedImagesCount = ref(0);

// Custom bezier curve for spring-like animation
const springBezier = [0.77, 0, 0.18, 1];

// Function to check if all images are loaded
const onImageLoad = () => {
    loadedImagesCount.value++;
    if (loadedImagesCount.value === images.length) {
        imagesLoaded.value = true;
    }
};

// Watch for when all images are loaded
watch(imagesLoaded, (newValue) => {
    if (newValue) {
        startAnimation();
    }
});

// Function to start the animation
const startAnimation = () => {
    const tl = gsap.timeline();
    const overlap = 0.5; // Seconds between animation starts
    tl.to(`.image-container`, {
        clipPath: "inset(0% 0 0 0 0)",
        duration: 0.7,
        ease: "power4.inOut",
    });
    // Loop through each image and apply the animation
    images.forEach((_, index) => {
        tl.fromTo(
            `.image-wrapper:nth-child(${index + 1}) .image`,
            { clipPath: "inset(100% 0 0 0)", zoom: 1.1 }, // Start with the image fully clipped (bottom to top)
            {
                clipPath: "inset(0% 0 0 0)",
                zoom: 1,
                duration: 0.7,
                ease: "customEase", // Use custom bezier curve
            },
            index * overlap // Delay the start of each animation based on the overlap
        );
    });

    // Add the final clip animation for the last image
    tl.to(`.image-container`, {
        clipPath: "inset(0 0 100% 0)",
        duration: 0.7,
        ease: "customEase",
    });
    tl.to(`.preloader-header`, {
        y: 0,
        duration: 0.7,
        ease: "customEase",
    });
    tl.to(`.preloader_container`, {
        y: "-100%",
        duration: 0.7,
        ease: "customEase",
    });
};
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
    width: 364px;
    height: 456px;
    position: absolute;
    top: 0;
    clip-path: inset(0 0 0 0);
}

.image-container {
    position: relative;
    width: 364px;
    height: 456px;
    clip-path: inset(100% 0 0 0 0);
    /* Start hidden */
}

.image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
