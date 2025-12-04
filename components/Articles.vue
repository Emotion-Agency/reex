<script setup lang="ts">
import type { iArticleItem } from '~/types/stories/articlesTypes'

interface ArticlesProps {
  title: string
  articles: iArticleItem[]
  isButton?: boolean
}

withDefaults(defineProps<ArticlesProps>(), {
  isButton: false,
})
</script>

<template>
  <div class="articles">
    <div class="container articles__wrapper">
      <div class="articles__top">
        <h2 class="articles__main-t">
          {{ title }}
        </h2>
        <DualButton
          v-if="isButton"
          tag="nuxt-link"
          to="/blog"
          class="articles__btn"
        >
          Усі послуги
        </DualButton>
      </div>
      <ul class="articles__list">
        <li
          v-for="article in articles"
          :key="article._uid"
          class="articles__item"
        >
          <img
            :src="article?.asset?.filename"
            :alt="article?.asset?.alt"
            class="articles__img"
          />
          <div class="articles__info">
            <Tag>
              {{ article.category }}
            </Tag>
            <p class="articles__date">
              {{ article.date }}
            </p>
          </div>
          <p class="articles__text">
            {{ article.title }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.articles {
  padding-top: vw(250);
  padding-bottom: vw(192);

  @media (max-width: $br1) {
    padding: 100px 0;
  }
}

.articles__top {
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: $br3) {
    flex-direction: column;
    gap: 18px;
    align-items: start;
  }
}

.articles__main-t {
  @include heading-h2;
}

.articles__btn {
  width: fit-content;
}

.articles__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: vw(64);
  gap: vw(16);

  @media (max-width: $br1) {
    grid-template-columns: 1fr;
    margin-top: 48px;
    gap: 12px;
  }
}

.articles__img {
  border-radius: vw(16);
  aspect-ratio: 448/264;
  object-fit: cover;
  width: 100%;

  @media (max-width: $br1) {
    border-radius: 16px;
  }
}

.articles__info {
  display: flex;
  align-items: center;
  gap: vw(12);
  margin-top: vw(16);

  @media (max-width: $br1) {
    margin-top: 14px;
    gap: 8px;
  }
}

.articles__date {
  @include text-reg-p2;
}

.articles__text {
  @include heading-h4;
  margin-top: vw(24);

  @media (max-width: $br1) {
    margin-top: 18px;
  }
}
</style>
