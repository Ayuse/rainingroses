<template>
  <div class="h-full bg-[#E6E3DC] relative isolate">
    <!-- Mobile Menu Overlay -->
    <div
      class="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
      :class="isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'"
      @click="isMenuOpen = false"
    ></div>

    <!-- Mobile Navigation -->
    <div
      class="fixed top-0 left-0 h-full w-3/4 max-w-[300px] bg-[#E6E3DC] z-50 transform transition-transform duration-300 ease-in-out shadow-xl"
      :class="isMenuOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <div class="p-6">
        <button
          @click="isMenuOpen = false"
          class="absolute top-4 right-4 text-black flex items-center justify-center w-full"
        >
          <div
            class="font-dancing mx-auto relative text-center w-[fit-content]"
            data-scroll
            data-scroll-speed="1"
          >
            <div
              class="w-[50px] h-[50px] md:w-[80px] md:h-[80px] right-0 md:right-5"
            >
              <NuxtImg
                src="/images/rose.svg"
                class="home-header-img"
                fit="cover"
              />
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div
          class="flex flex-col space-y-6 mt-12 font-italiana text-[24px] mobile-nav-link"
        >
          <nuxt-link to="/" @click="isMenuOpen = false">Home</nuxt-link>
          <nuxt-link to="/diary" @click="isMenuOpen = false"
            >Fictional Diary</nuxt-link
          >
          <nuxt-link to="/musings" @click="isMenuOpen = false"
            >Musings</nuxt-link
          >
          <nuxt-link to="/vault" @click="isMenuOpen = false"
            >Book Vault</nuxt-link
          >
          <nuxt-link to="/about" @click="isMenuOpen = false">About</nuxt-link>
        </div>
      </div>
    </div>

    <!-- Hamburger Menu Button (Mobile Only) -->
    <button
      @click="isMenuOpen = !isMenuOpen"
      class="fixed top-6 left-6 z-30 md:hidden"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>

    <!-- Desktop Navigation -->
    <div class="bg-[#E6E3DC]">
    <nav
      class="rounded-[30px] md:rounded-[60px] hidden md:flex justify-around text-[#000000] text-[20px] font-italiana max-w-[800px] m-auto nav-link fixed top-5 left-0 right-0 z-30 transition-transform duration-300 py-4 border border-[#f3f3f3]"
      :class="{ 'translate-y-0': showNav, '-translate-y-full': !showNav }"
    >
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/diary">Fictional Diary</nuxt-link>
      <nuxt-link to="/musings">Musings</nuxt-link>
      <nuxt-link to="/vault">Book Vault</nuxt-link>
      <nuxt-link to="/about">About</nuxt-link>
      <div class="w-full h-full absolute top-0 left-0 blur-sm z-[-1]"></div>
    </nav>
    </div>
    <!-- Page Content -->
    <div class="bg-[#212122]">
      <slot />
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>
<script setup>
import gsap from "gsap";
import { ref, onMounted, onUnmounted } from "vue";
import { useNuxtApp } from "#app";

const isMenuOpen = ref(false);
const showNav = ref(true);
const lastScrollTop = ref(0);
const scrollThreshold = 50; // Minimum scroll amount before showing/hiding

// Reference to control whether navigation animation should be played
const navAnimationPlayed = ref(false);

// Get the animation bus
const { $animBus, $lenis } = useNuxtApp();

// Function to start nav animation
const startNavAnimation = () => {
  if (navAnimationPlayed.value) return;
  
  const navTl = gsap.timeline();
  navTl.fromTo(
    ".nav-link a",
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
    }
  );
  
  navAnimationPlayed.value = true;
};

const handleScroll = () => {
  // Get scroll position from Lenis if available, otherwise use window
  const lenis = $lenis();
  const currentScrollTop = lenis ? lenis.scroll : (window.scrollY || document.documentElement.scrollTop);

  // Check if we've scrolled past threshold
  if (Math.abs(currentScrollTop - lastScrollTop.value) > scrollThreshold) {
    // Scrolling down
    if (currentScrollTop > lastScrollTop.value) {
      showNav.value = false;
    }
    // Scrolling up
    else {
      showNav.value = true;
    }
    lastScrollTop.value = currentScrollTop;
  }

  // Always show nav at the top of the page
  if (currentScrollTop <= 10) {
    showNav.value = true;
  }
};

onMounted(() => {
  // Listen for the completion of HomeHero animation to start nav animation
  $animBus.on('homehero:complete', startNavAnimation);
  
  // If using Lenis, subscribe to its scroll event
  const lenis = $lenis();
  if (lenis) {
    lenis.on('scroll', handleScroll);
  } else {
    // Fallback to window scroll events if Lenis is not available
    window.addEventListener("scroll", handleScroll, { passive: true });
  }
});

onUnmounted(() => {
  // Clean up event listeners
  $animBus.off('homehero:complete', startNavAnimation);
  
  const lenis = $lenis();
  if (lenis) {
    lenis.off('scroll', handleScroll);
  } else {
    window.removeEventListener("scroll", handleScroll);
  }
});
</script>

<style>
.nav-link::before{
  content: '';
    display: inline-block;
    position: absolute;
    inset: 0%;
    z-index: -2;
    backdrop-filter: blur(10px);
    border-radius: inherit;
}
.nav-link::after{
  content: '';
  position: absolute;
  inset: 0%;
  background-color:#e6e3dc;
  opacity: 0.35;
  border-radius: inherit;

  z-index: -1;
}
html, body {
  min-height: 100%;
}

body {
  overflow: auto;
}
.nav-link a {
  position: relative;
  text-decoration: none;
  /* opacity: 0; */
}

.mobile-nav-link a {
  position: relative;
  text-decoration: none;
}

.mobile-nav-link a::after {
  content: "";
  position: absolute;
  width: 0;
  height: 3px;
  bottom: -4px;
  left: 0;
  background-color: #dbc9bd;
  transition: width 0.3s ease;
}

.mobile-nav-link a:hover::after {
  width: 100%;
}

.rose-container,
.char,
.word {
  opacity: 0;
}
.nav-link a::after {
  content: "";
  position: absolute;
  width: 0;
  height: 3px;
  bottom: -4px;
  left: 0;
  background-color: #dbc9bd;
  transition: width 0.3s ease;
}



.nav-link a:hover::after {
  width: 100%;
}

body.menu-open {
  overflow: hidden;
}
.bottom-radius {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
</style>
