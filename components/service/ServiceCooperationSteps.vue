<script setup lang="ts">
import type { iAccordionSteps } from '~/types/stories/accordionTypes'

interface IProps {
  content: iAccordionSteps
}

defineProps<IProps>()
</script>

<template>
  <section class="service-coop-steps">
    <div class="service-coop-steps__container container">
      <div class="grid service-coop-steps__top">
        <Pill class="service-coop-steps__pill"> {{ content?.tag }} </Pill>
        <div class="service-coop-steps__top-content">
          <h2 class="service-coop-steps__top-t">
            {{ content?.text }}
          </h2>
        </div>
      </div>
      <Accordion :content="content" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.service-coop-steps {
  padding-top: vw(144);

  @media (max-width: $br1) {
    padding-top: 100px;
  }
}

.service-coop-steps__top {
  align-items: start;

  @media (max-width: $br1) {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
  }
}

.service-coop-steps__pill {
  @media (min-width: $br1) {
    @include col(1, 6);
  }
}

.service-coop-steps__top-content {
  @media (min-width: $br1) {
    @include col(7, 12);
  }
}

.service-coop-steps__top-t {
  @include heading-h2;

  span {
    color: var(--foreground-muted-50);
  }
}
</style>
