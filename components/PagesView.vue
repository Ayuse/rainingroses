<template>
  <div
    class="max-w-[1204px] m-auto px-5 h-full py-5 md:py-40 mt-24 border-t-[#A09F9B] border-t-[1px] border-b-[1px] flex gap-4"
  >
    <div
      v-for="(page, index) in pages"
      :key="index"
      class="place-content-start"
    >
      <div class="flex justify-between py-5">
        <div class="flex flex-col">
          <h2 class="font-italiana font-light text-[48px]">{{ page.title }}</h2>
          <p class="font-inter text-[16px] font-light italic">
            {{ page.subtitle }}
          </p>
        </div>
        <h3 class="font-inter text-[16px] font-light italic place-self-end">
          {{ page.readTime }}
        </h3>
      </div>

      <NuxtImg
        :src="page.image"
        class="w-full object-cover transition-all duration-300 image-reveal hover:h-[700px] h-[580px]"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const pages = [
  {
    title: "Code Red",
    subtitle: "In Serious Toruble",
    readTime: "3 min read",
    image: "/images/code-red.png",
  },
  {
    title: "Sister Unity",
    subtitle: "The weight of a lifetime",
    readTime: "3 min read",
    image: "/images/sister.png",
  },
  {
    title: "Sister Unity",
    subtitle: "The weight of a lifetime",
    readTime: "3 min read",
    image: "/images/sister.png",
  },
];

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".image-reveal", {
    clipPath: "inset(0)",
    duration: 1.2,
    stagger: 0.5,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".image-reveal",
      start: "top bottom-=100",
      toggleActions: "play none none reverse",
    },
  });
});
</script>

<style scoped>
.image-reveal {
  clip-path: inset(100% 0 0 0);
}
</style>
