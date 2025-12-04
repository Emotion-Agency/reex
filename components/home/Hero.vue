<script setup lang="ts">
import type { iHomeHero } from '~/types/stories/homeTypes'

interface IProps {
  content: iHomeHero
}

defineProps<IProps>()
</script>

<template>
  <section class="hero">
    <div class="hero__bg-wrapper">
      <img
        :src="content?.background_asset.filename"
        :alt="content?.background_asset.alt"
        class="hero__bg"
      />
    </div>
    <Button class="hero__btn" variant="light">
      <Icon name="lucide:arrow-down" />
    </Button>
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

.hero__bg-wrapper {
  position: absolute;
  inset: 0;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 0;
  }
}

.hero__bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: -1;
}

.hero__btn {
  position: absolute;
  left: $g-offset;
  bottom: vw(16);
  width: vw(48);
  height: vw(48);
  background-color: var(--bg-muted-75);
  backdrop-filter: blur(vw(50));

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
    left: $g-sm;
    bottom: 16px;
    backdrop-filter: blur(50px);
    width: 48px;
    height: 48px;
  }

  @media (max-width: $br3) {
    left: $g-s;
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
  max-width: vw(820);
  color: var(--secondary);

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
