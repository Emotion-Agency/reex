<script setup lang="ts">
import { useNewsStory } from '~/composables/stories/news/newsStory'
import { pageTransition } from '~/transitions/base'

definePageMeta({
  pageTransition,
})

const { story } = await useNewsStory()
</script>

<template>
  <div>
    <NewsHero :title="story?.content?.title" />
    <NewsArticlesList
      :text="story?.content?.description"
      :all-categories-btn="story?.content?.all_categories_btn"
      :show-more-btn="story?.content?.show_more_btn"
    />
  </div>
</template>

<style lang="scss" scoped></style>
