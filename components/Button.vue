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

const isSecondary = computed(() => props.variant === 'secondary')

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
      <!-- <IconsButtonBackground v-if="isSecondary" /> -->
      <div v-if="isSecondary" class="button__bg" />
      <slot />
    </span>

    <span v-if="isSecondary" class="button__icon">
      <IconsButtonChevron />
    </span>
  </component>
</template>

<style scoped lang="scss">
.button {
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;

  &--primary {
    height: vw(44);

    &:hover {
      .button__text--primary {
        background-color: var(--foreground-muted-85);
      }
    }
  }

  &--secondary {
    height: vw(48);
  }
}

.button__text {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--secondary);
  z-index: 1;
  @include text-reg-p2;

  &--primary {
    width: 100%;
    height: 100%;
    padding: vw(0) vw(16);
    background-color: var(--foreground);
    border-radius: vw(12);
    transition: background-color 0.3s ease;
  }

  &--secondary {
    padding: vw(0) vw(20);
    height: 100%;

    .button__bg {
      position: absolute;
      inset: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      background-color: var(--foreground);
      border-radius: vw(12);
    }
  }
}

.button__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  width: auto;

  svg {
    width: 100%;
    height: 100%;
  }
}
</style>
