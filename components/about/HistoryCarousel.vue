<script setup lang="ts">
import useEmbla from '~/composables/useEmblaSlider'
import type { iHistoryItem } from '~/types/stories/about/aboutTypes'

interface HistoryCarouselProps {
  carouselItems: iHistoryItem[]
  text: string
}

defineProps<HistoryCarouselProps>()

const {
  scrollPrev,
  scrollNext,
  emblaRef,
  prevBtnDisabled,
  nextBtnDisabled,
  progress,
} = useEmbla({
  slidesToScroll: 1,
  container: '.history-carousel__container',
  loop: true,
  watchDrag: true,
})
</script>

<template>
  <section class="history-carousel" ref="emblaRef">
    <div class="history-carousel__top">
      <p class="history-carousel__text">
        {{ text }}
      </p>
      <div class="history-carousel__controls">
        <button
          @click="scrollPrev"
          :disabled="prevBtnDisabled"
          class="history-carousel__btn"
        >
          <Icon name="lucide:chevron-left" />
        </button>
        <button
          @click="scrollNext"
          :disabled="nextBtnDisabled"
          class="history-carousel__btn"
        >
          <Icon name="lucide:chevron-right" />
        </button>
      </div>
    </div>

    <ul class="history-carousel__container">
      <li
        v-for="item in carouselItems"
        :key="item?._uid"
        class="history-carousel__slide"
      >
        <CustomImage
          :src="item?.asset?.filename"
          :alt="item?.asset?.alt"
          :width="664"
          class="history-carousel__img"
        />

        <div class="history-carousel__info">
          <div class="history-carousel__top-info">
            <h3 class="history-carousel__title">
              {{ item?.title }}
            </h3>
            <p class="history-carousel__date">
              {{ item?.date }}
            </p>
          </div>
          <p class="history-carousel__description">
            {{ item?.text }}
          </p>
        </div>
      </li>
    </ul>
    <ClientOnly>
      <ProgressBar class="history-carousel__progress" />
    </ClientOnly>
  </section>
</template>

<style scoped lang="scss">
.history-carousel {
  overflow: hidden;
  margin-top: vw(96);

  @media (max-width: $br1) {
    margin-top: 60px;
  }
}

.history-carousel__top {
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: $br1) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
  }
}

.history-carousel__text {
  max-width: vw(364);
  @include text-reg-p1;

  @media (max-width: $br1) {
    max-width: 240px;
  }

  @media (max-width: $br3) {
    max-width: 100%;
  }
}

.history-carousel__controls {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: vw(8);

  @media (max-width: $br1) {
    gap: 6px;
  }
}

.history-carousel__btn {
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

.history-carousel__container {
  display: flex;
  margin-top: vw(52);

  @media (max-width: $br1) {
    margin-top: 36px;
  }
}

.history-carousel__slide {
  display: flex;
  overflow: hidden;
  min-width: 0;
  flex: 0 0 60%;
  background-color: var(--foreground-muted-7);
  border-radius: vw(16);
  height: vw(336);
  margin-right: vw(16);

  @media (max-width: $br1) {
    border-radius: 16px;
    height: auto;
    margin-right: 16px;
    flex-direction: column;
  }
}

.history-carousel__img {
  width: vw(332);
  height: auto;
  object-fit: cover;

  @media (max-width: $br1) {
    width: 100%;
    height: 320px;
  }
}

.history-carousel__info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: vw(32);

  @media (max-width: $br1) {
    width: 100%;
    height: 100%;
    padding: 20px;
    gap: 12px;
  }
}

.history-carousel__title {
  color: var(--foreground-muted-12);
  @include text-med-p1;
}

.history-carousel__date {
  margin-top: vw(24);
  font-size: vw(80);
  @include heading-h1;

  @media (max-width: $br1) {
    margin-top: 18px;
    font-size: 52px;
  }
}

.history-carousel__description {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  @include text-reg-p1;
}

.history-carousel__progress {
  margin-top: vw(96);

  @media (max-width: $br1) {
    margin-top: 68px;
  }
}
</style>
