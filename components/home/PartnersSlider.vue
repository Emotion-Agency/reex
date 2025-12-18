<script setup lang="ts">
import type { iPartners } from '~/types/stories/home/homeTypes'

interface IProps {
  partners: iPartners
}

const props = defineProps<IProps>()

const { current, progress, handlePrev, handleNext } = useSlider(
  () => props.partners?.items?.length
)
</script>

<template>
  <section class="partners-slider">
    <div class="grid partners-slider__content">
      <div class="partners-slider__nav">
        <Pill>{{ partners?.tag }}</Pill>
        <div class="partners-slider__controls">
          <button @click="handlePrev" class="partners-slider__btn">
            <Icon name="lucide:arrow-left" />
          </button>
          <button @click="handleNext" class="partners-slider__btn">
            <Icon name="lucide:arrow-right" />
          </button>
        </div>
      </div>

      <ul class="partners-slider__list">
        <li
          v-for="(partner, idx) in partners?.items"
          :key="partner._uid"
          class="partners-slider__item"
          :class="{ 'partners-slider__item--active': idx === current }"
        >
          <h2 class="partners-slider__text">{{ partner.text }}</h2>
          <Member :member="partner.member[0]" />
        </li>
      </ul>
    </div>
    <ClientOnly>
      <ProgressBar :progress="progress" class="partners-slider__progress" />
    </ClientOnly>
  </section>
</template>

<style scoped lang="scss">
.partners-slider {
  margin-top: vw(48);

  @media (max-width: $br1) {
    margin-top: 36px;
  }
}

.partners-slider__content {
  position: relative;

  @media (min-width: $br1) {
    height: vw(320);
  }

  @media (max-width: $br1) {
    display: flex;
    flex-direction: column;
  }
}

.partners-slider__nav {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: $br1) {
    @include col(1, 5);
  }

  @media (max-width: $br1) {
    justify-content: flex-start;
    gap: 20px;
    width: fit-content;
  }
}

.partners-slider__controls {
  display: flex;
  align-items: center;
  gap: vw(8);

  @media (max-width: $br1) {
    gap: 6px;
  }
}

.partners-slider__btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: vw(48);
  height: vw(48);
  border-radius: vw(16);
  background-color: var(--foreground-muted-7);
  transition: background-color 0.3s ease;

  @media (max-width: $br1) {
    width: 40px;
    height: 40px;
    border-radius: 12px;
  }

  &:hover:not(:disabled) {
    background-color: var(--foreground-muted-10);
  }

  span {
    width: vw(18);
    height: vw(18);

    @media (max-width: $br1) {
      width: 16px;
      height: 16px;
    }
  }
}

.partners-slider__list {
  transform: none !important;

  @media (min-width: $br1) {
    @include col(7, 11);
  }

  @media (max-width: $br1) {
    position: relative;
    margin-top: 20px;
    height: 180px;
  }
}

.partners-slider__item {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease;
  gap: vw(10);

  &--active {
    opacity: 1;
  }

  @media (max-width: $br1) {
    gap: 10px;
  }
}

.partners-slider__text {
  @include heading-h2;

  @media (max-width: $br1) {
    max-width: 550px;
  }

  @media (max-width: $br3) {
    max-width: 100%;
  }
}

.partners-slider__progress {
  margin-top: vw(96) !important;

  @media (max-width: $br1) {
    margin-top: 58px !important;
  }
}
</style>
