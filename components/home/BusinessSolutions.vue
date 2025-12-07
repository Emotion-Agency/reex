<script setup lang="ts">
import type { iBusinessSolutions } from '~/types/stories/home/homeTypes'

interface IProps {
  content: iBusinessSolutions
}

const props = defineProps<IProps>()
</script>

<template>
  <section class="business">
    <div class="container business__wrapper">
      <div class="grid business__top">
        <Pill class="business__pill"> {{ content?.tag }} </Pill>
        <div class="business__top-content">
          <h2 class="business__t">
            {{ content?.title }}
          </h2>
          <DualButton
            tag="nuxt-link"
            :to="content?.link[0]?.url?.cached_url"
            class="business__btn"
          >
            {{ content?.link[0]?.label }}
          </DualButton>
        </div>
      </div>
      <HomeBusinessCarousel :carousel-items="content?.service_carousel" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.business {
  padding-top: vw(144);

  @media (max-width: $br1) {
    padding-top: 100px;
  }
}

.business__top {
  align-items: start;

  @media (max-width: $br1) {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
  }
}

.business__pill {
  @media (min-width: $br1) {
    @include col(1, 6);
  }
}

.business__top-content {
  @media (min-width: $br1) {
    @include col(7, 12);
  }
}

.business__t {
  @include heading-h2;

  span {
    color: var(--foreground-muted-50);
  }
}

.business__btn {
  width: fit-content;
  margin-top: vw(40);

  @media (max-width: $br1) {
    margin-top: 32px;
  }
}
</style>
