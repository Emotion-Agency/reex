<script setup lang="ts">
import type { iAccordionSteps } from '~/types/stories/accordionTypes'

interface IProps {
  content: iAccordionSteps
}

defineProps<IProps>()
</script>

<template>
  <section class="coop-steps">
    <div class="coop-steps__container container">
      <div class="grid coop-steps__top">
        <Pill class="coop-steps__pill"> {{ content?.tag }} </Pill>
        <div class="coop-steps__top-content">
          <ColoredText
            :content="content?.colored_title"
            as="h2"
            class="coop-steps__top-t"
          />
        </div>
      </div>
      <Accordion :content="content" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.coop-steps {
  padding-top: vw(144);

  @media (max-width: $br1) {
    padding-top: 100px;
  }
}

.coop-steps__top {
  align-items: start;

  @media (max-width: $br1) {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
  }
}

.coop-steps__pill {
  @media (min-width: $br1) {
    @include col(1, 6);
  }
}

.coop-steps__top-content {
  @media (min-width: $br1) {
    @include col(7, 12);
  }
}
</style>
