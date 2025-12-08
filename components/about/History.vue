<script setup lang="ts">
import type { iHistory } from '~/types/stories/about/aboutTypes'

interface IProps {
  content: iHistory
}

const props = defineProps<IProps>()
</script>

<template>
  <section class="history">
    <div class="container history__wrapper">
      <h2 class="history__t">
        {{ content?.title }}
      </h2>
      <div class="history__line" />
      <AboutHistoryCarousel
        :carousel-items="content?.items"
        :text="content?.text"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.history {
  padding-top: vw(248);

  @media (max-width: $br1) {
    padding-top: 100px;
  }
}

.history__t {
  max-width: vw(680);
  @include heading-h2;

  @media (max-width: $br1) {
    max-width: 420px;
  }

  @media (max-width: $br3) {
    max-width: 100%;
  }

  span {
    color: var(--foreground-muted-50);
  }
}

.history__line {
  width: 100%;
  height: 1px;
  background-color: var(--foreground-muted-10);
  margin-top: vw(64);

  @media (max-width: $br1) {
    margin-top: 48px;
  }
}
</style>
