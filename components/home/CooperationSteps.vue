<script setup lang="ts">
const coopSteps = [
  {
    id: 1,
    title: 'Аналізуємо ваші потреби',
    description:
      'Дізнаємося кількість працівників, графік, обов’язки та вимоги. Формуємо точний профіль кандидатів.',
    image: {
      src: '/images/home-2.png',
      alt: 'Step image',
    },
  },
  {
    id: 2,
    title: 'Підбираємо персонал',
    description:
      'Проводимо відбір, інтерв’ю та перевіряємо компетенції. Обираємо працівників, які найкраще відповідають задачам.',
    image: {
      src: '/images/home-3.png',
      alt: 'Step image',
    },
  },
  {
    id: 3,
    title: 'Організовуємо вихід на зміну',
    description:
      'Беремо на себе оформлення, інструктаж та координацію. Працівники виходять на роботу без затримок.',
    image: {
      src: '/images/home-4.png',
      alt: 'Step image',
    },
  },
  {
    id: 4,
    title: 'Контролюємо якість і замінюємо за потреби',
    description:
      'Моніторимо результат та оперативно реагуємо на зміни. За потреби — швидко замінюємо працівника.',
    image: {
      src: '/images/home-5.png',
      alt: 'Step image',
    },
  },
]

const openedId = ref('1')
</script>

<template>
  <section class="coop-steps">
    <div class="coop-steps__container container">
      <div class="grid coop-steps__top">
        <Pill class="coop-steps__pill"> Рішення для бізнесу </Pill>
        <div class="coop-steps__top-content">
          <h2 class="coop-steps__top-t">
            Організовуємо роботу так, щоб усе проходило
            <span> легко та злагоджено. </span>
          </h2>
        </div>
      </div>
      <div class="grid coop-steps__content">
        <div class="coop-steps__img-wrapper">
          <img
            v-for="step in coopSteps"
            :key="step.id"
            :src="step.image.src"
            :alt="step.image.alt"
            class="coop-steps__img"
            :class="{ 'coop-steps__img--opened': openedId === String(step.id) }"
          />
        </div>

        <HomeCoopStepsAccordion
          v-model="openedId"
          :steps="coopSteps"
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
