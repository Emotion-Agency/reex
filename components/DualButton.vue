<script setup lang="ts">
import type { IDualButtonProps } from '~/types/button'

const props = withDefaults(defineProps<IDualButtonProps>(), {
  tag: 'button',
  type: 'button',
  variant: 'primary',
  direction: 'right',
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
    <span
      class="dual-button__right"
      :class="[`dual-button__right--${props.direction}`]"
    >
      <Icon name="lucide:arrow-right" />
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

    &:hover {
      .dual-button__left {
        color: var(--foreground);
        background-color: var(--primary);

        &::after {
          background-color: var(--primary);
          transform: translateZ(0) skew(12deg);
        }
      }

      .dual-button__right {
        color: var(--secondary);
        background-color: var(--foreground);
        transform: scale(0.9);

        &::before {
          background-color: var(--foreground);
          transform: translateZ(0) skew(12deg);
        }
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

    &:hover {
      .dual-button__left {
        color: var(--secondary);
        background-color: #1a2c3d;

        &::after {
          background-color: #1a2c3d;
          transform: skew(12deg);
        }
      }

      .dual-button__right {
        color: var(--foreground);
        background-color: var(--secondary);
        transform: scale(0.9);

        &::before {
          background-color: var(--secondary);
          transform: skew(12deg);
        }
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
  padding-left: vw(20);
  padding-right: vw(10);
  border-radius: vw(12);
  height: 100%;
  margin-right: vw(20);
  transform: scale(1.04);
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  @include text-reg-p2;

  &:after {
    content: '';
    position: absolute;
    height: 100%;
    width: 1.5em;
    border-top-right-radius: vw(12);
    border-bottom-right-radius: vw(12);
    transform: translateZ(0) skew(-12deg);
    backface-visibility: hidden;
    will-change: transform;
    top: 0;
    right: vw(-6);
    z-index: -1;
    transition:
      background-color 0.3s ease,
      transform 0.3s ease;

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
    margin-right: 20px;
  }
}

.dual-button__right {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: vw(12);
  height: 100%;
  padding-right: vw(16);
  padding-left: vw(12);
  transform: scale(1.04);
  transition:
    background-color 0.3s ease,
    color 0.3s ease,
    transform 0.3s ease;

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
    transform: translateZ(0) skew(-12deg);
    backface-visibility: hidden;
    will-change: transform;
    top: 0;
    left: vw(-4);
    transition:
      background-color 0.3s ease,
      transform 0.3s ease;

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

  &--right {
    span {
      transform: rotate(0);
    }
  }

  &--down {
    span {
      transform: rotate(90deg);
    }
  }
}
</style>
