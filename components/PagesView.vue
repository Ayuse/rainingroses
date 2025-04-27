<template>
  <div
    class="max-w-[1204px] m-auto px-5 py-8 mt-14 md:mt-24 border-t-[#A09F9B] border-t-[1px] border-b-[1px] transition-all duration-300 page-view"
  >
    <swiper
      :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]"
      :slides-per-view="1" 
      :breakpoints="{
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 24
        }
      }"
      :autoplay="{ delay: 4000, disableOnInteraction: false }"
      :pagination="{ clickable: true }"
      :loop="true"
      class="w-full"
    >
      <swiper-slide v-for="(page, index) in pages" :key="index" class="flex-1">
        <NuxtLink
          :to="`/post/${page.slug}`"
          class="block"
        >
          <div class="flex flex-col mb-2">
            <h2 class="font-italiana font-light text-2xl sm:text-3xl text-[#3c3c3c]">{{ page.title }}</h2>
            <p class="font-inter text-xs sm:text-sm font-light italic text-[#767676] mt-1">
              {{ page.subtitle }}
            </p>
          </div>
          <div class="flex justify-end mb-3">
            <h3 class="font-inter text-xs sm:text-sm font-light italic text-[#767676]">
              {{ page.readTime }}
            </h3>
          </div>
          <div class="overflow-hidden h-[250px] sm:h-[300px] hover:rounded-[8px]">
            <NuxtImg
              :src="page.image"
              class="w-full object-cover h-full transition-all duration-300 image-reveal hover:scale-[1.05]"
              loading="lazy"
            />
          </div>
        </NuxtLink>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useGSAP } from '~/composables/useGSAP';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectCreative, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

const SwiperAutoplay = Autoplay;
const SwiperEffectCreative = EffectCreative;
const SwiperPagination = Pagination;
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

// Process the fetched data
onMounted(() => {
  try {
    pages.value = postsData.value.map((post) => ({
      title: post.title,
      subtitle: post.shortDescription || 'The weight of a lifetime',
      readTime: post.readTime || '3 min read',
      image: post.image || '/images/default.png',
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Error processing posts data:', error);
    pages.value = [];
  }
});

onMounted(async () => {
  const { gsap, ScrollTrigger } = await useGSAP();

  if (!ScrollTrigger) return; // Guard clause for SSR

  setTimeout(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.page-view',
        start: 'top +900',
        toggleActions: 'play none none none',
      },
    });

    tl.fromTo(
      '.image-reveal',
      {
        clipPath: 'inset(100% 0 0 0)',
        opacity: 0,
      },
      {
        clipPath: 'inset(0)',
        opacity: 1,
        duration: 0.3,
        stagger: 0.3,
        ease: 'power2.inOut',
      }
    ).fromTo(
      ['.page-view h2', '.page-view h3', '.page-view p'],
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: 'power2.inOut',
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
}

:deep(.swiper-pagination-bullet) {
  background-color: #A09F9B;
  opacity: 0.7;
  margin: 0 4px;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: #A09F9B;
  opacity: 1;
}

:deep(.swiper) {
  padding-bottom: 40px;
}

:deep(.swiper-pagination) {
  bottom: 0;
}
</style>
