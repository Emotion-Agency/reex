<script setup lang="ts">
import imagesLoaded from 'imagesloaded'
import { useFonts } from '~/composables/fonts'

const { isInEditor } = useAppState()

useFonts()

const route = useRoute()

const { isFirstLoad, init } = useLoadingAnimation()
const isContacts = computed(() => route.path.includes('contacts'))

const loadingAnimation = async () => {
  window.escroll.disabled = true
  await init()
}

onMounted(async () => {
  const { detectOrientationChanges } = await import(
    '~/utils/detectLandscapeOrientation'
  )

  detectOrientationChanges()

  if (isInEditor.value) {
    isFirstLoad.value = false
    return
  }

  const ilInstance = imagesLoaded(document.body, { background: true })

  ilInstance.on('done', () => {
    loadingAnimation()
  })

  ilInstance.on('fail', () => {
    loadingAnimation()
  })
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
            <ClientOnly>
              <ApproveModal />
            </ClientOnly>
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
