<script setup lang="ts">
import type { iHomeHero } from '~/types/stories/home/homeTypes'

interface IProps {
  content: iHomeHero
}

const props = defineProps<IProps>()

const $el = ref<HTMLElement | null>(null)

useDetectHeaderColor($el as Ref<HTMLElement>)

const titleText = computed(() =>
  props.content?.title ? props.content.title.replace(/\s+/g, ' ') : ''
)
</script>

<template>
  <section ref="$el" class="hero">
    <div data-preload class="hero__bg-wrapper">
      <AssetRenderer
        :src="content?.background_asset.filename"
        :alt="content?.background_asset.alt"
        :width="1440"
        :video-attributes="{
          autoplay: true,
          playsinline: true,
          muted: true,
        }"
        class="hero__bg"
      />
    </div>
    <div data-scale class="hero__btn-wrapper">
      <Button class="hero__btn" variant="light">
        <Icon name="lucide:arrow-down" />
      </Button>
    </div>
    <div class="hero__wrapper container">
      <h1 data-split class="hero__t">{{ titleText }}</h1>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  position: relative;
  height: 100dvh;
  width: 100%;
}

.hero__bg-wrapper {
  position: absolute;
  inset: 0;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
    pointer-events: none;
  }
}

.hero__bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 0;
}

.hero__btn-wrapper {
  position: absolute;
  left: $g-offset;
  bottom: vw(16);
}

.hero__btn {
  width: vw(48);
  height: vw(48);
  background-color: var(--bg-muted-75);
  backdrop-filter: blur(vw(50));

  @media (max-width: $br1) {
    left: $g-sm;
    bottom: 16px;
    backdrop-filter: blur(50px);
    width: 48px;
    height: 48px;
  }

  @media (max-width: $br3) {
    left: $g-s;
  }

  span {
    width: vw(18);
    height: vw(18);
    animation: bounce 2s ease-in-out infinite alternate;

    @media (max-width: $br1) {
      width: 18px;
      height: 18px;
    }
  }
}

.hero__wrapper {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
}

.hero__t {
  @include heading-h1;
  max-width: vw(920);
  color: var(--secondary);
  text-transform: uppercase;

  @media (max-width: $br1) {
    max-width: 500px;
  }

  @media (max-width: $br4) {
    max-width: 100%;
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
