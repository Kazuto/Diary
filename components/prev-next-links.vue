<template>
  <div class="items-between flex w-full self-end pt-8">
    <NuxtLink v-if="prev" class="text-neutral-400 transition hover:text-primary-500" :to="{ params: { slug: prev.slug } }">
      &larr; Zurück
    </NuxtLink>
    <span class="grow" />
    <NuxtLink v-if="next" class="text-neutral-400 transition hover:text-primary-500" :to="{ params: { slug: next.slug } }" >
      Weiter &rarr;
    </NuxtLink>
  </div>
</template>

<script lang="ts">
  export default {
    async asyncData({ $content, params }) {
      const [prev, next] = await $content('articles')
        .only(['slug'])
        .sortBy('created_at', 'asc')
        .surround(params.slug)
        .fetch()

      return {
        prev,
        next
      }
    }
  }
</script>