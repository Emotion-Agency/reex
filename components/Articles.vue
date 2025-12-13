<script setup lang="ts">
import { useNewsStories } from '~/composables/stories/news/newsStories'

interface ArticlesProps {
  title: string
  isButton?: boolean
}

const props = withDefaults(defineProps<ArticlesProps>(), {
  isButton: false,
})

const { news } = await useNewsStories('news')
</script>

<template>
  <div class="articles">
    <div class="container articles__wrapper">
      <div class="articles__top">
        <h2 v-if="title" class="articles__t">
          {{ title }}
        </h2>
        <DualButton
          v-if="isButton"
          tag="nuxt-link"
          to="/news"
          class="articles__btn"
        >
          Усі статті
        </DualButton>
      </div>
      <ul class="articles__list">
        <ArticleItem
          v-for="article in news.slice(0, 3)"
          :key="article?._uid"
          :asset="article?.content?.asset"
          :category="article?.content?.category"
          :date="article?.content?.date"
          :title="article?.content?.title"
          :link="article?.full_slug"
        />
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

.articles__t {
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
</style>
