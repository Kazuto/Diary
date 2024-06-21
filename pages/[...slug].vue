<template>
  <article class="flex w-full flex-cool px-2 lg:px-0">
    <nuxt-link
      to="/"
      class="mb-4 inline-block text-primary-500 transition-colors hover:text-primary-700"
    >
      &larr; Back
    </nuxt-link>

    <div class="w-full flex-grow">
      <ContentDoc
        class="block w-full py-3 font-semibold transition-all"
      />
    </div>

    <div class="items-between flex w-full self-end pt-8">
      <NuxtLink
        v-if="prev"
        class="text-neutral-400 transition hover:text-primary-500"
        :to="prev._path"
      >
        &larr; {{ prev.title }}
      </NuxtLink>
      <span class="grow" />
      <NuxtLink
        v-if="next"
        class="text-neutral-400 transition hover:text-primary-500"
        :to="next._path"
      >
        {{ next.title }} &rarr;
      </NuxtLink>
    </div>
  </article>
</template>

<script setup lang="ts">
const { prev, next } = useContent();
const route = useRoute();

const category = computed(() => {
  return route.fullPath.split("/").filter((x) => x !== "")[0];
});
</script>

<style scoped></style>
