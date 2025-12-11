<script setup lang="ts">
interface iAppHeroProps {
  title: string
}

defineProps<iAppHeroProps>()
</script>

<template>
  <section class="app-hero">
    <div class="app-hero__wrapper container">
      <h1 class="app-hero__t">{{ title }}</h1>
      <Divider class="app-hero__divider" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.app-hero {
  padding-top: vw(164);

  @media (max-width: $br1) {
    padding-top: 100px;
  }
}

.app-hero__t {
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

.app-hero__divider {
  margin-top: vw(96);

  @media (max-width: $br1) {
    margin-top: 64px;
  }
}
</style>
