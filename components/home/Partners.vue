<script setup lang="ts"></script>

<template>
  <section class="partners">
    <div class="partners__wrapper container">
      <div class="partners__line" />
      <HomePartnersSlider />
    </div>
  </section>
</template>

<style scoped lang="scss">
.partners {
  padding-top: vw(144);

  @media (max-width: $br1) {
    padding-top: 100px;
  }
}

.partners__line {
  width: 100%;
  height: 1px;
  background-color: var(--foreground-muted-10);
}
</style>
