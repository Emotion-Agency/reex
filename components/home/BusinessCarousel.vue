<script setup lang="ts">
import useEmbla from '~/composables/useEmblaSlider'
import type { iBusinessCarouselItem } from '~/types/stories/home/homeTypes'
import type { iStory } from '~/types/stories/story'

interface ServicesCarouselProps {
  carouselItems: iStory<iBusinessCarouselItem>[]
}

const props = defineProps<ServicesCarouselProps>()

const {
  scrollPrev,
  scrollNext,
  emblaRef,
  prevBtnDisabled,
  nextBtnDisabled,
  progress,
} = useEmbla({
  slidesToScroll: 1,
  container: '.services-carousel__container',
  loop: true,
})
</script>

<template>
  <section class="services-carousel" ref="emblaRef">
    <div class="services-carousel__controls">
      <button
        @click="scrollPrev"
        :disabled="prevBtnDisabled"
        class="services-carousel__btn"
      >
        <Icon name="lucide:chevron-left" />
      </button>
      <button
        @click="scrollNext"
        :disabled="nextBtnDisabled"
        class="services-carousel__btn"
      >
        <Icon name="lucide:chevron-right" />
      </button>
    </div>

    <div class="services-carousel__mask">
      <ul class="services-carousel__container">
        <li
          v-for="item in carouselItems"
          :key="item._uid"
          class="services-carousel__slide"
        >
          <NuxtLink :to="`/${item.full_slug}`" class="services-carousel__link">
            <CustomImage
              :src="item.content?.asset?.filename"
              :alt="item.content?.asset?.alt"
              :width="664"
              class="services-carousel__img"
            />

            <div class="services-carousel__link-arrow">
              <Icon name="lucide:arrow-up-right" />
            </div>
            <div class="services-carousel__info">
              <h3 class="services-carousel__title">
                {{ richTextToString(item.content?.colored_title) }}
              </h3>
              <p class="services-carousel__description">
                {{ item.content?.description }}
              </p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <ClientOnly>
      <ProgressBar :progress="progress" class="services-carousel__progress" />
    </ClientOnly>
  </section>
</template>

<style scoped lang="scss">
.services-carousel {
  overflow: hidden;
  margin-top: vw(96);

  @media (max-width: $br1) {
    margin-top: 60px;
  }
}

.services-carousel__controls {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: vw(8);

  @media (max-width: $br1) {
    gap: 6px;
  }
}

.services-carousel__btn {
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

.services-carousel__mask {
  overflow: hidden;
  border-radius: vw(16);
  margin-top: vw(28);

  @media (max-width: $br1) {
    border-radius: 16px;
    margin-top: 20px;
  }
}

.services-carousel__container {
  display: flex;
}

.services-carousel__slide {
  flex: 0 0 calc((100% - 3 * vw(16)) / 4);
  min-width: 0;
  height: vw(332);
  border-radius: vw(16);
  margin-right: vw(16);
  overflow: hidden;
  position: relative;

  @media (max-width: $br1) {
    height: 280px;
    border-radius: 12px;
    margin-right: 8px;
    flex: 0 0 calc((100% - 1 * 12px) / 2);
  }

  @media (max-width: $br3) {
    flex: 0 0 100%;
  }

  &:hover {
    .services-carousel__img {
      opacity: 1;
      transform: scale(1);
    }
    .services-carousel__title,
    .services-carousel__description {
      color: var(--secondary);
    }
  }
}

.services-carousel__link {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: vw(24);
  width: 100%;
  height: 100%;
  background-color: var(--foreground-muted-7);

  @media (max-width: $br1) {
    padding: 18px;
  }
}

.services-carousel__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.15);
  opacity: 0;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
  z-index: -1;
}

.services-carousel__link-arrow {
  display: flex;
  justify-content: center;
  align-items: center;
  width: vw(48);
  height: vw(48);
  border-radius: vw(16);
  background-color: var(--background);

  @media (max-width: $br1) {
    width: 40px;
    height: 40px;
    border-radius: 12px;
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

.services-carousel__title {
  transition: color 0.5s ease;
  @include heading-h4;
}

.services-carousel__description {
  margin-top: vw(12);
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.5s ease;
  @include text-reg-p1;

  @media (max-width: $br1) {
    margin-top: 8px;
  }
}

.services-carousel__progress {
  margin-top: vw(78) !important;

  @media (max-width: $br1) {
    margin-top: 42px !important;
  }
}
</style>
