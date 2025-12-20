<script lang="ts" setup>
import type { iRichTextDoc } from '~/types/stories/richTextTypes'

interface iRightsProps {
  copyrightText: iRichTextDoc
  madeByText: string
  isContacts?: boolean
}

defineProps<iRightsProps>()
</script>

<template>
  <div class="rights" :class="{ 'rights--contacts': isContacts }">
    <ColoredText
      v-if="copyrightText?.content?.length"
      :content="copyrightText"
      :variant="isContacts ? 'dark' : 'light'"
      class="rights__text"
    />
    <div v-if="madeByText" class="rights__created-by">
      <span>{{ madeByText }} {{ ' ' }}</span>
      <a
        href="https://www.emotion-agency.com/"
        target="_blank"
        rel="noopener noreferrer"
        class="underline rights__by"
      >
        Emotion Agency
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.rights {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: vw(144);
  @include text-reg-p2;

  @media (max-width: $br1) {
    margin-top: 80px;
  }

  @media (max-width: $br3) {
    flex-direction: column;
    row-gap: 12px;
  }

  &--contacts {
    .rights__created-by {
      color: var(--foreground-muted-50);
    }

    .rights__by {
      color: var(--foreground);
      &::before {
        background-color: var(--foreground);
      }
    }
  }
}

.rights__text {
  position: relative;
}

.rights__created-by {
  color: var(--bg-muted-50);
}

.rights__by {
  position: relative;
  color: var(--secondary);

  &::before {
    background-color: var(--secondary);
  }
}
</style>
