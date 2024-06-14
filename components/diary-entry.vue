<template>
  <NuxtLink
    :to="doc._path"
    class="duration-250 block rounded-lg border border-black/30 bg-secondary-100/[0.025] px-4 py-3 font-semibold shadow-md shadow-gray-900/10 ring-inset ring-white/5 transition-all hover:-translate-y-0.5 hover:bg-secondary-100/[0.05] hover:shadow-md dark:ring-1"
    :class="{
      'bg-primary-500/[0.01] ring-primary-100/10': category === 'diary',
    }"
  >
    <span class="block text-xs text-white/40">
      {{ $formatter.date(doc.created_at) }}
    </span>
    <p v-if="doc.description" class="my-2 text-neutral-400">
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
