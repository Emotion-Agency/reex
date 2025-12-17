<script setup lang="ts">
import {
  DialogContent,
  DialogOverlay,
  DialogRoot,
  DialogClose,
  DialogTitle,
} from 'reka-ui'
import type { HtmlHTMLAttributes } from 'vue'

defineProps<{
  windowAttrs?: HtmlHTMLAttributes
}>()

const isOpen = defineModel<boolean>('open')

watch(isOpen, value => {
  window.escroll.disabled = value
})

onBeforeUnmount(() => {
  window.escroll.disabled = false
})
</script>

<template>
  <DialogRoot v-slot="{ open }" v-model:open="isOpen">
    <Transition name="dialog">
      <Teleport to="#teleports">
        <div v-if="open" class="dialog" v-bind="$attrs">
          <DialogOverlay class="dialog__backdrop" @click="isOpen = false" />
          <DialogContent
            class="dialog__window"
            :aria-describedby="undefined"
            v-bind="windowAttrs"
          >
            <DialogTitle class="dialog__title"> Dialog </DialogTitle>

            <DialogClose class="dialog__close" aria-label="Close dialog">
              <Icon name="lucide:x" />
            </DialogClose>
            <slot />
          </DialogContent>
        </div>
      </Teleport>
    </Transition>
  </DialogRoot>
</template>

<style scoped lang="scss">
.dialog {
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 200;
}

.dialog__backdrop {
  inset: 0;
  background-color: var(--backdrop);
  position: fixed;
  z-index: 1;
  backdrop-filter: blur(3px);
}

.dialog__window {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: rem(600);
  min-width: rem(520);
  overflow: hidden;
  background-color: var(--foreground);
  border-radius: var(--rounded-lg);
  height: 20vh;
  min-height: vw(250);
  padding: vw(20);
  transition: all 0.3s ease;
  border: 1px solid var(--primary);
  z-index: 2;

  @media (max-width: $br1) {
    min-height: 200px;
    padding: 16px;
  }

  @media (max-width: rem(540)) {
    min-width: auto;
    width: 90%;
  }
}

.dialog__close {
  position: absolute;
  top: vw(20);
  right: vw(20);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--secondary);
  background-color: var(--transparent);
  width: vw(30);
  height: vw(30);

  @media (max-width: $br1) {
    width: 24px;
    height: 24px;
    top: 16px;
    right: 16px;
  }

  span {
    transition: color 0.3s ease;
    width: 100%;
    height: 100%;
  }

  &:hover {
    color: var(--bg-muted-50);
  }
}

.dialog__title {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
}

.dialog-enter-from {
  opacity: 0;
  .dialog__window {
    opacity: 0;
    transform: translateY(50px);
  }
}

.dialog-enter-active,
.dialog-leave-active {
  transition: all 0.5s ease;
}

.dialog-enter,
.dialog-leave-to {
  opacity: 0;
  .dialog__window {
    opacity: 0;
    transform: translateY(50px);
  }
}
</style>
