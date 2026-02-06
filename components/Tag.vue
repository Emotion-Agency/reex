<script setup lang="ts"></script>

<template>
  <div class="tag">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.tag {
  padding: vw(5) vw(12);
  border-radius: vw(8);
  backdrop-filter: blur(vw(50));
  background-color: var(--foreground-muted-7);
  @include text-reg-p1;

  @media (max-width: $br1) {
    padding: 5px 12px;
    border-radius: 8px;
    backdrop-filter: blur(50px);
  }
}
</style>
