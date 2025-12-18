<script lang="ts" setup>
import { useNavigationStory } from '~/composables/stories/navigationStory'

const { story: navigationStory } = await useNavigationStory()

useHeaderInteraction()
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
  z-index: 100;
  display: flex;
  padding: vw(16) $g-offset;
  transition: transform 1s ease;

  @media (max-width: $br1) {
    padding: 12px $g-sm;
    gap: 10px;
  }

  @media (max-width: $br3) {
    padding: 12px $g-s;
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
