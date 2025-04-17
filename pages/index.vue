<!-- <NuxtRouteAnnouncer /> -->

<template>
  <div class="min-h-screen">
    <div
      class="h-screen w-screen bg-[#444444] text-white flex items-center justify-center preloader_container fixed top-0 z-40"
    >
      <StackedImages />
    </div>
    <HomeHero ref="homeHeroRef" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useNuxtApp } from '#app';

// Create a reference to the HomeHero component
const homeHeroRef = ref(null);

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
});

onUnmounted(() => {
  // Clean up event listeners
  $animBus.off('preloader:complete', startHomeAnimation);
});
</script>
