<script setup lang="ts">
import useEmbla from '~/composables/useEmblaSlider'

const services = [
  {
    id: 1,
    title: 'Аутсорсинг',
    description:
      'Ми беремо на себе управління персоналом: підбір, оформлення, координацію та контроль роботи співробітників.',
  },
  {
    id: 2,
    title: 'Масовий підбір',
    description:
      'Швидко закриваємо десятки позицій одночасно, забезпечуючи якісний відбір кандидатів та оперативний старт роботи.',
  },
  {
    id: 3,
    title: 'Підбір під проєкт',
    description:
      'Формуємо команду “під ключ” для короткострокових чи нових напрямів бізнесу з урахуванням термінів і бюджету.',
  },
  {
    id: 4,
    title: 'Імпорт персоналу',
    description:
      'Підбираємо та супроводжуємо іноземних працівників: документи, приїзд, адаптація та координація на підприємстві.',
  },
  {
    id: 5,
    title: 'HR-консалтинг',
    description:
      'Аналізуємо HR-процеси, розробляємо стратегії та впроваджуємо рішення для підвищення ефективності управління персоналом.',
  },
  {
    id: 6,
    title: 'HR-консалтинг',
    description:
      'Аналізуємо HR-процеси, розробляємо стратегії та впроваджуємо рішення для підвищення ефективності управління персоналом.',
  },
  {
    id: 7,
    title: 'Аутстафінг',
    description:
      'Надаємо тимчасових працівників для виконання специфічних завдань чи проектів без необхідності їх офіційного працевлаштування.',
  },
]

const { width } = useWindowSize()

const slidesToScroll = computed(() => {
  if (width.value < 660) return 1
  if (width.value < 960) return 2
  return 4
})

const { emblaRef, scrollPrev, scrollNext, prevBtnDisabled, nextBtnDisabled } =
  useEmbla({
    slidesToScroll,
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
        <Icon name="lucide:arrow-left" />
      </button>
      <button
        @click="scrollNext"
        :disabled="nextBtnDisabled"
        class="services-carousel__btn"
      >
        <Icon name="lucide:arrow-right" />
      </button>
    </div>

    <ul class="services-carousel__container">
      <li
        v-for="service in services"
        :key="service.id"
        class="services-carousel__slide"
      >
        <div class="services-carousel__link-arrow">
          <Icon name="lucide:arrow-up-right" />
        </div>
        <div>
          <h3 class="services-carousel__title">
            {{ service.title }}
          </h3>
          <p class="services-carousel__description">
            {{ service.description }}
          </p>
        </div>
      </li>
    </ul>
    <ClientOnly>
      <ProgressBar />
    </ClientOnly>
    <!-- <div class="services-carousel__progress">
      <div class="services-carousel__progress-bar" :style="{ width: progress + '%' }"></div>
    </div> -->
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

.services-carousel__container {
  display: flex;
  gap: vw(16);
  margin-top: vw(28);

  @media (max-width: $br1) {
    gap: 8px;
    margin-top: 20px;
  }
}

.services-carousel__slide {
  flex: 0 0 calc((100% - 3 * vw(16)) / 4);
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: vw(24);
  height: vw(332);
  background-color: var(--foreground-muted-7);
  border-radius: vw(16);

  @media (max-width: $br1) {
    padding: 18px;
    height: 280px;
    border-radius: 12px;
    flex: 0 0 calc((100% - 1 * 12px) / 2);
  }

  @media (max-width: $br3) {
    flex: 0 0 100%;
  }
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
  @include heading-h4;
}

.services-carousel__description {
  @include text-reg-p1;
  margin-top: vw(12);
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: $br1) {
    margin-top: 8px;
  }
}

.services-carousel__progress {
  width: 100%;
  height: vw(4);
  background-color: #edeff0;
  border-radius: 100px;
  overflow: hidden;
  margin-top: vw(28);

  @media (max-width: $br1) {
    height: 3px;
    margin-top: 18px;
  }

  .services-carousel__progress-bar {
    height: 100%;
    background-color: #dee0e9;
    width: 0%;
    transition: width 0.2s ease;
  }
}
</style>
