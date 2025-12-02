<script setup lang="ts">
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
} from 'reka-ui'

interface StagesAccordionProps {
  stages: { id: number; title: string; description: string }[]
  modelValue: string
}

defineProps<StagesAccordionProps>()

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <AccordionRoot
    type="single"
    :model-value="modelValue"
    @update:model-value="emit('update:modelValue', $event)"
    class="stages-a"
  >
    <AccordionItem
      v-for="stage in stages"
      :key="stage.id"
      :value="String(stage.id)"
      class="stages-a__item"
    >
      <AccordionHeader>
        <AccordionTrigger class="stages-a__main">
          <h4 class="stages-a__t">{{ stage.title }}</h4>
          <div class="stages-a__plus">
            <span />
            <span />
          </div>
        </AccordionTrigger>
      </AccordionHeader>

      <AccordionContent class="stages-a__content">
        <p class="stages-a__d">{{ stage.description }}</p>
      </AccordionContent>
    </AccordionItem>
  </AccordionRoot>
</template>

<style scoped lang="scss">
.stages-a {
  @media (min-width: $br1) {
    @include col(7, 12);
  }

  @media (max-width: $br1) {
    margin-top: 36px;
  }
}

.stages-a__item {
  border-top: 1px solid var(--foreground-muted-10);

  &:hover {
    .stages-a__t {
      color: var(--foreground);
    }
  }

  &[data-state='open'] {
    .stages-a__t {
      color: var(--foreground);
    }

    .stages-a__plus {
      span {
        &:last-child {
          transform: translate(-50%, -50%) rotate(0);
          background-color: var(--foreground);
        }
      }
    }
  }
}

.stages-a__divider {
  width: 100%;
  height: 1px;
  background-color: var(--foreground-muted-10);
}

.stages-a__main {
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

.stages-a__plus {
  position: relative;
  width: vw(20);
  height: vw(20);

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

.stages-a__t {
  @include heading-h4;
  color: var(--foreground-muted-50);
  transition: color 0.3s ease;
}

.stages-a__content {
  overflow: hidden;

  &[data-state='open'] {
    animation: slideDown 300ms ease-out;
  }

  &[data-state='closed'] {
    animation: slideUp 300ms ease-out;
  }
}

.stages-a__d {
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
