<script setup lang="ts">
const partners = [
  {
    id: 1,
    partner: 'Nova Poshta',
    text: 'Професійний сервіс і стабільна якість.',
    member: {
      name: 'Тарас Зінченко',
      position: 'Head of Operations, Нова Пошта',
    },
    img: { src: '/images/partners/nova-poshta.svg', alt: 'Nova Poshta Logo' },
  },
  {
    id: 2,
    partner: 'Rozetka',
    text: 'Високий рівень комунікації та швидке вирішення задач.',
    member: {
      name: 'Олена Коваль',
      position: 'E-commerce Director, Rozetka',
    },
    img: { src: '/images/partners/rozetka.svg', alt: 'Rozetka Logo' },
  },
  {
    id: 3,
    partner: 'Monobank',
    text: 'Надійність і результат. Отримали більше, ніж очікували.',
    member: {
      name: 'Ігор Мельник',
      position: 'Product Manager, Monobank',
    },
    img: { src: '/images/partners/nova-poshta.svg', alt: 'Monobank Logo' },
  },
  {
    id: 4,
    partner: 'Ukrzaliznytsia',
    text: 'Професійний підхід до кожного етапу співпраці.',
    member: {
      name: 'Марія Левченко',
      position: 'Head of Digital, Укрзалізниця',
    },
    img: { src: '/images/partners/rozetka.svg', alt: 'Ukrzaliznytsia Logo' },
  },
  {
    id: 5,
    partner: 'Kyivstar',
    text: 'Швидко, якісно і прозоро. Рекомендуємо до співпраці.',
    member: {
      name: 'Дмитро Савчук',
      position: 'Marketing Lead, Kyivstar',
    },
    img: { src: '/images/partners/nova-poshta.svg', alt: 'Kyivstar Logo' },
  },
]

const { current, handlePrev, handleNext } = useSlider(() => partners.length)
</script>

<template>
  <section class="partners-slider" ref="emblaRef">
    <div class="grid partners-slider__content">
      <div class="partners-slider__nav">
        <Pill>Нам довіряють лідери</Pill>
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
          v-for="(partner, idx) in partners"
          :key="partner.id"
          class="partners-slider__item"
          :class="{ 'partners-slider__item--active': idx === current }"
        >
          <h2 class="partners-slider__text">{{ partner.text }}</h2>
          <div class="partners-slider__member">
            <img
              :src="partner.img.src"
              :alt="partner.img.alt"
              class="partners-slider__img"
            />
            <div class="partners-slider__info">
              <p class="partners-slider__name">{{ partner.member.name }}</p>
              <p class="partners-slider__pos">
                {{ partner.member.position }}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <ClientOnly>
      <ProgressBar class="partners-slider__progress" />
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

.partners-slider__member {
  display: flex;
  align-items: center;
  gap: vw(16);

  @media (max-width: $br1) {
    gap: 12px;
  }
}

.partners-slider__img {
  width: vw(48);
  height: vw(48);
  object-fit: cover;

  @media (max-width: $br1) {
    width: 48px;
    height: 48px;
  }
}

.partners-slider__info {
  display: flex;
  flex-direction: column;
}

.partners-slider__name {
  @include text-med-p1;
}

.partners-slider__pos {
  @include text-reg-p1;
  margin-top: vw(4);
  color: var(--foreground-muted-50);

  @media (max-width: $br1) {
    margin-top: 4px;
  }
}

.partners-slider__progress {
  margin-top: vw(96);

  @media (max-width: $br1) {
    margin-top: 58px;
  }
}
</style>
