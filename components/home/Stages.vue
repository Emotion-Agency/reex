<script setup lang="ts">
const stages = [
  {
    id: 1,
    title: 'Аналізуємо ваші потреби',
    description:
      'Дізнаємося кількість працівників, графік, обов’язки та вимоги. Формуємо точний профіль кандидатів.',
    image: {
      src: '/images/home-2.png',
      alt: 'Stage image',
    },
  },
  {
    id: 2,
    title: 'Підбираємо персонал',
    description:
      'Проводимо відбір, інтерв’ю та перевіряємо компетенції. Обираємо працівників, які найкраще відповідають задачам.',
    image: {
      src: '/images/home-3.png',
      alt: 'Stage image',
    },
  },
  {
    id: 3,
    title: 'Організовуємо вихід на зміну',
    description:
      'Беремо на себе оформлення, інструктаж та координацію. Працівники виходять на роботу без затримок.',
    image: {
      src: '/images/home-4.png',
      alt: 'Stage image',
    },
  },
  {
    id: 4,
    title: 'Контролюємо якість і замінюємо за потреби',
    description:
      'Моніторимо результат та оперативно реагуємо на зміни. За потреби — швидко замінюємо працівника.',
    image: {
      src: '/images/home-5.png',
      alt: 'Stage image',
    },
  },
]

const openedId = ref('1')
</script>

<template>
  <section class="stages">
    <div class="stages__container container">
      <div class="grid stages__top">
        <Pill class="stages__pill"> Рішення для бізнесу </Pill>
        <div class="stages__top-content">
          <h2 class="stages__top-t">
            Організовуємо роботу так, щоб усе проходило
            <span> легко та злагоджено. </span>
          </h2>
        </div>
      </div>
      <div class="grid stages__content">
        <div class="stages__img-wrapper">
          <img
            v-for="stage in stages"
            :key="stage.id"
            :src="stage.image.src"
            :alt="stage.image.alt"
            class="stages__img"
            :class="{ 'stages__img--opened': openedId === String(stage.id) }"
          />
        </div>

        <HomeStagesAccordion
          v-model="openedId"
          :stages="stages"
          class="stages__a"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.stages {
  padding-top: vw(144);

  @media (max-width: $br1) {
    padding-top: 100px;
  }
}

.stages__top {
  align-items: start;

  @media (max-width: $br1) {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
  }
}

.stages__pill {
  @media (min-width: $br1) {
    @include col(1, 6);
  }
}

.stages__top-content {
  @media (min-width: $br1) {
    @include col(7, 12);
  }
}

.stages__top-t {
  @include heading-h2;

  span {
    color: var(--foreground-muted-50);
  }
}

.stages__content {
  position: relative;
  margin-top: vw(96);

  @media (max-width: $br1) {
    display: flex;
    flex-direction: column;
    margin-top: 78px;
  }
}

.stages__img-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 564/376;

  @media (min-width: $br1) {
    @include col(1, 5);
  }
}

.stages__img {
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
