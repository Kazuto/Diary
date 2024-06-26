<template>
  <article class="flex w-full flex-col px-4 lg:px-0">
    <nuxt-link
      to="/"
      class="mb-4 inline-block text-primary-500 transition-colors hover:text-primary-700"
    >
      &larr; Startseite
    </nuxt-link>

    <div class="w-full flex-grow py-3">
      <h2 class="text-3xl mb-2" v-if="category != 'thoughts' ">
        {{ page.title }} 
      </h2>

      <ContentDoc
        class="block W-full font-semibold transition-all"
      />
    </div>

    <div class="items-between flex w-full self-end pt-8">
      <NuxtLink
        v-if="prev"
        class="text-neutral-400 transition hover:text-primary-500"
        :to="prev._path"
      >
        &larr; Zurück
      </NuxtLink>
      <span class="grow" />
      <NuxtLink
        v-if="next"
        class="text-neutral-400 transition hover:text-primary-500"
        :to="next._path"
      >
        Weiter &rarr;
      </NuxtLink>
    </div>
    
    {{ page._path }} 
  </article>
</template>

<script setup lang="ts">
const { page } = useContent();
const route = useRoute();

const [prev, next] = await queryContent()
  .only(['_path', 'title'])
  .sort({ created_at: 1})
  .findSurround(page._path)

const category = computed(() => {
  return route.fullPath.split("/").filter((x) => x !== "")[0];
});
</script>

<style scoped></style>
