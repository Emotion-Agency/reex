<script setup lang="ts">
import type { IDualButtonProps } from '~/types/button'

const props = withDefaults(defineProps<IDualButtonProps>(), {
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
    class="dual-button"
    :class="[`dual-button--${props.variant}`]"
  >
    <span class="dual-button__left">
      <slot />
    </span>
    <span class="dual-button__right">
      <Icon name="lucide:chevron-right" />
    </span>
  </component>
</template>

<style scoped lang="scss">
.dual-button {
  display: flex;
  align-items: center;
  width: 100%;
  height: vw(48);
  background-color: transparent;
  z-index: 1;

  @media (max-width: $br1) {
    height: 48px;
  }

  &--primary {
    .dual-button__left {
      color: var(--secondary);
      background-color: var(--foreground);

      &::after {
        background-color: var(--foreground);
      }
    }

    .dual-button__right {
      background-color: var(--primary);

      &::before {
        background-color: var(--primary);
      }
    }
  }

  &--secondary {
    .dual-button__left {
      color: var(--foreground);
      background-color: var(--secondary);

      &::after {
        background-color: var(--secondary);
      }
    }

    .dual-button__right {
      color: var(--foreground);
      background-color: var(--primary);

      &::before {
        background-color: var(--primary);
      }
    }
  }
}

.dual-button__left {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 vw(20);
  padding-right: vw(10);
  border-radius: vw(12);
  height: 100%;
  margin-right: vw(16);
  @include text-reg-p2;

  &:after {
    content: '';
    position: absolute;
    height: 100%;
    width: 1.5em;
    border-top-right-radius: vw(12);
    border-bottom-right-radius: vw(12);
    transform: skew(-12deg);
    top: 0;
    right: vw(-6);
    z-index: -1;

    @media (max-width: $br1) {
      border-top-right-radius: 12px;
      border-bottom-right-radius: 12px;
      right: -6px;
    }
  }

  @media (max-width: $br1) {
    padding: 0 20px;
    padding-right: 10px;
    border-radius: 12px;
    margin-right: 16px;
  }
}

.dual-button__right {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: vw(12);
  height: 100%;
  padding: vw(16);
  padding-left: vw(12);

  @media (max-width: $br1) {
    border-radius: 12px;
    padding: 16px;
    padding-left: 12px;
  }

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 1.5em;
    border-top-left-radius: vw(14);
    border-bottom-left-radius: vw(16);
    transform: skew(-12deg);
    top: 0;
    left: vw(-4);

    @media (max-width: $br1) {
      border-top-left-radius: 14px;
      border-bottom-left-radius: 16px;
      left: -4px;
    }
  }

  span {
    width: vw(18);
    height: vw(18);

    @media (max-width: $br1) {
      width: 18px;
      height: 18px;
    }
  }
}
</style>
