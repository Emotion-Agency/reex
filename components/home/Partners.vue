<script setup lang="ts">
import { Vue3Marquee } from 'vue3-marquee'
import type { iPartners } from '~/types/stories/home/homeTypes'

interface IProps {
  content: iPartners
}

defineProps<IProps>()
</script>

<template>
  <section class="partners">
    <div class="partners__wrapper container">
      <div class="partners__divider" />
      <HomePartnersSlider :partners="content" />

      <div class="partners__marquee">
        <Vue3Marquee clone :duration="8" gradient gradientLength="100px">
          <img
            v-for="logo in content?.logos"
            :key="logo._uid"
            :src="logo.filename"
            :alt="logo.alt"
          />
        </Vue3Marquee>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.partners {
  padding-top: vw(144);

  @media (max-width: $br1) {
    padding-top: 100px;
  }
}

.partners__divider {
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

.partners__marquee {
  margin-top: vw(96);

  @media (max-width: $br1) {
    margin-top: 72px;
  }

  .marquee {
    img {
      height: auto;
      max-width: vw(112);
      margin-right: vw(60);

      @media (max-width: $br1) {
        max-width: 112px;
        margin-right: 32px;
      }
    }
  }
}
</style>
