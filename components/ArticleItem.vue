<script setup lang="ts">
import type { iArticleCategory } from '~/types/stories/news/articleTypes'
import type { iImage, iStory } from '~/types/stories/story'

interface ArticlesProps {
  asset: iImage
  category: iStory<iArticleCategory>[]
  date: string
  title: string
  link: string
}

defineProps<ArticlesProps>()
</script>

<template>
  <li class="article-item">
    <NuxtLink :to="`/${link}`" class="article-item__link">
      <div class="article-item__img-wrapper">
        <img
          :src="asset?.filename"
          :alt="asset?.alt"
          class="article-item__img"
        />
      </div>
      <div class="article-item__info">
        <Tag>
          {{ category[0]?.content?.name }}
        </Tag>
        <p class="article-item__date">
          {{ date }}
        </p>
      </div>
      <p class="article-item__text">
        {{ title }}
      </p>
    </NuxtLink>
  </li>
</template>

<style lang="scss" scoped>
.article-item {
  &:hover {
    .article-item__img {
      transform: scale(1);
    }
  }
}

.article-item__img-wrapper {
  overflow: hidden;
  border-radius: vw(16);

  @media (max-width: $br1) {
    border-radius: 16px;
  }
}

.article-item__img {
  aspect-ratio: 448/264;
  object-fit: cover;
  width: 100%;
  transform: scale(1.15);
  transition: transform 0.3s ease;
}

.article-item__info {
  display: flex;
  align-items: center;
  gap: vw(12);
  margin-top: vw(16);

  @media (max-width: $br1) {
    margin-top: 14px;
    gap: 8px;
  }
}

.article-item__date {
  @include text-reg-p2;
}

.article-item__text {
  @include heading-h4;
  margin-top: vw(24);

  @media (max-width: $br1) {
    margin-top: 18px;
  }
}
</style>
