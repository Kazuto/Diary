<template>
  <article class="flex w-full flex-col px-4 lg:px-0">
    <nuxt-link
      to="/"
      class="mb-4 inline-block text-primary-500 transition-colors hover:text-primary-700"
    >
      &larr; Startseite
    </nuxt-link>

    <div class="w-full flex-grow py-3">
      <h2 v-if="category != 'thoughts'" class="mb-2 text-3xl">
        {{ page.title }}
      </h2>

      <ContentDoc class="W-full block font-semibold transition-all" />
    </div>

    <div class="items-between flex w-full self-end pt-8">
      <NuxtLink
        v-if="prev"
        class="text-neutral-400 transition hover:text-primary-500"
        :to="prev._path"
      >
        &larr; Vorheriger
      </NuxtLink>
      <span class="grow" />
      <NuxtLink
        v-if="next"
        class="text-neutral-400 transition hover:text-primary-500"
        :to="next._path"
      >
        Nächster &rarr;
      </NuxtLink>
    </div>
  </article>
</template>

<script setup lang="ts">
const { page } = useContent();
const { path } = useRoute();

const [prev, next] = await queryContent()
  .sort({ created_at: 1 })
  .findSurround(path);

const category = computed(() => {
  return path.split("/").filter((x) => x !== "")[0];
});
</script>

<style scoped></style>
