<script setup lang="ts">
import { useAboutStory } from '~/composables/stories/aboutStory'

const { story } = await useAboutStory()

if (!story.value) {
  showError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
  })
}

const sections = computed(() => story.value.content)

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
  <div v-if="story">
    <PageMeta v-if="meta" v-bind="meta" />
    <AboutHero :content="sections?.about_hero[0]" />
    <AboutMissions :content="sections?.missions[0]" />
    <AboutHistory :content="sections?.history[0]" />
    <AboutPartners :content="sections?.about_partners[0]" />
  </div>
</template>
