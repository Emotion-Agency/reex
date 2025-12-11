<script setup lang="ts">
import { useNewsCategoriesStories } from '~/composables/stories/news/newsCategories'
import { useNewsStories } from '~/composables/stories/news/newsStories'

interface iArticlesListProps {
  text: string
  allCategoriesBtn: string
  showMoreBtn: string
}

const props = defineProps<iArticlesListProps>()

const { news } = await useNewsStories('news')
const { categories } = await useNewsCategoriesStories()

const activeCategory = ref('all')

const filteredNews = computed(() => {
  if (activeCategory.value === 'all') return news.value

  return news.value.filter(article =>
    article?.content?.category?.some(
      cat => cat?.content?.name === activeCategory.value
    )
  )
})

const setCategory = (cat: string) => {
  activeCategory.value = cat
}
</script>

<template>
  <section class="a-list">
    <div class="a-list__wrapper container">
      <div class="grid a-list__top">
        <NewsArticlesFilter
          class="a-list__filter"
          :categories="categories"
          :all-categories="allCategoriesBtn"
          :active="activeCategory"
          @change="setCategory"
        />
        <p class="a-list__text">
          {{ text }}
        </p>
      </div>
      <ul class="a-list__items">
        <ArticleItem
          v-for="(article, idx) in filteredNews"
          :key="idx"
          :asset="article?.content?.asset"
          :category="article?.content?.category"
          :date="article?.content?.date"
          :title="article?.content?.title"
          :link="article?.full_slug"
        />
      </ul>
      <DualButton direction="down" class="a-list__btn">
        {{ showMoreBtn }}
      </DualButton>
    </div>
  </section>
</template>

<style scoped lang="scss">
.a-list {
  padding-top: vw(32);
  padding-bottom: vw(192);

  @media (max-width: $br1) {
    padding-top: 24px;
    padding-bottom: 80px;
  }
}

.a-list__top {
  @media (max-width: $br1) {
    display: flex;
    flex-direction: column-reverse;
    gap: 38px;
  }
}

.a-list__filter {
  @media (min-width: $br1) {
    @include col(1, 6);
  }
}

.a-list__text {
  @include heading-h4;

  @media (min-width: $br1) {
    @include col(9, 12);
  }

  @media (max-width: $br1) {
    max-width: 400px;
  }

  @media (max-width: $br4) {
    max-width: 100%;
  }
}

.a-list__items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: vw(96);
  column-gap: vw(16);
  row-gap: vw(96);

  @media (max-width: $br1) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 24px;
  }

  @media (max-width: $br3) {
    grid-template-columns: 1fr;
  }
}

.a-list__btn {
  margin: 0 auto;
  width: fit-content;
  margin-top: vw(96);

  @media (max-width: $br1) {
    margin-top: 48px;
  }
}
</style>
