<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { gsap } from "gsap";
import { onMounted, ref } from "vue";
import { formatDistance } from "date-fns";

const POST_QUERY = groq`*[_type == "blogType" && slug.current == $slug][0]`;
const { params } = useRoute();
const { data: post } = await useSanityQuery<SanityDocument>(POST_QUERY, params);
const { projectId, dataset } = useSanity().client.config();

const mainContent = ref<HTMLElement | null>(null);
const contentElements = ref<HTMLElement[]>([]);
const contentVisible = ref(false);

const urlFor = (source: SanityImageSource) => {
  if (!projectId || !dataset) return null;
  return imageUrlBuilder({ projectId, dataset }).image(source);
};

// Function to format date as relative time (e.g. "2 days ago")
const getRelativeTime = (date: string) => {
  return formatDistance(new Date(date), new Date(), { addSuffix: true });
};

onMounted(() => {
  setTimeout(() => {
    contentVisible.value = true;
  }, 1000);

  if (mainContent.value) {
    contentElements.value = Array.from(
      mainContent.value.children
    ) as HTMLElement[];

    if (contentElements.value.length > 0) {
      try {
        gsap.set(contentElements.value, {
          opacity: 0,
          y: 30,
        });

        gsap.to(contentElements.value, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          onComplete: () => {
            contentVisible.value = true;
          },
        });
      } catch (error) {
        console.error("Animation error:", error);
        contentVisible.value = true;
      }
    } else {
      contentVisible.value = true;
    }
  } else {
    contentVisible.value = true;
  }
});
</script>

<template>
  <div class="bg-gray-50 min-h-screen">
    <main
      v-if="post"
      ref="mainContent"
      class="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-6"
      :class="{ 'force-visible': contentVisible }"
    >
      <!-- <a
        href="/"
        class="text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1 w-fit"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clip-rule="evenodd"
          />
        </svg>
        Back to posts
      </a> -->

      <div
        v-if="post.image && urlFor(post.image)"
        class="overflow-hidden rounded-xl shadow-lg"
      >
        <img
          :src="urlFor(post.image)?.width(800).height(450).url()"
          :alt="post?.title"
          class="w-full object-cover aspect-video"
          width="800"
          height="450"
        />
      </div>

      <div class="flex flex-col gap-2">
        <h1
          v-if="post.title"
          class="text-4xl font-bold text-gray-800 font-italiana"
        >
          {{ post.title }}
        </h1>
        <p v-if="post.publishedAt" class="text-gray-500">
          {{ getRelativeTime(post.publishedAt) }}
        </p>
      </div>

      <div
        class="prose prose-lg max-w-none bg-white p-8 rounded-xl shadow-sm flex flex-col gap-4"
      >
        <SanityContent v-if="post.content" :blocks="post.content" />
      </div>
    </main>
  </div>
</template>

<style scoped>
.prose {
  @apply text-gray-700;
}

.prose h2 {
  @apply text-2xl font-semibold text-gray-800 mt-8 mb-4;
}

.prose p {
  @apply my-4 leading-relaxed;
}

.prose a {
  @apply text-indigo-600 hover:text-indigo-800 transition-colors;
}

.prose ul,
.prose ol {
  @apply my-4 ml-6;
}

.prose li {
  @apply mb-2;
}

.prose img {
  @apply rounded-lg shadow-sm my-6;
}

.prose blockquote {
  @apply border-l-4 border-indigo-200 pl-4 italic text-gray-600 my-6;
}

.force-visible,
.force-visible * {
  opacity: 1 !important;
  transform: none !important;
}
</style>
