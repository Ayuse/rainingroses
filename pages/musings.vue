<template>
  <div
    class="min-h-screen bg-[#E6E3DC] py-8 px-4 sm:px-6 lg:px-8 font-italiana"
  >
    <div class="max-w-3xl mx-auto">
      <!-- Header with consistent styling -->
      <div class="border-b border-gray-300 pb-4 mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Musings</h1>
        <p class="text-sm text-gray-500 mt-2">
          Thoughts, ideas, and random reflections
        </p>
      </div>

      <!-- Filter/sort options -->
      <div class="flex justify-between items-center mb-6">
        <div class="inline-flex rounded-md shadow-sm">
          <button
            class="px-4 py-2 text-sm font-medium text-indigo-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50"
          >
            Recent
          </button>
          <button
            class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border-t border-b border-r border-gray-300 hover:bg-gray-50"
          >
            Popular
          </button>
          <button
            class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border-t border-b border-r border-gray-300 rounded-r-md hover:bg-gray-50"
          >
            Favorites
          </button>
        </div>
        <div>
          <button
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white rounded-md border border-gray-300 shadow-sm hover:bg-gray-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
            Filter
          </button>
        </div>
      </div>

      <div class="grid gap-6">
        <PostCard v-for="post in displayedPosts" :key="post.id" :post="post" />

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

<script>
import postsData from "@/data/posts.json";
import PostCard from "@/components/PostCard.vue";

export default {
  name: "MusingsPage",
  components: {
    PostCard,
  },
  data() {
    return {
      allPosts: [],
      displayedPosts: [],
      currentPage: 1,
      postsPerPage: 4,
      isLoading: false,
      noMorePosts: false,
      observer: null,
    };
  },
  mounted() {
    // Initialize posts data
    this.allPosts = postsData;

    // Load initial posts
    this.loadMorePosts();

    // Set up intersection observer for infinite scroll
    this.setupIntersectionObserver();
  },
  beforeUnmount() {
    // Clean up the observer when component is destroyed
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    setupIntersectionObserver() {
      // Create a new IntersectionObserver
      this.observer = new IntersectionObserver(this.handleIntersection, {
        root: null, // Use viewport as root
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% of target is visible
      });

      // Start observing the target element
      if (this.$refs.observerTarget) {
        this.observer.observe(this.$refs.observerTarget);
      }
    },
    handleIntersection(entries) {
      // Check if target element is intersecting viewport
      if (entries[0].isIntersecting && !this.isLoading && !this.noMorePosts) {
        this.loadMorePosts();
      }
    },
    loadMorePosts() {
      // Simulate loading delay
      this.isLoading = true;

      setTimeout(() => {
        const startIndex = (this.currentPage - 1) * this.postsPerPage;
        const endIndex = startIndex + this.postsPerPage;
        const newPosts = this.allPosts.slice(startIndex, endIndex);

        // Add new posts to displayed posts
        if (newPosts.length > 0) {
          this.displayedPosts = [...this.displayedPosts, ...newPosts];
          this.currentPage += 1;
        } else {
          this.noMorePosts = true;
        }

        this.isLoading = false;
      }, 1000); // Simulate network delay
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
