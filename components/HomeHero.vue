<template>
  <div class="max-w-[1204px] m-auto px-5 h-full py-5 md:py-0">
    <nav
      class="hidden md:flex justify-around text-[#000000] text-[20px] font-italiana max-w-[800px] m-auto pt-8 nav-links"
    >
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/diary">Fictional Diary</nuxt-link>
      <nuxt-link to="/musings">Musings</nuxt-link>
      <nuxt-link to="/vault">Book Vault</nuxt-link>
      <nuxt-link to="/about">About</nuxt-link>
    </nav>

    <div class="flex flex-col md:flex-row items-center justify-between mt-20">
      <div class="font-dancing text-[#212122] relative">
        <div
          class="absolute top-[-22px] w-[50px] h-[50px] md:w-[80px] md:h-[80px] right-0 md:right-5 rose-container"
        >
          <NuxtImg src="/images/rose.svg" class="home-header-img" fit="cover" />
        </div>
        <div class="overflow-hidden text-[clamp(48px,8vw,96px)]">
          <h1 class="home-header">Raining Roses</h1>
        </div>
        <div class="overflow-hidden">
          <h2
            class="home-subheader font-italiana text-[clamp(16px,2vw,24px)] text-end"
          >
            A PERSONAL BLOG
          </h2>
        </div>
      </div>
      <div
        class="w-[80%] md:w-[50%] overflow-hidden rounded-full md:mt-0 mt-10"
      >
        <NuxtImg
          src="/images/bg-hero.png"
          class="home-header-img w-full h-full rose-bg"
          fit="cover"
        />
      </div>
    </div>

    <div class="mt-20">
      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <NuxtLink to="/musings" class="block">
          <div
            class="w-[412px] md:w-[385px] h-[463px] overflow-hidden md:mt-0 mt-10 rounded-lg relative page-card-container cursor-pointer"
            @mouseenter="handleMouseEnter"
            @mouseleave="handleMouseLeave"
          >
            <div
              class="absolute top-0 left-0 w-full h-full bg-black/20 hpi-overlay z-10"
            ></div>
            <div
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col z-20"
            >
              <div class="overflow-hidden">
                <h2
                  class="text-[96px] font-italiana text-white page-title flex items-center h-[120px]"
                >
                  Musings
                </h2>
              </div>
              <div class="overflow-hidden">
                <h3
                  class="text-[16px] font-inter italic font-light text-white page-subheader"
                >
                  Fleeting thoughts, insights, and moments of inspirations.
                </h3>
              </div>
            </div>

            <NuxtImg
              src="/images/musings.jpeg"
              class="home-page-img w-full h-full"
              fit="cover"
            />
          </div>
        </NuxtLink>
        <NuxtLink to="/fictional" class="block">
          <div
            class="w-[412px] md:w-[385px] h-[463px] overflow-hidden md:mt-0 mt-10 rounded-lg relative page-card-container cursor-pointer"
            @mouseenter="handleMouseEnter"
            @mouseleave="handleMouseLeave"
          >
            <div
              class="absolute top-0 left-0 w-full h-full bg-black/20 hpi-overlay z-10"
            ></div>
            <div
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col z-20"
            >
              <div class="overflow-hidden">
                <h2
                  class="text-[96px] font-italiana text-white page-title flex items-center h-[120px]"
                >
                  Fictional
                </h2>
              </div>
              <div class="overflow-hidden">
                <h3
                  class="text-[16px] font-inter italic font-light text-white page-subheader"
                >
                  A collection of my thoughts and reflections
                </h3>
              </div>
            </div>
            <NuxtImg
              src="/images/fictional.jpeg"
              class="home-page-img w-full h-full"
              fit="cover"
            />
          </div>
        </NuxtLink>
        <NuxtLink to="/vault" class="block">
          <div
            class="w-[412px] md:w-[385px] h-[463px] overflow-hidden md:mt-0 mt-10 rounded-lg relative page-card-container cursor-pointer"
            @mouseenter="handleMouseEnter"
            @mouseleave="handleMouseLeave"
          >
            <div
              class="absolute top-0 left-0 w-full h-full bg-black/20 hpi-overlay z-10"
            ></div>
            <div
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col z-20"
            >
              <div class="overflow-hidden">
                <h2
                  class="text-[96px] font-italiana text-white page-title flex items-center h-[120px]"
                >
                  Vault
                </h2>
              </div>
              <div class="overflow-hidden">
                <h3
                  class="text-[16px] font-inter italic font-light text-white page-subheader"
                >
                  A collection of my thoughts and reflections
                </h3>
              </div>
            </div>
            <NuxtImg
              src="/images/vault.jpeg"
              class="home-page-img w-full h-full"
              fit="cover"
            />
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import gsap from "gsap";
import { onMounted } from "vue";
import SplitType from "split-type";

