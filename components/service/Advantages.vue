<script setup lang="ts">
import type { iAdvantages } from '~/types/stories/service/serviceTypes'

interface iAdvantagesProps {
  content: iAdvantages
}

defineProps<iAdvantagesProps>()
</script>

<template>
  <section class="advantages">
    <div class="advantages__wrapper container">
      <Divider />
      <div class="advantages__top">
        <div class="advantages__t-wrapper">
          <Pill class="advantages__pill">{{ content?.tag }}</Pill>
          <h3 class="advantages__main-t">
            {{ content?.title }}
          </h3>
        </div>
        <DualButton
          tag="nuxt-link"
          :to="content?.link[0]?.url"
          class="advantages__btn"
        >
          {{ content?.link[0]?.label }}
        </DualButton>
      </div>
      <ul class="advantages__list">
        <li v-for="item in content?.advantage_items" class="advantages__item">
          <CustomImage
            :src="item.icon.filename"
            :alt="item.icon.alt"
            :width="64"
            class="advantages__img"
          />
          <div class="advantages__content">
            <h4 class="advantages__t">
              {{ item.title }}
            </h4>
            <p class="advantaegs__text">
              {{ item.text }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
.advantages {
  padding-top: vw(248);

  @media (max-width: $br1) {
    padding-top: 100px;
  }
}

.advantages__top {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  margin-top: vw(48);

  @media (max-width: $br1) {
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 32px;
  }
}

.advantages__t-wrapper {
  max-width: vw(448);

  @media (max-width: $br1) {
    max-width: 400px;
  }

  @media (max-width: $br3) {
    max-width: 100%;
  }
}

.advantages__main-t {
  margin-top: vw(24);
  @include heading-h3;

  @media (max-width: $br1) {
    margin-top: 18px;
  }
}

.advantages__btn {
  width: fit-content;

  @media (max-width: $br1) {
    margin-top: 16px;
  }
}

.advantages__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: vw(16);
  margin-top: vw(96);

  @media (max-width: $br1) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin-top: 78px;
  }

  @media (max-width: $br3) {
    grid-template-columns: 1fr;
  }
}

.advantages__item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: vw(16);
  border-radius: vw(16);
  background-color: var(--foreground-muted-7);
  min-height: vw(252);

  @media (max-width: $br1) {
    padding: 14px;
    border-radius: 16px;
    min-height: 230px;
  }
}

.advantages__img {
  width: vw(50);
  height: vw(50);
  object-fit: cover;

  @media (max-width: $br1) {
    width: 42px;
    height: 42px;
  }
}

.advantages__t {
  @include heading-h4;
}

.advantaegs__text {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: vw(12);
  @include text-reg-p1;

  @media (max-width: $br1) {
    margin-top: 12px;
  }
}
</style>
