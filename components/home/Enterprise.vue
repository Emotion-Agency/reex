<script setup lang="ts"></script>

<template>
  <section class="enterprise">
    <div class="container enterprise__wrapper">
      <div class="grid enterprise__top">
        <Pill class="enterprise__pill"> Рішення для бізнесу </Pill>
        <div class="enterprise__top-content">
          <h2 class="enterprise__title">
            Ми беремо на себе персонал — ви отримуєте результати
            <span> без зайвих клопотів. </span>
          </h2>
          <Button
            tag="nuxt-link"
            to="/services"
            variant="secondary"
            class="enterprise__btn"
          >
            Усі послуги
          </Button>
        </div>
      </div>
      <div>
        <Carousel />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.enterprise {
  padding-top: vw(144);

  @media (max-width: $br1) {
    padding-top: 100px;
  }
}

.enterprise__top {
  align-items: start;

  @media (max-width: $br1) {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
  }
}

.enterprise__pill {
  @media (min-width: $br1) {
    @include col(1, 6);
  }
}

.enterprise__top-content {
  @media (min-width: $br1) {
    @include col(7, 12);
  }
}

.enterprise__title {
  @include heading-h2;

  span {
    color: var(--foreground-muted-50);
  }
}

.enterprise__btn {
  margin-top: vw(40);

  @media (max-width: $br1) {
    margin-top: 32px;
  }
}
</style>
