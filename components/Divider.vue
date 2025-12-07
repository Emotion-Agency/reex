<script setup lang="ts"></script>

<template>
  <div class="partners__divider" />
</template>

<style lang="scss">
.partners__divider {
  position: relative;
  width: 100%;
  height: vw(12);
  border-left: 1px solid var(--foreground-muted-10);
  border-right: 1px solid var(--foreground-muted-10);
  border-top: 1px solid var(--foreground-muted-10);
  border-radius: vw(8) vw(8) 0 0;

  @media (max-width: $br1) {
    height: 10px;
    border-radius: 8px 8px 0 0;
  }
}
</style>
