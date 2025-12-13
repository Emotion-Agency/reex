<script setup lang="ts">
import type { iAdvice } from '~/types/stories/service/serviceTypes'

interface iServiceAdvice {
  content: iAdvice
}

defineProps<iServiceAdvice>()

const localePath = useLocalePath()
</script>

<template>
  <section class="advice container">
    <div class="advice__wrapper">
      <div class="advice__content">
        <div class="advice__top">
          <h3 class="advice__t">
            {{ content?.title }}
          </h3>
          <DualButton
            class="advice__btn"
            tag="nuxt-link"
            :to="localePath(normalizePath(content?.link[0]?.url?.cached_url))"
          >
            {{ content?.link[0]?.label }}
          </DualButton>
        </div>
        <p class="advice__d">
          {{ content.description }}
        </p>
        <DualButton
          class="advice__btn advice__btn--mob"
          tag="nuxt-link"
          :to="localePath(normalizePath(content?.link[0]?.url?.cached_url))"
        >
          {{ content?.link[0]?.label }}
        </DualButton>
      </div>
      <CustomImage
        :src="content?.asset?.filename"
        :alt="content?.asset?.alt"
        :width="422"
        class="advice__asset"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.advice {
  padding-top: vw(50);

  @media (max-width: $br1) {
    padding-top: 36px;
  }
}

.advice__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  border-radius: vw(16);
  padding: vw(48) vw(160) vw(32) vw(32);
  background-color: var(--foreground-muted-7);

  @media (max-width: $br1) {
    justify-content: flex-start;
    border-radius: 16px;
    padding: 32px;
  }
}

.advice__content {
  display: flex;
  flex-direction: column;

  @media (min-width: $br1) {
    justify-content: space-between;
    flex: 1;
  }

  @media (max-width: $br1) {
    max-width: 550px;
  }

  @media (max-width: $br3) {
    max-width: 100%;
  }
}

.advice__top {
  @media (min-width: $br1) {
    max-width: vw(660);
  }
}

.advice__t {
  @include heading-h3;
}

.advice__btn {
  width: fit-content;

  @media (min-width: $br1) {
    margin-top: vw(32);
  }

  @media (max-width: $br1) {
    display: none;
  }

  &--mob {
    display: none;

    @media (max-width: $br1) {
      display: flex;
      margin-top: 32px;
    }
  }
}

.advice__d {
  @include text-reg-p1;

  @media (min-width: $br1) {
    max-width: vw(448);
  }

  @media (max-width: $br1) {
    margin-top: 12px;
  }
}

.advice__asset {
  object-fit: cover;
  width: vw(422);
  height: vw(422);

  @media (max-width: $br1) {
    display: none;
  }
}
</style>
