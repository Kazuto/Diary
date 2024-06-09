<template>
  <NuxtLink
    :to="doc._path"
    class="duration-250 block rounded-lg border border-black/30 bg-secondary-100/[0.025] px-4 py-3 font-semibold shadow-md shadow-gray-900/10 ring-inset ring-white/5 transition-all dark:ring-1"
  >
    <h1 class="text-2xl font-bold">{{ doc.title }}</h1>

    <p>{{ doc.gitCreatedAt || doc.createdAt }}</p>

    <p>{{ doc.description }}</p>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  doc: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style scoped></style>
