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

const meta = computed(() => {
  const data = articleStory?.value?.content?.meta[0]

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
    <NewsHero :content="articleStory?.content" />
    <NewsFullAsset
      v-if="articleStory?.content?.asset"
      :asset="articleStory?.content?.asset"
    />
    <NewsContentBlok :blok="articleStory?.content?.content" />
    <Articles
      :title="articlesTitle?.content?.similar_article_title"
      is-button
    />
  </div>
</template>

<style lang="scss" scoped></style>
