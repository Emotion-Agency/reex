<script setup lang="ts">
import type { IMultipleButtonProps } from '~/types/button'
import type { iNewsCategoriesContent } from '~/types/stories/news/newsCategoriesTypes'
import type { iStory } from '~/types/stories/story'

interface iArticlesFilterProps {
  categories: iStory<iNewsCategoriesContent>[]
  allCategories: string
  active: string
}

defineProps<iArticlesFilterProps>()

const emit = defineEmits(['change'])

const getDirection = (index: number): IMultipleButtonProps['direction'] => {
  if (index === 0) return 'right-up-down'
  if (index % 2 === 1) return 'down-up'
  return 'up-down'
}

const select = (value: string) => {
  emit('change', value)
}
</script>

<template>
  <section class="a-filter">
    <ul class="a-filter__list">
      <li class="a-filter__item">
        <MultipleButton
          :direction="getDirection(0)"
          :is-active="active === 'all'"
          @click="select('all')"
        >
          {{ allCategories }}
        </MultipleButton>
      </li>

      <li
        v-for="(category, index) in categories"
        :key="category.id || index"
        class="a-filter__item"
      >
        <MultipleButton
          :direction="getDirection(index + 1)"
          :is-active="active === category.content.name"
          @click="select(category.content.name)"
        >
          {{ category?.content?.name }}
        </MultipleButton>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
.a-filter__list {
  display: flex;
  gap: vw(16);
  white-space: nowrap;

  @media (max-width: $br1) {
    gap: 16px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
