<script setup lang="ts">
import { useGlobalArticlesTitleStory } from '~/composables/stories/globalArticlesTitleStory'
import { useHomeStory } from '~/composables/stories/homeStory'

const { story } = await useHomeStory()

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

const sections = computed(() => story.value.content)
const { story: articlesTitle } = await useGlobalArticlesTitleStory()
</script>

<template>
  <div>
    <PageMeta v-if="meta" v-bind="meta" />
    <HomeHero :content="sections?.hero[0]" />
    <HomeBusinessSolutions :content="sections?.business_solutions[0]" />
    <HomeWhyChooseUs :content="sections?.why_choose[0]" />
    <HomeAbout :content="sections?.about[0]" />
    <HomeCooperationSteps :content="sections?.cooperation[0]" />
    <HomeLocations :content="sections?.locations[0]" />
    <HomePartners :content="sections?.partners[0]" />
    <Articles :title="articlesTitle?.content?.useful_article_title" is-button />
  </div>
</template>
