<script setup lang="ts">
import type { iRichTextDoc } from '~/types/stories/richTextTypes'

type TextTag = 'p' | 'h1' | 'h2'

interface iColoredTextProps {
  content: iRichTextDoc
  variant?: 'light' | 'dark'
  as?: TextTag
}

const props = withDefaults(defineProps<iColoredTextProps>(), {
  as: 'p',
  variant: 'dark',
})

const parts = computed(() => {
  const paragraph = props.content?.content?.[0]
  if (!paragraph || paragraph.type !== 'paragraph') return []

  return paragraph.content ?? []
})
</script>

<template>
  <component
    :is="as"
    class="colored-text"
    :class="[`colored-text--${as}`, `colored-text--${variant}`]"
  >
    <span
      v-for="(part, idx) in parts"
      :key="idx"
      :class="part.marks?.length ? 'accent' : 'base'"
    >
      {{ part.text }}
    </span>
  </component>
</template>

<style scoped lang="scss">
.colored-text {
  &--dark {
    .base {
      color: var(--foreground);
    }

    .accent {
      color: var(--foreground-muted-50);
    }
  }

  &--light {
    .base {
      color: var(--secondary);
    }

    .accent {
      color: var(--bg-muted-50);
    }
  }

  &--p {
    @include text-reg-p2;
  }
  &--h1 {
    @include heading-h1;
  }
  &--h2 {
    @include heading-h2;
  }
}
</style>
