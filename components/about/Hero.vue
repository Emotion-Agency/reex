<script setup lang="ts">
import type { iAboutHero } from '~/types/stories/about/aboutTypes'

interface IProps {
  content: iAboutHero
}

defineProps<IProps>()

const $el = ref<HTMLElement | null>(null)

useDetectHeaderColor($el as Ref<HTMLElement>)
</script>

<template>
  <section ref="$el" class="hero">
    <AssetRenderer
      data-preload
      :src="content?.background_asset?.filename"
      :alt="content?.background_asset?.alt"
      :width="1440"
      :video-attributes="{
        autoplay: true,
        playsinline: true,
        muted: true,
      }"
      class="hero__bg"
    />

    <div class="hero__wrapper container">
      <h1 class="hero__t">{{ content.title }}</h1>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  position: relative;
  height: 100dvh;
  width: 100%;
}

.hero__bg {
  position: absolute;
  inset: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.hero__wrapper {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-end;
  height: 100%;
  padding-bottom: $g-offset;

  @media (max-width: $br1) {
    padding-bottom: $g-sm;
  }

  @media (max-width: $br3) {
    padding-bottom: $g-s;
  }
}

.hero__t {
  color: var(--secondary);
  max-width: vw(864);
  @include heading-h1;

  @media (max-width: $br1) {
    max-width: 500px;
  }

  @media (max-width: $br4) {
    max-width: 100%;
  }
}
</style>
