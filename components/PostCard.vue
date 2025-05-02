<template>
  <NuxtLink
    :to="`/post/${post.slug}`"
    class="bg-white/50 rounded-lg overflow-hidden mb-6 transition-shadow duration-300 hover:shadow-lg flex h-[350px]"
  >
    <!-- Post image -->
    <div class="overflow-hidden relative group w-[60%]">
      <img
        :src="post.image"
        :alt="post.title"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div
        class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"
      ></div>
    </div>

    <!-- Post content -->
    <div class="p-6 w-[50%] pt-32 md:pl-12 pl-4">

      <!-- Post title and description -->
      <h2
        class="text-3xl font-bold mb-2 text-gray-900 cursor-pointer"
      >
        {{ post.title }}
      </h2>
      <p class="text-gray-700 mb-4 text-lg">{{ post.description || post.subtitle || '' }}</p>

      <!-- Post stats -->
      <div class="flex items-center text-sm text-gray-500 border-t pt-3">
        <div class="flex items-center">
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
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          <span>{{ post.views || 0 }} views</span>
        </div>
        <div class="ml-auto flex items-center">
          <button
            class="flex items-center text-gray-500 hover:text-red-500 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="ml-1">{{ post.likes || 0 }}</span>
          </button>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: "PostCard",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>
