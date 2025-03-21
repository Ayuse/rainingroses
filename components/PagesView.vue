<template>
  <div
    class="max-w-[1204px] m-auto px-5 py-5 mt-24 border-t-[#A09F9B] border-t-[1px] border-b-[1px] flex flex-col md:flex-row gap-4 hover:h-[800px] transition-all duration-300 page-view"
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
        class="w-full object-cover transition-all duration-300 image-reveal hover:h-[700px] h-[400px] md:h-[580px]"
      />
    </NuxtLink>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useGSAP } from "~/composables/useGSAP";

const pages = ref([]);

// Define the GROQ query to fetch the last three published posts
const POSTS_QUERY = groq`*[_type == "blogType"] | order(publishedAt desc)[0...3] {
  title,
  shortDescription,
  "slug": slug.current,
  "image": image.asset->url,
}`;

// Fetch posts using top-level await, similar to [slug].vue implementation
const { data: postsData } = await useSanityQuery(POSTS_QUERY);

console.log(postsData.value);
// Process the fetched data
onMounted(() => {
  try {
    pages.value = postsData.value.map((post) => ({
      title: post.title,
      subtitle: post.shortDescription || "",
      readTime: post.readTime || "3 min read",
      image: post.image || "/images/default.png",
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Error processing posts data:", error);
    pages.value = [];
  }
});

onMounted(async () => {
  const { gsap, ScrollTrigger } = await useGSAP();

  if (!ScrollTrigger) return; // Guard clause for SSR

  console.log("Component mounted, setting up ScrollTrigger");

  setTimeout(() => {
    const triggerElement = document.querySelector(".page-view");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page-view",
        start: "top +900",
        toggleActions: "play none none none",
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
        duration: 0.3,
        stagger: 0.1,
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
        duration: 0.3,
        stagger: 0.1,
        ease: "power2.inOut",
      }
    );

    ScrollTrigger.refresh();
  }, 100);
});
</script>

<style scoped>
.page-view {
  position: relative;
  width: 100%;
  /* min-height: 100vh; */
}

/* .image-reveal {
  visibility: hidden;
} */
</style>
