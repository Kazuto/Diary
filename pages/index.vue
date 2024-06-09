<template>
  <ContentList v-slot="{ list }" path="/">
    <diary-entry
      v-for="(doc, index) in list"
      :key="doc._path"
      :doc="doc"
      :class="{
        'mb-4': index !== list.length - 1,
      }"
    />
  </ContentList>
</template>
