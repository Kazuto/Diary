<template>
  <article class="flex w-full flex-col">
    <nuxt-link
      to="/"
      class="mb-4 inline-block text-primary-500 transition-colors hover:text-primary-700"
    >
      &larr; Back
    </nuxt-link>

    <div class="w-full flex-grow">
      <ContentDoc
        class="duration-250 block w-full rounded-lg border border-black/30 bg-secondary-100/[0.025] px-4 py-3 font-semibold shadow-md shadow-gray-900/10 ring-inset ring-white/5 transition-all dark:ring-1"
        :class="{
          'bg-red-500/[0.02] ring-red-700/10': category == 'thoughts',
        }"
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
