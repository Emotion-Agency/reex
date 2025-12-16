<script lang="ts" setup>
import type { IEventArgs } from '@emotionagency/emotion-scroll'
import { useNavigationStory } from '~/composables/stories/navigationStory'

const { story: navigationStory } = await useNavigationStory()

const isVisible = ref(true)
const isHovered = ref(false)
const mousePaused = ref(true)

watch(isVisible, value => {
  if (value) {
    document.body.classList.remove('nav-hidden')
  } else {
    document.body.classList.add('nav-hidden')
  }
})

const isFixed = () => {
  if (getScrollEl().classList.contains('full-page')) {
    return false
  }
  return window.escroll ? window.escroll.disabled : false
}

const toggleVisible = (value: boolean) => {
  if (isVisible.value !== value) {
    isVisible.value = value
  }
}

const toggleMousePaused = (value: boolean) => {
  if (mousePaused.value !== value) {
    mousePaused.value = value
  }
}

const onScroll = (e: IEventArgs) => {
  if (isHovered.value) {
    return
  }

  const isDisabledClass =
    document.documentElement.classList.contains('header-disabled')
  if ((e.direction === 1 && !isFixed() && e.position > 0) || isDisabledClass) {
    toggleVisible(false)
    toggleMousePaused(false)
  } else {
    toggleMousePaused(true)
    toggleVisible(true)
  }
}

const onMouseMove = (e: MouseEvent) => {
  if (isFixed()) {
    return
  }

  if (mousePaused.value) {
    return
  }
  if (window.innerWidth < 560) {
    return
  }

  if (document.documentElement.classList.contains('header-disabled')) {
    toggleVisible(false)
    isHovered.value = false
    return
  }

  if (e.screenY <= 200) {
    toggleVisible(true)
    isHovered.value = true
  } else {
    toggleVisible(false)
    isHovered.value = false
  }
}

onMounted(async () => {
  window.escroll.on(onScroll)

  document.addEventListener('mousemove', onMouseMove)
})

onBeforeUnmount(() => {
  document.removeEventListener('mousemove', onMouseMove)
})
</script>

<template>
  <header class="header">
    <HeaderDesktop
      class="header__desk"
      :navigation="navigationStory?.content"
    />
    <HeaderMobile class="header__mob" :navigation="navigationStory?.content" />
  </header>
</template>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  width: 100%;
  padding: vw(16) $g-offset;
  z-index: 100;
  transition:
    transform 1s ease,
    opacity 1s ease;
  will-change: transform, opacity;

  @media (max-width: $br1) {
    padding: 12px $g-sm;
    gap: 10px;
  }

  @media (max-width: $br3) {
    padding: 12px $g-s;
  }
}

.header__logo {
  display: block;
  width: vw(90);
  height: auto;

  @media (max-width: $br1) {
    width: 70px;
  }
}

.header__desk {
  display: flex;

  @media (max-width: $br1) {
    display: none;
  }
}

.header__mob {
  display: none;

  @media (max-width: $br1) {
    display: block;
  }
}
</style>