onMounted(() => {
  const homeTl = gsap.timeline();

  homeTl.fromTo(
    ".nav-links a",
    {
      y: -20,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 3,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
    },
    "4.2"
  );
  homeTl.fromTo(
    ".rose-container",
    {
      y: -20,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 3,
      duration: 0.5,
      ease: "power2.out",
    },
    "5"
  );
  homeTl.fromTo(
    ".rose-bg",
    {
      scale: 1.5,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    },
    "5"
  );
  homeTl.fromTo(
    [".home-page-img", ".hpi-overlay"],
    {
      scale: 1.2,
      opacity: 0,
    },
    {
      scale: 1,
      stagger: 0.1,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    },
    "5"
  );

  // Split text using SplitType instead of SplitText
  const headerText = new SplitType(".home-header", { types: "chars" });
  const subheaderText = new SplitType(".home-subheader", { types: "words" });
  const pageTitles = new SplitType(".page-title", { types: "chars" });
  const pageSubheaders = new SplitType(".page-subheader", { types: "words" });
  homeTl.fromTo(
    headerText.chars,
    {
      y: "100%",
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.05,
      ease: "power2.inOut",
    },
    "4.3"
  );

  homeTl.fromTo(
    subheaderText.words,
    {
      y: "100%",
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.03,
      ease: "power2.inOut",
    },
    "4.5"
  );
  homeTl.fromTo(
    pageTitles.chars,
    {
      y: "100%",
      opacity: 0,
    },
    {
      y: "0%",
      opacity: 1,
      stagger: 0.05,
      duration: 0.7,
      ease: "power4.out",
    },
    "5.2"
  );
});

const handleMouseEnter = (event) => {
  const img = event.currentTarget.querySelector(".home-page-img");
  const subheaderWords = event.currentTarget.querySelectorAll(
    ".page-subheader .word"
  );

  gsap.to(img, {
    scale: 1.1,
    duration: 0.3,
    ease: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  });

  gsap.to(subheaderWords, {
    // y: "0%",
    opacity: 1,
    filter: "blur(0px)",
    duration: 0.3,
    stagger: 0.05,
    ease: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  });
};

const handleMouseLeave = (event) => {
  const img = event.currentTarget.querySelector(".home-page-img");
  const subheaderWords = event.currentTarget.querySelectorAll(
    ".page-subheader .word"
  );

  gsap.to(img, {
    scale: 1,
    duration: 0.3,
    ease: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  });

  gsap.to(subheaderWords, {
    // y: "100%",
    opacity: 0,
    filter: "blur(4px)",
    duration: 0.3,
    stagger: -0.05,
    ease: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  });
};
</script>

<style>
.nav-links a {
  position: relative;
  text-decoration: none;
  opacity: 0;
}

.rose-container,
.char,
.word {
  opacity: 0;
}
.nav-links a::after {
  content: "";
  position: absolute;
  width: 0;
  height: 3px;
  bottom: -4px;
  left: 0;
  background-color: #dbc9bd;
  transition: width 0.3s ease;
}

.nav-links a:hover::after {
  width: 100%;
}
/* .page-subheader {
  display: none;
} */

.page-card-container .home-page-img {
  transform: scale(1);
}

.page-subheader .word {
  filter: blur(4px);
}
</style>
