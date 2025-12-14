<script setup lang="ts">
import type { iArticleContent } from '~/types/stories/news/articleTypes'

interface iArticlesListProps {
  content: iArticleContent
}

const props = defineProps<iArticlesListProps>()
</script>

<template>
  <section class="news-hero">
    <div class="news-hero__wrapper container">
      <div class="news-hero__info-bar">
        <Tag class="news-hero__tag">
          {{ content?.category[0]?.content?.name }}
        </Tag>
        <div class="news-hero__details">
          <p class="news-hero__date">{{ content?.date }}</p>
          <div class="news-hero__dot" />
          <p class="news-hero__remaining">3 хв на читання</p>
        </div>
      </div>
      <h1 class="news-hero__t">{{ content?.title }}</h1>
      <p class="news-hero__d">
        {{ content?.description }}
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.news-hero {
  padding: vw(164) 0;

  @media (max-width: $br1) {
    padding: 100px 0;
  }
}

.news-hero__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.news-hero__info-bar {
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: $br3) {
    flex-direction: column;
  }
}

.news-hero__details {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.news-hero__dot {
  display: block;
  width: vw(4);
  height: vw(4);
  border-radius: 100%;
  background-color: var(--foreground);

  @media (max-width: $br1) {
    width: 4px;
    height: 4px;
  }
}

.news-hero__t {
  @include heading-h2;
  letter-spacing: -0.01em;
  font-size: vw(80);
  margin-top: vw(16);
  max-width: vw(912);

  @media (max-width: $br1) {
    font-size: 42px;
    margin-top: 12px;
    max-width: 500px;
  }

  @media (max-width: $br4) {
    max-width: 100%;
  }
}

.news-hero__d {
  margin-top: vw(48);
  max-width: vw(678);
  @include heading-h4;

  @media (max-width: $br1) {
    margin-top: 32px;
    max-width: 400px;
  }

  @media (max-width: $br4) {
    max-width: 100%;
  }
}
</style>
