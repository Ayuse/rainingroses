<template>
  <div class="h-full bg-[#E6E3DC] relative isolate">
    <!-- Navigation -->
    <nav
      class="flex justify-around text-[#000000] text-[20px] font-italiana max-w-[800px] m-auto pt-8 nav-link"
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
</style>
