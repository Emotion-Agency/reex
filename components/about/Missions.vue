<script setup lang="ts">
import type { iMissions } from '~/types/stories/about/aboutTypes'
import CustomImage from '../CustomImage.vue'

interface IProps {
  content: iMissions
}

defineProps<IProps>()
</script>

<template>
  <section class="missions">
    <div class="container missions__wrapper">
      <Divider />
      <div class="grid missions__content">
        <div class="missions__info">
          <Pill> {{ content?.tag }} </Pill>
          <h3 class="missions__t">
            {{ content?.title }}
          </h3>
        </div>
        <ul class="missions__list">
          <li
            v-for="item in content?.items"
            :key="item._uid"
            class="missions__i"
          >
            <CustomImage
              :width="83"
              :src="item?.icon?.filename"
              :alt="item?.icon?.alt"
              class="missions__icon"
            />
            <div class="missions__i-content">
              <h4 class="missions__i-t">
                {{ item.title }}
              </h4>
              <p class="missions__i-d">
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
.missions {
  padding-top: vw(144);

  @media (max-width: $br1) {
    padding-top: 100px;
  }
}

.missions__content {
  margin-top: vw(48);

  @media (max-width: $br1) {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    margin-top: 32px;
  }
}

.missions__info {
  @media (min-width: $br1) {
    @include col(1, 4);
  }
}

.missions__t {
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

.missions__list {
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

.missions__i {
  display: flex;
  align-items: center;
  gap: vw(40);

  @media (max-width: $br1) {
    gap: 28px;
  }
}

.missions__icon {
  width: vw(48);
  height: vw(48);

  @media (max-width: $br1) {
    width: 42px;
    height: 42px;
  }
}

.missions__i-t {
  @include heading-h4;
}

.missions__i-d {
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
