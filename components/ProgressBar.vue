<script lang="ts" setup>
const { width } = useWindowSize()

const count = computed(() => (width.value < 960 ? 50 : 100))
</script>

<template>
  <div class="progress-bar">
    <div v-for="(_, idx) in count" :key="idx" />
  </div>
</template>

<style lang="scss" scoped>
.progress-bar {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: vw(20);
  margin-top: vw(32);

  span {
    width: 1px;
    height: 100%;
    background-color: var(--foreground);
  }

  @media (max-width: $br1) {
    margin-top: 18px;
    height: 14px;
  }
}
</style>
