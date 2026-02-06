<script setup lang="ts">
import type { IButtonProps } from '~/types/button'

const props = withDefaults(defineProps<IButtonProps>(), {
  tag: 'button',
  type: 'button',
  variant: 'dark',
})

const tag = computed(() => {
  if (props.tag === 'nuxt-link') {
    return resolveComponent('NuxtLink')
  } else return props.tag ?? 'button'
})

const to = props.tag === 'nuxt-link' ? props.href : undefined
const href = props.tag === 'a' ? props.href : undefined
</script>

<template>
  <component
    :is="tag"
    :type="type"
    :to="to"
    :href="href"
    :target="props.tag === 'a' ? '_blank' : undefined"
    :rel="props.tag === 'a' ? 'noreferrer noopener' : undefined"
    class="button"
    :class="[`button--${props.variant}`]"
  >
    <slot />
  </component>
</template>

<style scoped lang="scss">
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: vw(44);
  border-radius: vw(12);
  padding: vw(0) vw(16);
  position: relative;
  z-index: 1;
  text-align: center;
  @include text-reg-p2;

  @media (max-width: $br1) {
    height: 44px;
    border-radius: 12px;
    padding: 0 12px;
  }

  &--dark {
    background-color: var(--foreground);
    color: var(--secondary);
    transition:
      background-color 0.3s ease,
      color 0.3s ease;

    &:hover {
      background-color: var(--foreground-muted-85);
    }
  }

  &--light {
    color: var(--foreground);
    background-color: var(--foreground-muted-10);
    transition:
      background-color 0.3s ease,
      color 0.3s ease;

    &:hover {
      background-color: var(--foreground-muted-14);
    }
  }

  &--primary {
    background-color: var(--primary);
    color: var(--foreground);
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
    @include text-med-p2;

    &:hover {
      background-color: var(--primary-85);
    }
  }
}
</style>
