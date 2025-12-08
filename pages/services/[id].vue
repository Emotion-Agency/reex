<script setup lang="ts">
import { useServiceStory } from '~/composables/stories/serviceStory'

const { params } = useRoute()
const { story } = await useServiceStory(params?.id as string, 'services')

if (!story.value) {
  showError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
  })
}

const sections = computed(() => story.value.content)

console.log(sections.value)

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
    <ServiceHero
      :title="sections?.title"
      :description="sections?.description"
    />
    <ServiceFullscreenAsset :asset="sections?.asset" />
    <ServiceAdvice :content="sections?.advice[0]" />
    <ServiceCooperationSteps :content="sections?.accordion_steps[0]" />
    <ServiceAdvantages :content="sections?.advantages[0]" />
  </div>
</template>
