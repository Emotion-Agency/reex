<script setup lang="ts">
import type { iImage } from '~/types/stories/story'

interface iArticlesListProps {
  asset: iImage
}

const props = defineProps<iArticlesListProps>()
</script>

<template>
  <section class="news-asset">
    <AssetRenderer
      data-preload
      :src="asset?.filename"
      :alt="asset?.alt"
      :width="1440"
      :video-attributes="{
        autoplay: true,
        playsinline: true,
        muted: true,
      }"
      class="news-asset__img"
    />
  </section>
</template>

<style scoped lang="scss">
.news-asset {
  position: relative;
}

.news-asset__img {
  display: block;
  width: 100vw;
  height: 100svh;
  object-fit: cover;

  @media (max-width: $br1) {
    width: 100%;
    height: 100%;
    aspect-ratio: 325/470;
  }
}
</style>
