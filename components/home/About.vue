<script setup lang="ts">
import type { iHomeAbout } from '~/types/stories/home/homeTypes'
import { gsap, ScrollTrigger } from '~/libs/gsap'
import { delayPromise } from '@emotionagency/utils'

interface IProps {
  content: iHomeAbout
}

defineProps<IProps>()

const localePath = useLocalePath()

const imgRefs = ref<HTMLElement[]>([])
const triggers: ScrollTrigger[] = []
const $el = ref<HTMLElement | null>(null)

const animate = () => {
  if (!imgRefs.value.length) return

  imgRefs.value.forEach(el => {
    const tl = gsap.timeline()

    tl.fromTo(
      el,
      { y: '-25%' },
      {
        y: '25%',
        ease: 'none',
      }
    )

    const st = ScrollTrigger.create({
      trigger: el,
      animation: tl,
      start: () => 'top bottom',
      end: () => `bottom+=${window.innerHeight} bottom`,
      scrub: true,
    })

    triggers.push(st)
  })
}

useDetectHeaderColor($el as Ref<HTMLElement>)

onMounted(() => {
  animate()
})

onBeforeUnmount(async () => {
  await delayPromise(1500)
  triggers.forEach(t => t.kill())
})
</script>

<template>
  <section ref="$el" class="about">
    <div class="container about__wrapper">
      <Pill variant="light"> {{ content?.tag }}</Pill>
      <ColoredText
        :content="content?.colored_title"
        as="h2"
        variant="light"
        class="about__t"
      />
      <DualButton
        class="about__btn"
        tag="nuxt-link"
        :to="localePath(normalizePath(content?.link[0]?.url?.cached_url))"
        variant="secondary"
      >
        {{ content?.link[0]?.label }}
      </DualButton>
    </div>
    <div class="about__imgs">
      <div
        ref="imgRefs"
        v-for="img in content?.assets"
        :key="img._uid"
        class="about__img"
      >
        <CustomImage :width="360" :src="img?.filename" :alt="img?.alt" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about {
  position: relative;
  background-color: var(--foreground);
  color: var(--secondary);
  margin-top: vw(144);
  overflow: hidden;

  @media (min-width: $br1) {
    height: 100dvh;
    min-height: vw(810);
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
  border-radius: vw(12);
  overflow: hidden;

  &:nth-child(1) {
    top: 0;
    right: vw(216);
    width: vw(264);
    height: vw(274);
  }
  &:nth-child(2) {
    bottom: vw(177);
    left: vw(-12);
    width: vw(264);
    height: vw(264);
  }
  &:nth-child(3) {
    bottom: 0;
    right: vw(-12);
    width: vw(360);
    height: vw(260);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
