<script setup lang="ts">
import type { iRichTextDoc } from '~/types/stories/richTextTypes'

interface iAppHeroProps {
  coloredTitle: iRichTextDoc
  isContacts?: boolean
}

defineProps<iAppHeroProps>()
</script>

<template>
  <section class="app-hero" :class="{ 'app-hero--contacts': isContacts }">
    <div class="app-hero__wrapper container">
      <ColoredText
        data-split
        as="h1"
        :content="coloredTitle"
        class="app-hero__t"
      />
      <Divider data-o class="app-hero__divider" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.app-hero {
  padding-top: vw(164);

  @media (max-width: $br1) {
    padding-top: 100px;
  }

  &--contacts {
    .app-hero__t {
      max-width: vw(520);

      @media (max-width: $br1) {
        max-width: 280px;
      }

      @media (max-width: $br4) {
        max-width: 100%;
      }
    }
  }
}

.app-hero__t {
  max-width: vw(864);
  @include heading-h1;

  @media (max-width: $br1) {
    max-width: 500px;
  }

  @media (max-width: $br4) {
    max-width: 100%;
  }

  span {
    color: var(--foreground-muted-50);
  }
}

.app-hero__divider {
  margin-top: vw(96);

  @media (max-width: $br1) {
    margin-top: 64px;
  }
}
</style>
