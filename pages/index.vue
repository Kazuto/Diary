<template>
  <section class="w-full">
    <ContentList v-slot="{ list }" :query="query">
      <diary-entry
        v-for="(doc, index) in list"
        :key="doc._path"
        :doc="doc"
        :class="{
          'mb-4': index !== list.length - 1,
        }"
      />
    </ContentList>
  </section>
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";

const query: QueryBuilderParams = { path: "/", sort: [{ created_at: -1 }] };
</script>
