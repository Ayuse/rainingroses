<template>
  <div class="">
    <div class="bg-[#E6E3DC] m-auto px-5 md:px-10 h-full py-3 md:py-0 rounded-b-[30px] md:rounded-b-[60px]">
      <div class="max-w-[1200px] mx-auto">
        <div
          class="flex flex-col md:flex-row items-center justify-between mt-5 md:mt-[7rem]"
        >
          <div class="font-dancing text-[#212122] relative">
            <div
              class="absolute top-[-22px] w-[50px] h-[50px] md:w-[80px] md:h-[80px] right-0 md:right-5 rose-container"
            >
              <NuxtImg
                src="/images/rose.svg"
                class="home-header-img"
                fit="cover"
              />
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
          <div
            class="flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <NuxtLink to="/musings" class="block w-full">
              <div
                class="w-[100%] md:w-[385px] h-[463px] overflow-hidden md:mt-0 mt-5 rounded-lg relative page-card-container cursor-pointer"
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
            <NuxtLink to="/fictional" class="block w-full">
              <div
                class="w-[100%] md:w-[385px] h-[463px] overflow-hidden md:mt-0 mt-10 rounded-lg relative page-card-container cursor-pointer"
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
            <NuxtLink to="/vault" class="block w-full">
              <div
                class="w-[100%] md:w-[385px] h-[463px] overflow-hidden md:mt-0 mt-10 rounded-lg relative page-card-container cursor-pointer"
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
        <PagesView />
        <AboutHome />
      </div>
    </div>
  </div>
</template>
<script setup>
useHead({
  title: "Raining Roses",
  meta: [
    {
      name: "description",
      content: "Raining Roses is a personal blog by Tola.",
    },
  ],
});
import gsap from "gsap";
import { onMounted, ref } from "vue";
import SplitType from "split-type";
import { useNuxtApp } from "#app";

// Get the animation bus
const { $animBus } = useNuxtApp();

// Reference to control animation start
const canStartAnimation = ref(false);

// Animation setup function
const setupAnimation = () => {
  const homeTl = gsap.timeline({
    paused: true, // Start paused until we're ready to play
    onComplete: () => {
      // Emit event when home animation finishes
      $animBus.emit('homehero:complete');
    }
  });
  
  // Get current screen width
  const isMobile = window.innerWidth < 768; // Mobile breakpoint is typically 768px

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
    "0"
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
    "0.8"
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
    "0.8"
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
    "0.1"
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
    "0.3"
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
    "0.8"
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
    "1"
  );

  // Only run this animation on mobile screens
  if (isMobile) {
    homeTl.fromTo(
      pageSubheaders.words,
      {
        y: "100%",
        opacity: 0,
        filter: "blur(4px)",
      },
      {
        y: "0%",
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.05,
        duration: 0.7,
        ease: "power4.out",
      },
      "1"
    );
  }

  // Return the timeline for later use
  return homeTl;
};

// Method to start animation
const startHomeAnimation = () => {
  canStartAnimation.value = true;
  const homeTl = setupAnimation();
  homeTl.play();
};

// Make the function available to parent components
defineExpose({
  startHomeAnimation
});

onMounted(() => {
  // Preload animation setup - actual playback will be triggered by the parent
  if (canStartAnimation.value) {
    setupAnimation().play();
  }

  // Add resize listener to handle orientation changes
  const handleResize = () => {
    const currentIsMobile = window.innerWidth < 768;

    // If device switched to mobile and animation hasn't run
    if (currentIsMobile) {
      const pageSubheaders = document.querySelectorAll(".page-subheader .word");
      if (pageSubheaders.length > 0) {
        gsap.fromTo(
          pageSubheaders,
          {
            y: "100%",
            opacity: 0,
            filter: "blur(4px)",
          },
          {
            y: "0%",
            opacity: 1,
            filter: "blur(0px)",
            stagger: 0.05,
            duration: 0.7,
            ease: "power4.out",
          }
        );
      }
    }
  };

  window.addEventListener("resize", handleResize);

  // Clean up event listener
  return () => {
    window.removeEventListener("resize", handleResize);
  };
});

onMounted(async () => {
  const { gsap, ScrollTrigger } = await useGSAP();

  if (!ScrollTrigger) return; // Guard clause for SSR

  // Your ScrollTrigger animations...
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

  // Kill any existing animations
  gsap.killTweensOf([img, subheaderWords]);

  gsap.to(img, {
    scale: 1,
    duration: 0.3,
    ease: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    overwrite: true,
    force3D: true,
  });

  gsap.to(subheaderWords, {
    // y: "100%",
    opacity: 0,
    filter: "blur(4px)",
    duration: 0.3,
    stagger: -0.05,
    ease: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    overwrite: true,
    force3D: true,
  });
};
</script>

<style>
.rose-container,
.char,
.word {
  opacity: 0;
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
