<!-- <NuxtRouteAnnouncer /> -->

<template>
  <div class="min-h-screen">
    <div
      class="h-screen w-screen text-white flex items-center justify-center preloader_container fixed top-0 z-40 bg-[#444444]"
      ref="preloaderRef"
    >
      <StackedImages ref="stackedImagesRef" />
    </div>
    <HomeHero ref="homeHeroRef" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useNuxtApp } from '#app';
import { useRoute, useRouter } from 'vue-router';

// Create a reference to the components
const homeHeroRef = ref(null);
const preloaderRef = ref(null);
const stackedImagesRef = ref(null);
const route = useRoute();
const router = useRouter();

// Get the animation bus
const { $animBus } = useNuxtApp();

// Function to start the HomeHero animation
const startHomeAnimation = () => {
  if (homeHeroRef.value) {
    homeHeroRef.value.startHomeAnimation();
  }
};

onMounted(() => {
  // Listen for the preloader animation completion event
  $animBus.on('preloader:complete', startHomeAnimation);
  
  // Listen for route changes to trigger the animation when returning to home
  router.beforeEach((to, from) => {
    if (to.path === '/' && from.path !== '/' && stackedImagesRef.value?.animatePreloaderOnReturn) {
      // Use the existing animation function in StackedImages component
      stackedImagesRef.value.animatePreloaderOnReturn();
    }
  });
});

onUnmounted(() => {
  // Clean up event listeners
  $animBus.off('preloader:complete', startHomeAnimation);
});
</script>
