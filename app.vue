<script setup lang="ts">
import { useFonts } from '~/composables/fonts'

useFonts()

const route = useRoute()

const isContacts = computed(() => route.path.includes('contacts'))

onMounted(async () => {
  const { hello } = await import('~/utils/hello')
  const { detectOrientationChanges } = await import(
    '~/utils/detectLandscapeOrientation'
  )

  detectOrientationChanges()
  hello()
})

useHead({
  htmlAttrs: {
    lang: 'en',
    id: 'scroll-container',
  },
})
</script>

<template>
  <div id="app">
    <Head>
      <Title>Reex</Title>
      <Meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></Meta>
      <Link rel="icon" type="image/x-icon" href="/favicon.ico"></Link>
    </Head>
    <AppGrid />
    <!-- <Landscape /> -->
    <SmoothScroll>
      <NuxtLayout>
        <div class="layout-content">
          <AppHeader />
          <main class="layout-content__main">
            <NuxtPage />
          </main>
          <AppFooter v-if="!isContacts" />
        </div>
      </NuxtLayout>
    </SmoothScroll>
    <ToastGroup />
  </div>
</template>

<style scoped lang="scss">
.layout-content {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

.layout-content__main {
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>
