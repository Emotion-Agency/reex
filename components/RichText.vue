<script setup lang="ts">
interface iProps {
  text: any
}

defineProps<iProps>()
</script>

<template>
  <StoryblokRichText :doc="text" />
</template>
