<script setup lang="ts">
import type { iHomeAbout } from '~/types/stories/home/homeTypes'

interface IProps {
  content: iHomeAbout
}

defineProps<IProps>()
</script>

<template>
  <section class="about">
    <div class="container about__wrapper">
      <Pill variant="light"> {{ content?.tag }}</Pill>
      <h2 class="about__t">
        {{ content?.text }}
      </h2>
      <DualButton
        class="about__btn"
        tag="nuxt-link"
        :to="content?.link[0]?.url?.cached_url"
        variant="secondary"
      >
        {{ content?.link[0].label }}
      </DualButton>
    </div>
    <div class="about__imgs">
      <CustomImage
        v-for="img in content?.assets"
        :key="img._uid"
        :width="360"
        :src="img?.filename"
        :alt="img?.alt"
        class="about__img"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.about {
  position: relative;
  background-color: var(--foreground);
  color: var(--secondary);
  margin-top: vw(144);

  @media (min-width: $br1) {
    height: 100dvh;
    min-height: 500px;
  }

  @media (max-width: $br1) {
    margin-top: 100px;
    padding: 100px 0;
  }
}

.about__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  height: 100%;
  z-index: 1;
}

.about__t {
  margin-top: vw(24);
  max-width: vw(680);
  @include heading-h2;

  @media (max-width: $br1) {
    max-width: 448px;
    margin-top: 18px;
  }

  @media (max-width: $br3) {
    max-width: 100%;
  }

  span {
    color: var(--bg-muted-50);
  }
}

.about__btn {
  width: fit-content;
  margin-top: vw(48);

  @media (max-width: $br1) {
    margin-top: 32px;
  }
}

.about__imgs {
  @media (max-width: $br1) {
    display: none;
  }
}

.about__img {
  position: absolute;
  object-fit: cover;
  border-radius: vw(12);

  &:nth-child(1) {
    top: 0;
    right: vw(216);
    width: vw(264);
    height: vw(274);
  }
  &:nth-child(2) {
    bottom: vw(177);
    left: 0;
    width: vw(264);
    height: vw(264);
  }
  &:nth-child(3) {
    bottom: 0;
    right: 0;
    width: vw(360);
    height: vw(260);
  }
}
</style>
