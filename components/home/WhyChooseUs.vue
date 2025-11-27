<script setup lang="ts">
const chooseItems = [
  {
    id: 1,
    title: 'Гарантований підбір',
    description:
      'Підбираємо тимчасовий чи постійний персонал. Якщо працівник не підходить  — швидко замінюємо.',
  },
  {
    id: 2,
    title: 'Навчені працівники',
    description:
      'Співбесідуємо та перевіряємо навички кандидатів. Ви отримуєте готового до роботи працівника.',
  },
  {
    id: 3,
    title: 'Фінансова економія',
    description:
      'Скорочуємо витрати на утримання персоналу: документи, бухгалтерія, податки.',
  },
  {
    id: 4,
    title: 'Повна відповідальність',
    description:
      'Координуємо працівників і вирішуємо робочі питання протягом усього періоду співпраці.',
  },
]
</script>

<template>
  <section class="choose">
    <div class="container choose__wrapper">
      <div class="choose__divider" />
      <div class="grid choose__content">
        <div class="choose__info">
          <Pill> Чому обирають нас </Pill>
          <h3 class="choose__t">
            Підсилюємо ваш бізнес надійними рішеннями та персоналом.
          </h3>
        </div>
        <ul class="choose__list">
          <li v-for="item in chooseItems" :key="item.id" class="choose__i">
            <div class="choose__icon">
              <IconsPeoples v-if="item.id === 1" />
              <IconsGraduated v-if="item.id === 2" />
              <IconsCoins v-if="item.id === 3" />
              <IconsShield v-if="item.id === 4" />
            </div>
            <div class="choose__i-content">
              <h4 class="choose__i-t">
                {{ item.title }}
              </h4>
              <p class="choose__i-d">
                {{ item.description }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.choose {
  padding-top: vw(240);

  @media (max-width: $br1) {
    padding-top: 100px;
  }
}

.choose__divider {
  position: relative;
  width: 100%;
  height: 1px;
  background: var(--foreground-muted-10);
}

.choose__content {
  margin-top: vw(48);

  @media (max-width: $br1) {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    margin-top: 32px;
  }
}

.choose__info {
  @media (min-width: $br1) {
    @include col(1, 4);
  }
}

.choose__t {
  @include heading-h3;
  margin-top: vw(24);

  @media (max-width: $br1) {
    margin-top: 16px;
  }
}

.choose__list {
  display: flex;
  flex-direction: column;
  row-gap: vw(48);

  @media (min-width: $br1) {
    @include col(7, 11);
  }

  @media (max-width: $br1) {
    row-gap: 32px;
  }
}

.choose__i {
  display: grid;
  grid-template-columns: vw(83) 1fr;
  align-items: center;
  gap: vw(24);

  @media (max-width: $br1) {
    grid-template-columns: 60px 1fr;
    gap: 18px;
  }
}

.choose__icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: vw(83);
  height: vw(83);

  @media (max-width: $br1) {
    width: 60px;
    height: 60px;
  }
}

.choose__i-t {
  @include heading-h4;
}

.choose__i-d {
  margin-top: vw(12);
  @include text-reg-p1;

  @media (max-width: $br1) {
    margin-top: 8px;
    max-width: 75%;
  }

  @media (max-width: $br3) {
    max-width: 100%;
  }
}
</style>
