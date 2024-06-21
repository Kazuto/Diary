<template>
  <NuxtLink
    :to="doc._path"
    class="duration-250 block rounded-lg border border-black/30 px-4 py-3 font-semibold shadow-md shadow-gray-900/10 ring-inset transition-all hover:-translate-y-0.5 hover:shadow-md dark:ring-1"
    :class="{
      'bg-secondary-100/[0.025] ring-white/5 hover:bg-secondary-100/[0.05]':
        category != 'thoughts',
      'bg-red-500/[0.02] ring-red-700/10 hover:bg-red-500/[0.05]':
        category == 'thoughts',
    }"
  >
<div class="flex items-start mb-1">
<h2 class="text-xl">
{{ doc.title}} 
</h2>
    <span class="block shrink-0 text-xs text-white/40 text-right">
      {{ $formatter.date(doc.created_at) }}
    </span>
</div>

    <p v-if="doc.description" class="text-neutral-400">
      {{ doc.description }}
    </p>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
  doc: {
    type: Object,
    default: () => ({}),
  },
});

const category = computed(() => {
  return props.doc._path.split("/").filter((x) => x !== "")[0];
});
</script>

<style scoped></style>
