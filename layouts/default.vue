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
          class="absolute top-4 right-4 text-black"
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
      class="hidden md:flex justify-around text-[#000000] text-[20px] font-italiana max-w-[800px] m-auto pt-8 nav-link"
    >
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/diary">Fictional Diary</nuxt-link>
      <nuxt-link to="/musings">Musings</nuxt-link>
      <nuxt-link to="/vault">Book Vault</nuxt-link>
      <nuxt-link to="/about">About</nuxt-link>
    </nav>

    <!-- Page Content -->
    <slot />

    <!-- Footer -->
    <Footer />
  </div>
</template>
<script setup>
import gsap from "gsap";
import { ref, onMounted } from "vue";

const isMenuOpen = ref(false);

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
});
</script>

<style>
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
</style>
