<script setup lang="ts">
import type { ICircleButton } from '~/types/button'

const props = withDefaults(defineProps<ICircleButton>(), {
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
    class="circle-button"
  >
    <slot />
  </component>
</template>

<style lang="scss">
.circle-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: vw(32);
  height: vw(32);
  border-radius: 100%;
  position: relative;
  z-index: 1;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  background-color: var(--background-secondary);
  color: var(--foreground);

  svg {
    display: block;
    width: vw(14);
    height: vw(14);

    @media (max-width: $br1) {
      width: 14px;
      height: 14px;
    }
  }

  @media (max-width: $br1) {
    width: 32px;
    height: 32px;
  }

  &:hover {
    background-color: var(--foreground);
    color: var(--secondary);
  }
}
</style>
