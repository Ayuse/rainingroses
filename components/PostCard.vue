<template>
  <div
    class="bg-white rounded-lg overflow-hidden shadow-md mb-6 transition-shadow duration-300 hover:shadow-lg"
  >
    <!-- Post image -->
    <div class="w-full h-64 overflow-hidden relative group">
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
    <div class="p-4">
      <!-- Author section -->
      <div class="flex items-center mb-4">
        <div
          class="w-10 h-10 rounded-full bg-gray-300 overflow-hidden mr-3 ring-2 ring-indigo-500 ring-opacity-0 hover:ring-opacity-100 transition-all duration-300"
        >
          <!-- Avatar placeholder - could be replaced with actual user image -->
          <div
            class="w-full h-full flex items-center justify-center text-white bg-indigo-500"
          >
            {{ post.author.charAt(0) }}
          </div>
        </div>
        <div>
          <div
            class="text-sm font-medium text-gray-900 hover:text-indigo-500 transition-colors duration-300 cursor-pointer"
          >
            {{ post.author }}
          </div>
          <div class="text-xs text-gray-500">{{ post.date }}</div>
        </div>
        <!-- Three dots menu -->
        <div class="ml-auto">
          <button
            class="text-gray-500 hover:text-indigo-500 transition-colors duration-300 p-1 rounded-full hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Post title and description -->
      <h2
        class="text-xl font-bold mb-2 text-gray-900 hover:text-indigo-500 transition-colors duration-300 cursor-pointer"
      >
        {{ post.title }}
      </h2>
      <p class="text-gray-700 mb-4">{{ post.description }}</p>

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
          <span>{{ post.views }} views</span>
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
            <span class="ml-1">{{ post.likes }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
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
