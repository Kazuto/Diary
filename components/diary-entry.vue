<template>
  <NuxtLink :to="doc._path"
    class="hover:bg-secondary-100/[0.05] hover:shadow-lg hover:-translate-y-1 duration-250 block rounded-lg border border-black/30 bg-secondary-100/[0.025] px-4 py-3 font-semibold shadow-md shadow-gray-900/10 ring-inset ring-white/5 transition-all dark:ring-1">
    <h1 class="text-3xl font-bold mb-0">{{ doc.title }}</h1>

    <p v-if="doc.description" class="text-neutral-400 my-2">{{ doc.description }}</p>

    <span class="block text-white/40 text-sm text-right">
      {{ $formatter.date(doc.gitCreatedAt) || $formatter.date(doc.created_at) }}
    </span>
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
