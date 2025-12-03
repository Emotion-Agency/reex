<script setup lang="ts">
const { isMenuOpened } = useAppState()
</script>

<template>
  <div class="switch-lang" :class="{ 'switch-lang--menu': isMenuOpened }">
    <Button class="switch-lang__btn" tag="button" variant="light"> En </Button>
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
