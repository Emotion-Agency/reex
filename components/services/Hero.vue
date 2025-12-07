<script setup lang="ts"></script>

<template>
  <section class="hero">
    <div class="hero__wrapper container">
      <h1 class="hero__t">Аутстафінг персоналу</h1>

      <Button class="hero__btn" variant="dark">
        <Icon name="lucide:arrow-down" />
      </Button>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero__btn {
  position: absolute;
  left: $g-offset;
  bottom: vw(16);
  width: vw(48);
  height: vw(48);
  background-color: var(--bg-muted-75);
  backdrop-filter: blur(vw(50));

  span {
    width: vw(18);
    height: vw(18);
    animation: bounce 2s ease-in-out infinite alternate;

    @media (max-width: $br1) {
      width: 18px;
      height: 18px;
    }
  }

  @media (max-width: $br1) {
    left: $g-sm;
    bottom: 16px;
    backdrop-filter: blur(50px);
    width: 48px;
    height: 48px;
  }

  @media (max-width: $br3) {
    left: $g-s;
  }
}

.hero__t {
  @include heading-h1;
  max-width: vw(864);

  @media (max-width: $br1) {
    max-width: 500px;
  }

  @media (max-width: $br4) {
    max-width: 100%;
  }
}

@keyframes bounce {
  0% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(5px);
  }
}
</style>
