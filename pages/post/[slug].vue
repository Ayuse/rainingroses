<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const POST_QUERY = groq`*[_type == "blogType" && slug.current == $slug][0]`;
const { params } = useRoute();
console.log("first");
const { data: post } = await useSanityQuery<SanityDocument>(POST_QUERY, params);
console.log(post);
const { projectId, dataset } = useSanity().client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;
</script>

<template>
  <div>
    <h1>Post</h1>
    <main
      v-if="post"
      class="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4"
    >
      <a href="/" class="hover:underline">&larr; Back to posts</a>
      <img
        v-if="post.image"
        :src="urlFor(post.image).width(550).height(310).url()"
        :alt="post?.title"
        class="aspect-video rounded-xl"
        width="550"
        height="310"
      />
      <h1 v-if="post.title" class="text-4xl font-bold mb-8">
        {{ post.title }}
      </h1>
      <div class="prose">
        <p v-if="post.publishedAt">
          Published: {{ new Date(post.publishedAt).toLocaleDateString() }}
        </p>
        <SanityContent v-if="post.body" :blocks="post.body" />
      </div>
    </main>
  </div>
</template>
