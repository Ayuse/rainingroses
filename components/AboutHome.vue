<template>
  <div
    class="max-w-[1204px] m-auto px-5 h-full py-5 md:py-40 mt-24 border-t-[#A09F9B] border-t-[1px] border-b-[1px] flex flex-col md:flex-row gap-4 justify-between items-center"
  >
    <div
      class="flex flex-col gap-4 bg-[#D9D9D9] rounded-[25px] border-[#212122] border w-full md:w-auto"
    >
      <NuxtImg
        src="/images/tola.png"
        class="w-full md:w-[446px] h-full"
        fit="cover"
      />
      <h2
        class="font-italiana text-[24px] md:text-[32px] px-[20px] md:px-[29px] pb-[20px] md:pb-[30px] font-light"
      >
        About Tola
      </h2>
    </div>
    <div class="flex flex-col gap-4 w-full md:w-1/2">
      <h2
        ref="splitText"
        class="font-inter italic text-[28px] md:text-[40px] font-[200] leading-[40px] md:leading-[70px]"
      >
        Tola is a spirited girl from Ajah, Lagos, who loves to share her
        thoughts on the everyday moments that inspire her.
      </h2>
      <NuxtLink
        to="/about"
        class="font-italiana text-[24px] md:text-[30px] font-light relative w-fit after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#212122] after:transition-all after:duration-300 hover:after:w-full"
      >
        Read more
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const splitText = ref(null);

onMounted(() => {
  const split = new SplitType(splitText.value, { types: "chars" });

  gsap.set(split.chars, { opacity: 0.2 });

  gsap.to(split.chars, {
    opacity: 1,
    stagger: 0.1,
    scrollTrigger: {
      trigger: splitText.value,
      start: "top center",
      end: "bottom center",
      scrub: 1,
      toggleActions: "play none none reverse",
    },
  });
});
</script>
