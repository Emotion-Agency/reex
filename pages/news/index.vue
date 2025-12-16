<script setup lang="ts">
import { useNewsStory } from '~/composables/stories/news/newsStory'
import { pageTransition } from '~/transitions/base'

definePageMeta({
  pageTransition,
})

const { story } = await useNewsStory()

const meta = computed(() => {
  const data = story?.value?.content?.meta[0]

  if (!data) {
    return null
  }

  return {
    title: data.title,
    description: data.description,
    ogImage: data?.image?.filename,
  }
})
</script>

<template>
  <div>
    <PageMeta v-if="meta" v-bind="meta" />
    <AppHero :title="story?.content?.title" />
    <NewsArticlesList
      :text="story?.content?.description"
      :all-categories-btn="story?.content?.all_categories_btn"
      :show-more-btn="story?.content?.show_more_btn"
    />
  </div>
</template>

<style lang="scss" scoped></style>
