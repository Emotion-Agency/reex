<script setup lang="ts">
import useEmbla from '~/composables/useEmblaSlider'
import type { iAssetsList } from '~/types/stories/about/aboutTypes'

interface IProps {
  content: iAssetsList
}

defineProps<IProps>()

const { emblaRef } = useEmbla({
  slidesToScroll: 1,
  container: '.assets-list__container',
  loop: true,
  watchDrag: true,
  align: 'center',
  autoplay: { delay: 1800, stopOnInteraction: false },
})
</script>

<template>
  <section class="assets-list" ref="emblaRef">
    <ul class="assets-list__container">
      <li
        v-for="img in content?.assets"
        :key="img?._uid"
        class="assets-list__slide"
      >
        <CustomImage
          :src="img?.filename"
          :alt="img?.alt"
          :width="564"
          class="assets-list__img"
        />
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
.assets-list {
  padding: vw(248) 0;

  @media (max-width: $br1) {
    padding-top: 100px 0;
  }
}

.assets-list__container {
  display: flex;
}

.assets-list__slide {
  display: flex;
  overflow: hidden;
  min-width: 0;
  flex: 0 0 45%;
  aspect-ratio: 564/376;
  margin-right: vw(12);
  border-radius: vw(12);

  @media (max-width: $br1) {
    flex: 0 0 90%;
    border-radius: 12px;
    margin-right: 16px;
  }
}

.assets-list__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
