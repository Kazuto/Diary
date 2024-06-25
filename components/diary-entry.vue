<template>
  <NuxtLink
    :to="doc._path"
    class="duration-250 block rounded-lg border border-black/30 px-4 py-3 font-semibold shadow-md shadow-gray-900/10 ring-inset transition-all hover:-translate-y-0.5 hover:shadow-md dark:ring-1 ring-white/5"
    :class="{
      'bg-secondary-100/[0.025] hover:bg-secondary-100/[0.05]':
        category != 'thoughts',
      'bg-black/[0.025] hover:bg-black/[0.05]':
        category == 'thoughts',
    }"
  >


<h2 class="text-xl shrink 0 mb-2" v-if="category != 'thoughts' ">
{{ doc.title}} 
</h2>

    <p v-if="doc.description" class="text-neutral-400">
      {{ doc.description }}
    </p>

<div class="flex w-full justify-between mt-0.5">
<span class="grow-1" />
    <span class="justify-self-end block shrink-0 text-xs text-white/40 text-right">
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
