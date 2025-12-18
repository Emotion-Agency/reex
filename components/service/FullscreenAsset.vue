<script setup lang="ts">
import type { iImage } from '~/types/stories/story'

interface iServiceFullscreenAssetProps {
  asset: iImage
  description: string
}

defineProps<iServiceFullscreenAssetProps>()

const $el = ref<HTMLElement | null>(null)

useDetectHeaderColor($el as Ref<HTMLElement>)
</script>

<template>
  <section ref="$el" class="fs-asset">
    <div class="container fs-asset__d-wrapper">
      <Button class="fs-asset__btn" variant="dark">
        <Icon name="lucide:arrow-down" />
      </Button>
      <p class="fs-asset__d">
        {{ description }}
      </p>
    </div>
    <div class="fs-asset__wrapper">
      <AssetRenderer
        :src="asset?.filename"
        :alt="asset?.alt"
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
  padding-top: vw(32);

  @media (max-width: $br1) {
    padding-top: 24px;
  }
}

.fs-asset__d-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: $br1) {
    flex-direction: column-reverse;
    gap: 18px;
  }
}

.fs-asset__d {
  max-width: vw(448);
  @include heading-h4;

  @media (max-width: $br1) {
    max-width: 320px;
  }

  @media (max-width: $br4) {
    max-width: 100%;
  }
}

.fs-asset__btn {
  pointer-events: none;
  width: vw(48);
  height: vw(48);

  span {
    width: vw(18);
    height: vw(18);
    animation: bounce 2s ease-in-out infinite alternate;

    @media (max-width: $br1) {
      width: 18px;
      height: 18px;
    }
  }

  @media (max-width: $br1) {
    backdrop-filter: blur(50px);
    width: 48px;
    height: 48px;
  }
}

.fs-asset__asset {
  display: block;
  object-fit: cover;
  width: 100vw;
  height: 100svh;
  margin-top: vw(48);

  @media (max-width: $br1) {
    width: 100%;
    height: 100%;
    aspect-ratio: 325/470;
    margin-top: 32px;
  }
}

@keyframes bounce {
  0% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(5px);
  }
}
</style>
