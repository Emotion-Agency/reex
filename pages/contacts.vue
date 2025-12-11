<script setup lang="ts">
import { useContactsStory } from '~/composables/stories/contactsStory'
import { pageTransition } from '~/transitions/base'

definePageMeta({
  pageTransition,
})

const { story } = await useContactsStory()
</script>

<template>
  <div>
    <AppHero :title="story?.content?.title" is-contacts />
  </div>
</template>

<style lang="scss" scoped></style>
