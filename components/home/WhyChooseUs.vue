<script setup lang="ts">
import type { iWhyChoose } from '~/types/stories/home/homeTypes'
import CustomImage from '../CustomImage.vue'

interface IProps {
  content: iWhyChoose
}

defineProps<IProps>()
</script>

<template>
  <section class="choose">
    <div class="container choose__wrapper">
      <div class="choose__divider" />
      <div class="grid choose__content">
        <div class="choose__info">
          <Pill> {{ content?.tag }} </Pill>
          <h3 class="choose__t">
            {{ content?.title }}
          </h3>
        </div>
        <ul class="choose__list">
          <li
            v-for="item in content?.advantage_items"
            :key="item._uid"
            class="choose__i"
          >
            <CustomImage
              :width="83"
              :src="item?.icon?.filename"
              :alt="item?.icon?.alt"
              class="choose__icon"
            />
            <div class="choose__i-content">
              <h4 class="choose__i-t">
                {{ item.title }}
              </h4>
              <p class="choose__i-d">
                {{ item.text }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.choose {
  padding-top: vw(240);

  @media (max-width: $br1) {
    padding-top: 100px;
  }
}

.choose__divider {
  position: relative;
  width: 100%;
  height: vw(12);
  border-left: 1px solid var(--foreground-muted-10);
  border-right: 1px solid var(--foreground-muted-10);
  border-top: 1px solid var(--foreground-muted-10);
  border-radius: vw(8) vw(8) 0 0;

  @media (max-width: $br1) {
    height: 10px;
    border-radius: 8px 8px 0 0;
  }
}

.choose__content {
  margin-top: vw(48);

  @media (max-width: $br1) {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    margin-top: 32px;
  }
}

.choose__info {
  @media (min-width: $br1) {
    @include col(1, 4);
  }
}

.choose__t {
  @include heading-h3;
  margin-top: vw(24);

  @media (max-width: $br1) {
    margin-top: 16px;
    max-width: 412px;
  }

  @media (max-width: $br3) {
    max-width: 100%;
  }
}

.choose__list {
  display: flex;
  flex-direction: column;
  row-gap: vw(48);

  @media (min-width: $br1) {
    @include col(7, 11);
  }

  @media (max-width: $br1) {
    row-gap: 32px;
  }
}

.choose__i {
  display: flex;
  align-items: center;
  gap: vw(24);

  @media (max-width: $br1) {
    gap: 18px;
  }
}

.choose__icon {
  width: vw(48);
  height: vw(48);

  @media (max-width: $br1) {
    width: 42px;
    height: 42px;
  }
}

.choose__i-t {
  @include heading-h4;
}

.choose__i-d {
  margin-top: vw(12);
  @include text-reg-p1;

  @media (max-width: $br1) {
    margin-top: 8px;
    max-width: 75%;
  }

  @media (max-width: $br3) {
    max-width: 100%;
  }
}
</style>
