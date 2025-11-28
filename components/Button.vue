<script setup lang="ts">
import type { IButtonProps } from '~/types/button'

const props = withDefaults(defineProps<IButtonProps>(), {
  tag: 'button',
  type: 'button',
  variant: 'primary',
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
    <span class="button__text" :class="[`button__text--${props.variant}`]">
      <slot />
    </span>
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
  color: var(--foreground);
  padding: vw(0) vw(16);

  @media (max-width: $br1) {
    height: 44px;
    border-radius: 12px;
    padding: 0 12px;
  }

  &--primary {
    background-color: var(--foreground);
    transition: background-color 0.3s ease;

    &:hover {
      background-color: var(--foreground-muted-85);
    }
  }

  &--secondary {
    width: vw(44);
    padding: 0;
    background-color: var(--foreground-muted-10);
    transition: background-color 0.3s ease;

    &:hover {
      background-color: var(--foreground-muted-14);
    }

    @media (max-width: $br1) {
      width: 44px;
    }
  }
}

.button__text {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  @include text-reg-p2;
}
</style>
