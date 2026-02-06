<script setup lang="ts">
const props = defineProps<{
  progress: number
}>()

const { width } = useWindowSize()

const count = computed(() => (width.value < 960 ? 50 : 100))

// How many lines are affected around the current progress position
// Increase this value to spread the color/height effect wider
const influenceRange = computed(() => (width.value < 960 ? 7 : 14))

const center = computed(() => (props.progress / 100) * (count.value - 1))

const round = (n: number, p = 2) => Math.round(n * 10 ** p) / 10 ** p

// Weight (0–1) based on distance from the center line
// Controls both height and color intensity
const getWeight = (idx: number) => {
  const distance = Math.abs(idx - center.value)
  const raw = Math.max(0, 1 - distance / influenceRange.value)

  return round(raw, 2)
}

const getStyle = (idx: number) => {
  const weight = getWeight(idx)

  return {
    // Height amplification factor (increase multiplier for taller peaks)
    transform: `scaleY(${1 + weight * 1})`,
    '--w': weight,
  }
}
</script>

<template>
  <div class="progress-bar">
    <span v-for="(_, idx) in count" :key="idx" :style="getStyle(idx)" />
  </div>
</template>

<style scoped lang="scss">
.progress-bar {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: vw(20);
  margin-top: vw(32);
  color: var(--foreground);

  span {
    width: 1px;
    height: 100%;
    transform-origin: bottom;
    transition:
      transform 0.25s ease,
      opacity 0.25s ease;
    will-change: transform, opacity;
    background-color: currentColor;
    opacity: calc(0.25 + var(--w) * 0.75);
  }

  @media (max-width: $br1) {
    height: 14px;
    margin-top: 18px;
  }
}
</style>
