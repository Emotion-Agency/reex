<script setup lang="ts">
interface iNewsHeroProps {
  title: string
}

defineProps<iNewsHeroProps>()
</script>

<template>
  <section class="hero">
    <div class="hero__wrapper container">
      <h1 class="hero__t">{{ title }}</h1>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  padding-bottom: vw(96);
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
</style>
