<template>
  <article>
    <nuxt-link
      to="/"
      class="mb-4 inline-block text-primary-500 transition-colors hover:text-primary-700"
    >
      &larr; Back
    </nuxt-link>

    <ContentDoc
      class="duration-250 block rounded-lg border border-black/30 bg-secondary-100/[0.025] px-4 py-3 font-semibold shadow-md shadow-gray-900/10 ring-inset ring-white/5 transition-all dark:ring-1"
    />

    <div class="items-between flex pt-8">
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
</script>
