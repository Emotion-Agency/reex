<script setup lang="ts">
import type { iImage } from '~/types/stories/story'

interface iServiceFullscreenAssetProps {
  asset: iImage
}

defineProps<iServiceFullscreenAssetProps>()
</script>

<template>
  <section class="fs-asset">
    <div class="fs-asset__wrapper">
      <AssetRenderer
        :src="asset?.filename"
        :alt="asset?.alt"
        data-preload
        :width="1440"
        :video-attributes="{
          autoplay: true,
          playsinline: true,
          muted: true,
        }"
        class="fs-asset__asset"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.fs-asset {
  padding-top: vw(48);

  @media (max-width: $br1) {
    padding-top: 36px;
  }
}

.fs-asset__asset {
  display: block;
  object-fit: cover;
  width: 100vw;
  height: 100svh;

  @media (max-width: $br1) {
    width: 100%;
    height: 100%;
    aspect-ratio: 325/470;
  }
}
</style>
