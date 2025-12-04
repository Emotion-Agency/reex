<script setup lang="ts">
import { useHomeStory } from '~/composables/stories/homeStory'

const { story } = await useHomeStory()

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

console.log(sections.value)
</script>

<template>
  <div>
    <PageMeta v-if="meta" v-bind="meta" />
    <HomeHero :content="sections.hero[0]" />
    <HomeBusinessSolutions :content="sections.business_solutions[0]" />
    <HomeWhyChooseUs />
    <HomeAbout />
    <HomeCooperationSteps />
    <HomeLocations />
    <HomePartners />
    <Articles title="Корисні статті" is-button />
  </div>
</template>
