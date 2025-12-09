<script setup lang="ts">
import { pageTransition } from '~/transitions/base'

definePageMeta({
  pageTransition,
})
</script>

<template>
  <div>
    <ArticlesHero />
    <ArticlesList />
  </div>
</template>

<style lang="scss" scoped></style>
