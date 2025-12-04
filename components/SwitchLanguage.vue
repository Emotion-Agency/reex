<script setup lang="ts">
const { isMenuOpened } = useAppState()
const { setLocale, locales, locale } = useI18n()

const nextLocale = computed(() =>
  locales.value.find(l => l.code !== locale.value)
)

const handleClick = async () => {
  await nextTick()
  await setLocale(nextLocale.value.code)
  window.location.reload()
}
</script>

<template>
  <div class="switch-lang" :class="{ 'switch-lang--menu': isMenuOpened }">
    <Button
      class="switch-lang__btn"
      tag="button"
      variant="light"
      @click="handleClick"
    >
      {{ nextLocale?.code }}
    </Button>
  </div>
</template>

<style lang="scss" scoped>
.switch-lang {
  &--menu {
    .switch-lang__btn {
      background-color: var(--bg-muted-10);
      color: var(--secondary);
    }
  }
}

.switch-lang__btn {
  width: vw(44);
  text-transform: uppercase;

  @media (max-width: $br1) {
    width: 44px;
  }
}
</style>
