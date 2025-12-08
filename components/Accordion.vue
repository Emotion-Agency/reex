<script setup lang="ts">
import type { iAccordionSteps } from '~/types/stories/accordionTypes'

interface IProps {
  content: iAccordionSteps
}

const props = defineProps<IProps>()

const openedId = ref(props.content?.items[0]?._uid ?? '')
</script>

<template>
  <div class="grid coop-steps__content">
    <div class="coop-steps__img-wrapper">
      <img
        v-for="step in content?.items"
        :key="step._uid"
        :src="step.asset.filename"
        :alt="step.asset.alt"
        class="coop-steps__img"
        :class="{ 'coop-steps__img--opened': openedId === step._uid }"
      />
    </div>

    <AccordionRoot
      v-model="openedId"
      :steps="content?.items"
      class="coop-steps__a"
    />
  </div>
</template>

<style scoped lang="scss">
.coop-steps__content {
  position: relative;
  margin-top: vw(96);

  @media (max-width: $br1) {
    display: flex;
    flex-direction: column;
    margin-top: 78px;
  }
}

.coop-steps__img-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 564/376;

  @media (min-width: $br1) {
    @include col(1, 5);
  }
}

.coop-steps__img {
  position: absolute;
  border-radius: vw(12);
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.3s ease;

  @media (max-width: $br1) {
    width: 100%;
    border-radius: 12px;
  }

  &--opened {
    opacity: 1;
  }
}
</style>
