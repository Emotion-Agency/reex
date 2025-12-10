<script setup lang="ts">
import { useArticleStory } from '~/composables/stories/news/articleStory'
import { pageTransition } from '~/transitions/base'

definePageMeta({
  pageTransition,
})

const { params } = useRoute()
const { story } = await useArticleStory(params?.id as string, 'news')

console.log(story.value)
</script>

<template>
  <div>News Components</div>
</template>

<style lang="scss" scoped></style>
