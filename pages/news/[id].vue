<script setup lang="ts">
import { useGlobalArticlesTitleStory } from '~/composables/stories/globalArticlesTitleStory'
import { useArticleStory } from '~/composables/stories/news/articleStory'
import { pageTransition } from '~/transitions/base'

definePageMeta({
  pageTransition,
})

const { params } = useRoute()

const { story: articlesTitle } = await useGlobalArticlesTitleStory()
const { story: articleStory } = await useArticleStory(
  params?.id as string,
  'news'
)
</script>

<template>
  <div>
    <NewsHero :content="articleStory?.content" />
    <Articles
      :title="articlesTitle?.content?.similar_article_title"
      is-button
    />
  </div>
</template>

<style lang="scss" scoped></style>
