<template>
  <div
    class="max-w-[1204px] h-[718px] m-auto px-5 py-5 mt-24 border-t-[#A09F9B] border-t-[1px] border-b-[1px] flex flex-col md:flex-row gap-4 hover:h-[800px] transition-all duration-300 page-view"
    style="min-height: 100vh"
  >
    <NuxtLink
      v-for="(page, index) in pages"
      :key="index"
      :to="`/post/${page.slug}`"
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
    </NuxtLink>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useGSAP } from "~/composables/useGSAP";

const pages = [
  {
    title: "Code Red",
    subtitle: "In Serious Toruble",
    readTime: "3 min read",
    image: "/images/code-red.png",
    slug: "code-red",
  },
  {
    title: "Sister Unity",
    subtitle: "The weight of a lifetime",
    readTime: "3 min read",
    image: "/images/sister.png",
    slug: "sister-unity",
  },
  {
    title: "Sister Unity",
    subtitle: "The weight of a lifetime",
    readTime: "3 min read",
    image: "/images/sister.png",
    slug: "sister-unity",
  },
];

onMounted(async () => {
  const { gsap, ScrollTrigger } = await useGSAP();

  if (!ScrollTrigger) return; // Guard clause for SSR

  console.log("Component mounted, setting up ScrollTrigger");

  setTimeout(() => {
    const triggerElement = document.querySelector(".page-view");
    console.log("Trigger element height:", triggerElement?.offsetHeight);
    console.log(
      "Trigger element position:",
      triggerElement?.getBoundingClientRect()
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page-view",
        start: "top center",
        // markers: true,
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      ".image-reveal",
      {
        clipPath: "inset(100% 0 0 0)",
        opacity: 0,
      },
      {
        clipPath: "inset(0)",
        opacity: 1,
        duration: 1.5,
        stagger: 0.3,
        ease: "power2.inOut",
      }
    ).fromTo(
      [".page-view h2", ".page-view h3", ".page-view p"],
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      },
      "-=0.5"
    );

    ScrollTrigger.refresh();
  }, 100);
});
</script>

<style scoped>
.page-view {
  position: relative;
  width: 100%;
  min-height: 100vh;
}

/* .image-reveal {
  visibility: hidden;
} */
</style>
