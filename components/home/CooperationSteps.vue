<script setup lang="ts">
import type { iCooperationSteps } from '~/types/stories/home/homeTypes'

interface IProps {
  content: iCooperationSteps
}

const props = defineProps<IProps>()

const openedId = ref(props.content?.items[0]?._uid ?? '')
</script>

<template>
  <section class="coop-steps">
    <div class="coop-steps__container container">
      <div class="grid coop-steps__top">
        <Pill class="coop-steps__pill"> {{ content?.tag }} </Pill>
        <div class="coop-steps__top-content">
          <h2 class="coop-steps__top-t">
            {{ content?.text }}
          </h2>
        </div>
      </div>
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

        <HomeCoopStepsAccordion
          v-model="openedId"
          :steps="content?.items"
          class="coop-steps__a"
        />
      </div>
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

.coop-steps__top-t {
  @include heading-h2;

  span {
    color: var(--foreground-muted-50);
  }
}

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
