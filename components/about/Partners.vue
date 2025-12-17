<script setup lang="ts">
import type { iAboutPartners } from '~/types/stories/about/aboutTypes'

interface IProps {
  content: iAboutPartners
}

defineProps<IProps>()

const localePath = useLocalePath()
</script>

<template>
  <section class="a-partners">
    <div class="a-partners__wrapper container">
      <Divider />
      <div class="grid a-partners__content">
        <div class="a-partners__t-wrapper">
          <Pill>{{ content?.tag }}</Pill>
          <h3 class="a-partners__t">
            {{ content?.title }}
          </h3>
          <DualButton
            class="a-partners__btn"
            tag="nuxt-link"
            :to="localePath(normalizePath(content?.link[0]?.url?.cached_url))"
          >
            {{ content?.link[0].label }}
          </DualButton>
        </div>
        <ul class="a-partners__list">
          <li
            v-for="logo in content?.logos"
            :key="logo?._uid"
            class="a-partners__item"
          >
            <CustomImage
              :src="logo?.filename"
              :alt="logo?.alt"
              :width="126"
              class="a-partners__logo"
            />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.a-partners {
  padding-top: vw(248);
  padding-bottom: vw(100);

  @media (max-width: $br1) {
    padding-top: 100px;
  }
}

.a-partners__content {
  margin-top: vw(48);

  @media (max-width: $br1) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: $br3) {
    margin-top: 32px;
  }
}

.a-partners__t-wrapper {
  @media (min-width: $br1) {
    @include col(1, 4);
  }
}

.a-partners__t {
  margin-top: vw(24);
  @include heading-h3;

  @media (max-width: $br1) {
    max-width: 400px;
    margin-top: 16px;
  }

  @media (max-width: $br3) {
    max-width: 100%;
  }
}

.a-partners__btn {
  width: fit-content;
  margin-top: vw(48);

  @media (max-width: $br1) {
    margin-top: 32px;
  }
}

.a-partners__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (min-width: $br1) {
    @include col(7, 12);
  }

  @media (max-width: $br1) {
    margin-top: 42px;
  }

  @media (max-width: $br2) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.a-partners__item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: vw(220);
  border-right: 1px solid var(--foreground-muted-10);
  border-bottom: 1px solid var(--foreground-muted-10);
  box-sizing: border-box;

  @media (max-width: $br1) {
    padding: 12px;
    height: 200px;
  }

  @media (min-width: $br2) {
    &:nth-child(3n) {
      border-right: none;
    }

    &:nth-last-child(-n + 3) {
      border-bottom: none;
    }
  }

  @media (max-width: $br2) {
    border-right: 1px solid var(--foreground-muted-10);
    border-bottom: 1px solid var(--foreground-muted-10);

    &:nth-child(2n) {
      border-right: none;
    }

    &:nth-last-child(-n + 2) {
      border-bottom: none;
    }
  }
}

.a-partners__logo {
  width: vw(126);
  height: auto;

  @media (max-width: $br1) {
    width: 110px;
  }

  @media (max-width: $br4) {
    width: 80px;
  }
}
</style>
