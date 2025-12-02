<script setup lang="ts">
interface BaseSelectProps {
  modelValue: string | null
  options: string[]
  placeholder?: string
}

const props = withDefaults(defineProps<BaseSelectProps>(), {
  placeholder: 'Select an option',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | null): void
  (e: 'change', value: string | null): void
}>()

const isOpen = ref(false)

const selectedLabel = computed(() => props.modelValue || props.placeholder)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectOption = (option: string) => {
  emit('update:modelValue', option)
  emit('change', option)
}

const handleClickOutside = (event: Event) => {
  if (!(event.target as HTMLElement).closest('.base-select')) {
    isOpen.value = false
  }
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onBeforeUnmount(() => document.removeEventListener('click', handleClickOutside))
</script>

<template>
  <div
    class="base-select"
    :class="{
      'base-select--opened': isOpen,
    }"
  >
    <div class="base-select__trigger" @click="toggleDropdown">
      <span class="base-select__value">
        {{ selectedLabel }}
      </span>
      <span class="base-select__arrow">
        <Icon name="lucide:chevron-down" />
      </span>
    </div>

    <div class="base-select__dropdown-wrapper">
      <ul class="base-select__dropdown">
        <li
          v-for="option in options"
          :key="option"
          class="base-select__item"
          :class="{ 'base-select__item--selected': option === modelValue }"
          @click="selectOption(option)"
        >
          <span />
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.base-select {
  position: relative;
  width: 100%;

  &--opened {
    .base-select__dropdown-wrapper {
      max-height: 300px;
      opacity: 1;
      pointer-events: auto;
    }

    .base-select__trigger {
      border-radius: vw(16) vw(16) 0 0;

      @media (max-width: $br1) {
        border-radius: 16px 16px 0 0;
      }

      &:hover {
        border-color: transparent;
      }
    }

    .base-select__arrow {
      transform: rotate(-180deg);
    }
  }
}

.base-select__trigger {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 vw(20);
  height: vw(56);
  border-radius: vw(16);
  background-color: var(--bg-muted-10);
  border: 1px solid transparent;
  transition:
    border-color 0.3s $easing,
    border-radius 0.4s $easing;
  cursor: pointer;

  &:hover {
    border-color: var(--primary);
  }

  @media (max-width: $br1) {
    height: 48px;
    border-radius: 16px;
    padding: 0 16px;
  }
}

.base-select__value {
  color: var(--secondary);
  @include text-reg-p1;
}

.base-select__arrow {
  transition: transform 0.3s $easing;

  span {
    width: vw(18);
    height: vw(18);

    @media (max-width: $br1) {
      width: 16px;
      height: 16px;
    }
  }
}

.base-select__dropdown-wrapper {
  position: absolute;
  z-index: 100;
  max-height: 0;
  opacity: 0;
  width: 100%;
  overflow: hidden;
  pointer-events: none;
  transition:
    max-height 0.2s ease,
    opacity 0.3s ease;
}

.base-select__dropdown {
  background-color: #1a2b3e;
  width: 100%;
  margin-top: 1px;
  border-radius: 0 0 vw(16) vw(16);
  overflow-y: auto;
  padding: vw(6);

  @media (max-width: $br1) {
    padding: 6px;
    border-radius: 0 0 16px 16px;
  }
}

.base-select__item {
  display: flex;
  align-items: center;
  gap: vw(12);
  padding: vw(12);
  cursor: pointer;
  background-color: transparent;
  border-radius: vw(12);
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  color: var(--bg-muted-50);
  @include text-reg-p1;

  @media (max-width: $br1) {
    border-radius: 12px;
    padding: 12px;
    gap: 8px;
  }

  span {
    width: vw(16);
    height: vw(16);
    border: 1px solid var(--bg-muted-20);
    border-radius: 50%;
    display: inline-block;
    position: relative;
    flex-shrink: 0;
    transition: border-color 0.2s ease;

    @media (max-width: $br1) {
      width: 16px;
      height: 16px;
    }

    &::after {
      content: '';
      position: absolute;
      inset: 50%;
      width: vw(8);
      height: vw(8);
      background-color: var(--primary);
      border-radius: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition: transform 0.2s ease;

      @media (max-width: $br1) {
        width: 8px;
        height: 8px;
      }
    }
  }

  &:hover {
    background-color: var(--bg-muted-10);
    color: var(--secondary);
  }

  &--selected {
    border-color: var(--primary);

    span {
      border-color: var(--primary);
      &::after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
}
</style>
