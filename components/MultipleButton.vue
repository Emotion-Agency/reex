<script setup lang="ts">
import type { IMultipleButtonProps } from '~/types/button'

const props = withDefaults(defineProps<IMultipleButtonProps>(), {
  tag: 'button',
  type: 'button',
  variant: 'primary',
  direction: 'right-up-down',
})

const tag = computed(() => {
  if (props.tag === 'nuxt-link') {
    return resolveComponent('NuxtLink')
  } else return props.tag ?? 'button'
})

const to = props.tag === 'nuxt-link' ? props.href : undefined
const href = props.tag === 'a' ? props.href : undefined

const leftDirections = ['down-up', 'up-down', 'left-down-up', 'left-up-down']
const rightDirections = ['down-up', 'up-down', 'right-down-up', 'right-up-down']

const showLeft = computed(() => leftDirections.includes(props.direction))
const showRight = computed(() => rightDirections.includes(props.direction))

const leftClass = computed(() =>
  showLeft.value ? `multiple-button__left-part--${props.direction}` : ''
)

const rightClass = computed(() =>
  showRight.value ? `multiple-button__right-part--${props.direction}` : ''
)
</script>

<template>
  <component
    :is="tag"
    :type="type"
    :to="to"
    :href="href"
    :target="props.tag === 'a' ? '_blank' : undefined"
    :rel="props.tag === 'a' ? 'noreferrer noopener' : undefined"
    class="multiple-button"
    :class="[
      `multiple-button--${props.variant}`,
      { 'multiple-button--active': isActive },
    ]"
  >
    <span
      v-if="showLeft"
      class="multiple-button__left-part"
      :class="leftClass"
    />
    <span
      class="multiple-button__content"
      :class="[props.isIcons && `multiple-button__content--${props.direction}`]"
    >
      <slot />
    </span>
    <span
      v-if="showRight"
      class="multiple-button__right-part"
      :class="rightClass"
    />
  </component>
</template>

<style lang="scss">
.multiple-button {
  position: relative;
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
    .multiple-button__content {
      background-color: var(--background-secondary);
      color: var(--foreground);
    }

    .multiple-button__left-part,
    .multiple-button__right-part {
      background-color: var(--background-secondary);
    }

    &:hover {
      .multiple-button__content {
        background-color: var(--foreground);
        color: var(--secondary);
      }

      .multiple-button__left-part,
      .multiple-button__right-part {
        background-color: var(--foreground);
      }
    }
  }

  &--secondary {
    .multiple-button__content {
      background-color: #1a2c3d;
      color: var(--secondary);
    }

    .multiple-button__left-part,
    .multiple-button__right-part {
      background-color: #1a2c3d;
    }

    &:hover {
      .multiple-button__content {
        background-color: var(--secondary);
        color: var(--foreground);
      }

      .multiple-button__left-part,
      .multiple-button__right-part {
        background-color: var(--secondary);
      }
    }
  }

  &--active {
    .multiple-button__content {
      background-color: var(--foreground);
      color: var(--secondary);
    }

    .multiple-button__left-part,
    .multiple-button__right-part {
      background-color: var(--foreground);
    }
  }
}

.multiple-button__content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 vw(20);
  border-radius: vw(12);
  height: 100%;
  transform: scale(1.005);
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  @include text-reg-p2;

  @media (max-width: $br1) {
    padding: 0 20px;
    border-radius: 12px;
  }

  svg {
    width: vw(28);
    height: vw(28);

    @media (max-width: $br1) {
      width: 28px;
      height: 28px;
    }
  }

  &--up-down,
  &--down-up {
    padding: 0 vw(12);

    @media (max-width: $br1) {
      padding: 0 12px;
    }
  }

  &--right-down-up {
    padding-right: vw(12);

    @media (max-width: $br1) {
      padding-right: 12px;
    }
  }

  &--left-down-up {
    padding-left: vw(12);

    @media (max-width: $br1) {
      padding-left: 12px;
    }
  }
}

.multiple-button__left-part {
  position: absolute;
  height: 100%;
  width: 1.5em;
  border-top-left-radius: vw(12);
  border-bottom-left-radius: vw(12);
  top: 0;
  left: vw(-6);
  z-index: -1;
  backface-visibility: hidden;
  will-change: transform;
  transition: background-color 0.3s ease;

  @media (max-width: $br1) {
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    left: -6px;
  }

  &--up-down {
    transform: translateZ(0) skew(12deg);
  }

  &--down-up {
    transform: translateZ(0) skew(-12deg);
  }

  &--left-down-up {
    transform: translateZ(0) skew(-12deg);
  }

  &--left-up-down {
    transform: translateZ(0) skew(12deg);
  }
}

.multiple-button__right-part {
  position: absolute;
  height: 100%;
  width: 1.5em;
  border-top-right-radius: vw(12);
  border-bottom-right-radius: vw(12);
  top: 0;
  right: vw(-6);
  backface-visibility: hidden;
  will-change: transform;
  z-index: -1;
  transition: background-color 0.3s ease;

  @media (max-width: $br1) {
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    right: -6px;
  }

  &--up-down {
    transform: translateZ(0) skew(-12deg);
  }

  &--down-up {
    transform: translateZ(0) skew(12deg);
  }

  &--right-down-up {
    transform: translateZ(0) skew(12deg);
  }

  &--right-up-down {
    transform: translateZ(0) skew(-12deg);
  }
}
</style>
