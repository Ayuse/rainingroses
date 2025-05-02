<template>
  <div
    class="min-h-screen bg-[#E6E3DC] py-[8rem] px-4 sm:px-6 lg:px-8 font-italiana"
  >
    <div class="max-w-3xl mx-auto">
      <!-- Header with consistent styling -->
      <div class="border-b border-gray-300 pb-4 mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Diary</h1>
        <p class="text-sm text-gray-500 mt-2">
          Thoughts, ideas, and random reflections
        </p>
      </div>


      <div class="grid gap-6">
        <PostCard v-for="post in displayedPosts" :key="post.slug" :post="post" />

        <!-- Loading indicator -->
        <div v-if="isLoading" class="flex justify-center items-center py-4">
          <div
            class="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"
          ></div>
        </div>

        <!-- End of content indicator -->
        <div
          v-if="noMorePosts && displayedPosts.length > 0"
          class="text-center py-4"
        >
          <p class="text-gray-500 text-sm font-medium">
            You've reached the end of the content
          </p>
          <button
            @click="scrollToTop"
            class="mt-2 px-4 py-2 text-sm font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Back to top
          </button>
        </div>

        <!-- Intersection observer target -->
        <div ref="observerTarget" class="h-4"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import PostCard from "@/components/PostCard.vue";

// Define the GROQ query to fetch posts with musings tag
const MUSINGS_QUERY = groq`*[_type == "blogType" && "musings" in tags] | order(publishedAt desc) {
  title,
  shortDescription,
  "slug": slug.current,
  "image": image.asset->url,
  publishedAt,
  readTime
}`;

// Data reactive properties
const allPosts = ref([]);
const displayedPosts = ref([]);
const currentPage = ref(1);
const postsPerPage = ref(4);
const isLoading = ref(false);
const noMorePosts = ref(false);
const observer = ref(null);
const observerTarget = ref(null);

// Fetch posts from Sanity
const { data: postsData } = await useSanityQuery(MUSINGS_QUERY);

// Process the fetched data
onMounted(() => {
  try {
    allPosts.value = postsData.value.map((post) => ({
      title: post.title,
      subtitle: post.shortDescription || '',
      readTime: post.readTime || '3 min read',
      image: post.image || '/images/default.png',
      slug: post.slug,
      publishedAt: post.publishedAt,
    }));
    
    // Load initial posts
    loadMorePosts();
    
    // Set up intersection observer for infinite scroll
    setupIntersectionObserver();
  } catch (error) {
    console.error('Error processing posts data:', error);
    allPosts.value = [];
  }
});

onBeforeUnmount(() => {
  // Clean up the observer when component is destroyed
  if (observer.value) {
    observer.value.disconnect();
  }
});

function setupIntersectionObserver() {
  // Create a new IntersectionObserver
  observer.value = new IntersectionObserver(handleIntersection, {
    root: null, // Use viewport as root
    rootMargin: "0px",
    threshold: 0.1, // Trigger when 10% of target is visible
  });

  // Start observing the target element
  if (observerTarget.value) {
    observer.value.observe(observerTarget.value);
  }
}

function handleIntersection(entries) {
  // Check if target element is intersecting viewport
  if (entries[0].isIntersecting && !isLoading.value && !noMorePosts.value) {
    loadMorePosts();
  }
}

function loadMorePosts() {
  // Set loading state
  isLoading.value = true;

  setTimeout(() => {
    const startIndex = (currentPage.value - 1) * postsPerPage.value;
    const endIndex = startIndex + postsPerPage.value;
    const newPosts = allPosts.value.slice(startIndex, endIndex);

    // Add new posts to displayed posts
    if (newPosts.length > 0) {
      displayedPosts.value = [...displayedPosts.value, ...newPosts];
      currentPage.value += 1;
    } else {
      noMorePosts.value = true;
    }

    isLoading.value = false;
  }, 300); // Reduced simulation delay
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
</script>
