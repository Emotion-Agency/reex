<script setup lang="ts">
import type { NavigationItem } from '~/constants/navigation'

interface ServiceDropdownProps {
  navItem: NavigationItem
  isHeader?: boolean
}

defineProps<ServiceDropdownProps>()

const isAccordionOpened = ref(false)
const dropdownRef = ref(null)

const toggleAccordion = () => {
  isAccordionOpened.value = !isAccordionOpened.value
}

onClickOutside(dropdownRef, () => {
  isAccordionOpened.value = false
})
</script>

<template>
  <div
    ref="dropdownRef"
    class="service-dropdown"
    :class="{
      'service-dropdown--opened': isAccordionOpened,
      'service-dropdown--header': isHeader,
    }"
  >
    <button
      type="button"
      class="service-dropdown__btn"
      @click="toggleAccordion"
    >
      {{ navItem.label }}
      <Icon name="lucide:chevron-down" />
    </button>
    <div class="service-dropdown__body">
      <div class="service-dropdown__list">
        <NuxtLink
          v-for="(link, idx) in navItem.links"
          :key="idx"
          :to="link.url"
          class="service-dropdown__link"
        >
          {{ link.label }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.service-dropdown {
  position: relative;

  &--opened {
    .service-dropdown__body {
      max-height: 999px;
    }

    .service-dropdown__btn {
      span {
        transform: rotate(180deg);
      }
    }
  }

  &--header {
    .service-dropdown__btn {
      color: var(--foreground);
      @include text-med-p2;

      &:hover {
        color: var(--foreground-muted-50);
      }
    }
  }
}

.service-dropdown__btn {
  display: flex;
  align-items: center;
  background-color: transparent;
  gap: vw(4);
  color: var(--secondary);
  transition: color 0.3s ease;

  &:hover {
    color: var(--bg-muted-75);
  }

  @media (max-width: $br1) {
    gap: 4px;
  }

  span {
    transition: transform 0.3s ease;
    width: vw(14);
    height: vw(14);

    @media (max-width: $br1) {
      width: 14px;
      height: 14px;
    }
  }
}

.service-dropdown__body {
  background-color: var(--background-secondary);
  border-radius: vw(12);
  width: vw(202);
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
  position: absolute;
  top: vw(24);
  z-index: 10;

  @media (max-width: $br1) {
    width: 200px;
    border-radius: 12px;
    top: 20px;
  }
}

.service-dropdown__list {
  padding: 4px;
}

.service-dropdown__link {
  display: block;
  width: fit-content;
  color: var(--foreground);
  padding: vw(11) vw(12);
  transition: background-color 0.3s ease;
  border-radius: vw(8);
  width: 100%;
  @include text-reg-p2;

  @media (max-width: $br1) {
    padding: 12px;
    border-radius: 8px;
  }

  &:hover {
    background-color: var(--foreground-muted-10);
  }

  &::before {
    background-color: var(--secondary);
  }
}
</style>
