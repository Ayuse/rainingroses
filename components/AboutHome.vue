<template>
  <div class="about h-screen">
    <div class="about-container max-w-[1282px] w-[95%] mx-auto">
      <div
        class="m-auto px-3 md:px-5 py-5 md:py-40 mt-12 md:mt-24 border-t-[#A09F9B] border-t-[1px] border-b-[1px] border-b-[#A09F9B] flex flex-col md:flex-row gap-4 justify-between items-center"
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

  let wordScroll = gsap.timeline({});

  wordScroll.to(split.chars, {
    opacity: 1,
    stagger: 0.5,
  });

  // Responsive scroll settings
  const mediaQuery = window.matchMedia("(max-width: 768px)");

  function createScrollTriggers() {
    // Clear existing scroll triggers
    ScrollTrigger.getAll().forEach((st) => st.kill());

    // Text animation scroll trigger
    ScrollTrigger.create({
      trigger: ".about",
      start: "top top",
      end: mediaQuery.matches ? "+=400" : "+=900",
      animation: wordScroll,
      scrub: 1,
    });

    // Pin container scroll trigger
    ScrollTrigger.create({
      trigger: ".about",
      start: "top top",
      end: mediaQuery.matches ? "+=800" : "+=1000",
      pin: ".about",
      pinSpacing: true,
      scrub: 1,
    });
  }

  // Initial creation
  createScrollTriggers();

  // Update on resize
  mediaQuery.addEventListener("change", createScrollTriggers);
});
</script>

<style scoped>
/* .about {
  place-self: auto;
  grid-area: auto;
  z-index: auto;
  float: none;
  flex-shrink: 1;
  display: flex;
  margin: 0 auto;
  position: relative;
  overflow: visible;
  box-sizing: border-box;
  width: 100%;
  max-width: 1282px;
  height: 1924;
  padding: 0 0 clamp(300px, 50vh, 900px);
} */

/* @media (max-width: 768px) {
  .about {
    padding: 0 0 300px;
  }
} */
</style>

<script>
// ScrollTrigger.create({
//   trigger: ".ffw",
//   start: "center center",
//   end: "+=2000",
//   pin: ".hero_contentended",
//   pinSpacing: true, // set to false
//   animation: wordScroll,
//   scrub: 1,
// });
</script>
