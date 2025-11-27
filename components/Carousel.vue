<script setup lang="ts">
import emblaCarouselVue from 'embla-carousel-vue'
import type { EmblaOptionsType } from 'embla-carousel'

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
    id: 5,
    title: 'HR-консалтинг',
    description:
      'Аналізуємо HR-процеси, розробляємо стратегії та впроваджуємо рішення для підвищення ефективності управління персоналом.',
  },
  {
    id: 6,
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

const options = computed<EmblaOptionsType>(() => ({
  loop: false,
  slidesToScroll: slidesToScroll.value,
  align: 'start',
  container: '.embla__container',
  watchDrag: width.value < 960,
}))

const [emblaRef, emblaApi] = emblaCarouselVue(options)

const prevBtnDisabled = ref(true)
const nextBtnDisabled = ref(true)
const progress = ref(0)

const scrollPrev = () => emblaApi.value?.scrollPrev()
const scrollNext = () => emblaApi.value?.scrollNext()

const updateUI = () => {
  const api = emblaApi.value
  if (!api) return

  prevBtnDisabled.value = !api.canScrollPrev()
  nextBtnDisabled.value = !api.canScrollNext()
  progress.value = api.scrollProgress() * 100
}

onMounted(() => {
  const api = emblaApi.value
  if (!api) return

  api.on('init', updateUI)
  api.on('select', updateUI)
  api.on('scroll', updateUI)
  api.on('reInit', updateUI)

  updateUI()
})
</script>

<template>
  <section class="embla" ref="emblaRef">
    <div class="embla__controls">
      <button
        @click="scrollPrev"
        :disabled="prevBtnDisabled"
        class="embla__btn"
      >
        <Icon name="lucide:arrow-left" />
      </button>
      <button
        @click="scrollNext"
        :disabled="nextBtnDisabled"
        class="embla__btn"
      >
        <Icon name="lucide:arrow-right" />
      </button>
    </div>

    <ul class="embla__container">
      <li v-for="service in services" :key="service.id" class="embla__slide">
        <div class="embla__link-arrow">
          <Icon name="lucide:arrow-up-right" />
        </div>
        <div>
          <h3 class="embla__title">
            {{ service.title }}
          </h3>
          <p class="embla__description">
            {{ service.description }}
          </p>
        </div>
      </li>
    </ul>
    <div class="embla__progress">
      <div class="embla__progress-bar" :style="{ width: progress + '%' }"></div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.embla {
  overflow: hidden;
  margin-top: vw(96);

  @media (max-width: $br1) {
    margin-top: 60px;
  }
}

.embla__controls {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: vw(8);

  @media (max-width: $br1) {
    gap: 6px;
  }
}

.embla__btn {
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

.embla__container {
  display: flex;
  gap: vw(16);
  margin-top: vw(28);

  @media (max-width: $br1) {
    gap: 8px;
    margin-top: 20px;
  }
}

.embla__slide {
  flex: 0 0 calc((100% - 3 * vw(16)) / 4);
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: vw(16);
  height: vw(287);
  background-color: var(--foreground-muted-7);
  border-radius: vw(16);

  @media (max-width: $br1) {
    padding: 12px;
    height: 240px;
    border-radius: 12px;
    flex: 0 0 calc((100% - 1 * 12px) / 2);
  }

  @media (max-width: $br3) {
    flex: 0 0 100%;
  }
}

.embla__link-arrow {
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

.embla__title {
  @include heading-h4;
}

.embla__description {
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

.embla__progress {
  width: 100%;
  height: vw(4);
  background-color: #dee0e9;
  border-radius: 100px;
  overflow: hidden;
  margin-top: vw(28);

  @media (max-width: $br1) {
    height: 3px;
    margin-top: 18px;
  }

  .embla__progress-bar {
    height: 100%;
    background: var(--foreground-muted-10);
    width: 0%;
    transition: width 0.2s ease;
  }
}
</style>
