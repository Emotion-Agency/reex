<script setup lang="ts">
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
} from 'reka-ui'
import type { iCooperationItem } from '~/types/stories/home/homeTypes'

interface CoopStepsAccordionProps {
  steps: iCooperationItem[]
  modelValue: string
}

defineProps<CoopStepsAccordionProps>()

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <AccordionRoot
    type="single"
    :model-value="modelValue"
    @update:model-value="emit('update:modelValue', $event)"
    class="coop-steps-a"
  >
    <AccordionItem
      v-for="step in steps"
      :key="step._uid"
      :value="String(step._uid)"
      class="coop-steps-a__item"
    >
      <AccordionHeader>
        <AccordionTrigger class="coop-steps-a__main">
          <h4 class="coop-steps-a__t">{{ step.title }}</h4>
          <div class="coop-steps-a__plus">
            <span />
            <span />
          </div>
        </AccordionTrigger>
      </AccordionHeader>

      <AccordionContent class="coop-steps-a__content">
        <p class="coop-steps-a__d">{{ step.description }}</p>
      </AccordionContent>
    </AccordionItem>
  </AccordionRoot>
</template>

<style scoped lang="scss">
.coop-steps-a {
  @media (min-width: $br1) {
    @include col(7, 12);
  }

  @media (max-width: $br1) {
    margin-top: 36px;
  }
}

.coop-steps-a__item {
  border-top: 1px solid var(--foreground-muted-10);

  &:hover {
    .coop-steps-a__t {
      color: var(--foreground);
    }
  }

  &[data-state='open'] {
    .coop-steps-a__t {
      color: var(--foreground);
    }

    .coop-steps-a__plus {
      span {
        &:last-child {
          transform: translate(-50%, -50%) rotate(0);
          background-color: var(--foreground);
        }
      }
    }
  }
}

.coop-steps-a__main {
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: vw(8);
  background-color: transparent;
  width: 100%;
  padding: vw(24) 0;

  @media (max-width: $br1) {
    gap: 8px;
    padding: 18px 0;
  }
}

.coop-steps-a__plus {
  position: relative;
  width: vw(20);
  height: vw(20);
  flex: 0 0 auto;

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 2px;
    background-color: var(--foreground-muted-50);
    transition:
      transform 0.3s ease,
      background-color 0.3s ease;

    &:last-child {
      transform: translate(-50%, -50%) rotate(90deg);
    }
  }

  @media (max-width: $br1) {
    width: 16px;
    height: 16px;
  }
}

.coop-steps-a__t {
  @include heading-h4;
  color: var(--foreground-muted-50);
  transition: color 0.3s ease;
  text-align: start;
}

.coop-steps-a__content {
  overflow: hidden;

  &[data-state='open'] {
    animation: slideDown 300ms ease-out;
  }

  &[data-state='closed'] {
    animation: slideUp 300ms ease-out;
  }
}

.coop-steps-a__d {
  @include text-reg-p1;
  margin-bottom: vw(24);

  @media (max-width: $br1) {
    margin-bottom: 18px;
  }
}

@keyframes slideDown {
  from {
    height: 0;
  }
  to {
    height: var(--reka-accordion-content-height);
  }
}

@keyframes slideUp {
  from {
    height: var(--reka-accordion-content-height);
  }
  to {
    height: 0;
  }
}
</style>
