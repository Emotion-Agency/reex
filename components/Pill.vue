<script lang="ts" setup>
interface PillProps {
  variant?: 'light' | 'dark'
}

const props = withDefaults(defineProps<PillProps>(), {
  variant: 'dark',
})
</script>

<template>
  <div class="pill" :class="[`pill--${props.variant}`]">
    <span />
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.pill {
  display: flex;
  align-items: center;
  gap: vw(8);
  @include text-med-p1;

  @media (max-width: $br1) {
    gap: 6px;
  }

  &--light {
    color: var(--secondary);
  }

  &--dark {
    color: var(--foreground);
  }
}

.pill span {
  width: vw(12);
  height: vw(12);
  border-radius: vw(2);
  background-color: var(--primary);

  @media (max-width: $br1) {
    width: 8px;
    height: 8px;
    border-radius: 2px;
  }
}
</style>
