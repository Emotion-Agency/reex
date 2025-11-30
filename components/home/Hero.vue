<script setup lang="ts"></script>

<template>
  <section class="hero">
    <div class="hero__bg-wrapper">
      <img src="/images/home-1.png" alt="Backround image" class="hero__bg" />
    </div>
    <div class="hero__wrapper container">
      <h1 class="hero__t">Кадрові рішення для бізнесу</h1>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  position: relative;
  height: 100dvh;
  width: 100%;
}

.hero__bg-wrapper {
  position: absolute;
  inset: 0;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 0;
  }
}

.hero__bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: -1;
}

.hero__wrapper {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
}

.hero__t {
  @include heading-h1;
  max-width: vw(790);
  color: var(--secondary);

  @media (max-width: $br1) {
    max-width: 500px;
  }

  @media (max-width: $br4) {
    max-width: 100%;
  }
}
</style>
