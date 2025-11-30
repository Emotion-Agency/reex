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

const openedId = ref<number>(stages[0].id)

const toggleStage = (id: number) => {
  if (openedId.value === id) return

  openedId.value = id
}
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
        <img
          v-for="stage in stages"
          :src="stage.image.src"
          :alt="stage.image.alt"
          class="stages__img"
          :class="{ 'stages__img--opened': openedId === stage.id }"
        />
        <ul class="stages__list">
          <li
            v-for="stage in stages"
            :key="stage.id"
            class="stages__item"
            :class="{ 'stages__item--opened': openedId === stage.id }"
            @click="toggleStage(stage.id)"
          >
            <h4 class="stages__t">{{ stage.title }}</h4>
            <div class="stages__item-content">
              <p class="stages__d">{{ stage.description }}</p>
            </div>
          </li>
        </ul>
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

.stages__img {
  position: absolute;
  border-radius: vw(12);
  width: vw(564);
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.3s ease;

  @media (min-width: $br1) {
    @include col(1, 5);
  }

  @media (max-width: $br1) {
    width: 100%;
    height: 400px;
    border-radius: 12px;
  }

  &--opened {
    opacity: 1;
  }
}

.stages__list {
  @media (min-width: $br1) {
    @include col(7, 12);
  }

  @media (max-width: $br1) {
    padding-top: 400px;
    margin-top: 36px;
  }
}

.stages__item {
  cursor: pointer;
  border-top: 1px solid var(--foreground-muted-10);
  padding: vw(24) 0;
  overflow: hidden;

  @media (max-width: $br1) {
    padding: 18px 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:hover {
    .stages__t {
      color: var(--foreground);
    }
  }

  &--opened {
    .stages__t {
      color: var(--foreground);
    }

    .stages__item-content {
      max-height: vw(300);

      @media (max-width: $br1) {
        max-height: 700px;
      }
    }
  }
}

.stages__divider {
  width: 100%;
  height: 1px;
  background-color: var(--foreground-muted-10);
}

.stages__t {
  @include heading-h4;
  color: var(--foreground-muted-50);
  transition: color 0.3s ease;
}

.stages__item-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 1s ease;
}

.stages__d {
  @include text-reg-p1;
  margin-top: vw(24);

  @media (max-width: $br1) {
    margin-top: 18px;
  }
}
</style>
