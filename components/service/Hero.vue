<script setup lang="ts">
interface iServiceHeroProps {
  title: string
  description: string
}

defineProps<iServiceHeroProps>()
</script>

<template>
  <section class="hero">
    <div class="hero__wrapper container">
      <h1 class="hero__t">{{ title }}</h1>
      <Divider class="hero__divider" />
      <div class="hero__d-wrapper">
        <Button class="hero__btn" variant="dark">
          <Icon name="lucide:arrow-down" />
        </Button>
        <p class="hero__d">
          {{ description }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  padding-bottom: vw(48);
  padding-top: vw(164);

  @media (max-width: $br1) {
    padding-bottom: 32px;
    padding-top: 100px;
  }
}

.hero__t {
  max-width: vw(864);
  @include heading-h1;

  @media (max-width: $br1) {
    max-width: 500px;
  }

  @media (max-width: $br4) {
    max-width: 100%;
  }

  span {
    color: var(--foreground-muted-50);
  }
}

.hero__divider {
  margin-top: vw(96);

  @media (max-width: $br1) {
    margin-top: 64px;
  }
}

.hero__d-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: vw(32);

  @media (max-width: $br1) {
    margin-top: 24px;
    flex-direction: column-reverse;
    gap: 18px;
  }
}

.hero__d {
  max-width: vw(448);
  @include heading-h4;

  @media (max-width: $br1) {
    max-width: 320px;
  }

  @media (max-width: $br4) {
    max-width: 100%;
  }
}

.hero__btn {
  pointer-events: none;
  width: vw(48);
  height: vw(48);

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
    backdrop-filter: blur(50px);
    width: 48px;
    height: 48px;
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
