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
    <nav
      class="bottom-radius hidden md:flex justify-around text-[#000000] text-[20px] font-italiana max-w-[800px] m-auto nav-link fixed top-0 left-0 right-0 z-30 transition-transform duration-300 bg-[#E6E3DC] py-8"
      :class="{ 'translate-y-0': showNav, '-translate-y-full': !showNav }"
    >
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/diary">Fictional Diary</nuxt-link>
      <nuxt-link to="/musings">Musings</nuxt-link>
      <nuxt-link to="/vault">Book Vault</nuxt-link>
      <nuxt-link to="/about">About</nuxt-link>
    </nav>

    <!-- Page Content -->
    <div class="pt-20 md:pt-24">
      <slot />
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>
<script setup>
import gsap from "gsap";
import { ref, onMounted, onUnmounted } from "vue";

const isMenuOpen = ref(false);
const showNav = ref(true);
const lastScrollTop = ref(0);
const scrollThreshold = 50; // Minimum scroll amount before showing/hiding

const handleScroll = () => {
  const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

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
  const homeTl = gsap.timeline();

  homeTl.fromTo(
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
    },
    "4.2"
  );

  // Add scroll event listener
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  // Clean up scroll event listener
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style>
html {
  overflow: hidden;
  height: 100%;
}

body {
  height: 100%;
  overflow: auto;
}
.nav-link a {
  position: relative;
  text-decoration: none;
  opacity: 0;
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
