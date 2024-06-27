<template>
  <NuxtLink
    :to="doc._path"
    class="duration-250 block rounded-lg border border-black/30 px-4 py-3 font-semibold shadow-md shadow-gray-900/10 ring-inset ring-white/5 transition-all hover:-translate-y-0.5 hover:shadow-md dark:ring-1"
    :class="{
      'bg-secondary-100/10': category != 'thoughts',
      'bg-indigo-950/10': category == 'thoughts',
    }"
  >
    <h2 v-if="category != 'thoughts'" class="0 mb-2 shrink text-xl">
      {{ doc.title }}
    </h2>

    <p v-if="doc.description" class="text-neutral-400">
      {{ doc.description }}
    </p>

    <div class="mt-0.5 flex w-full justify-between">
      <span class="grow-1" />
      <span
        class="block shrink-0 justify-self-end text-right text-xs text-white/40"
      >
        {{ $formatter.date(doc.created_at) }}
      </span>
    </div>
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
