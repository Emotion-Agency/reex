<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: Object as () => NuxtError,
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <section class="error">
    <div class="error__bg-wrapper">
      <img
        src="/images/home-1.png"
        alt=""
        :width="1440"
        :video-attributes="{
          autoplay: true,
          playsinline: true,
          muted: true,
        }"
        class="error__bg"
      />
    </div>
    <div class="error__wrapper container">
      <h1 data-split class="error__t">
        {{ error.statusCode }}
      </h1>
      <p class="error__d">{{ error.message }}</p>
      <Button class="error__btn" variant="dark" @click="handleError">
        <Icon name="lucide:arrow-left" />
        Back
      </Button>
    </div>
  </section>
</template>

<style scoped lang="scss">
.error {
  position: relative;
  height: 100dvh;
  width: 100%;
}

.error__bg-wrapper {
  position: absolute;
  inset: 0;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
    pointer-events: none;
  }
}

.error__bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 0;
}

.error__wrapper {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  height: 100%;
  color: var(--secondary);
}

.error__t {
  @include heading-h1;
  max-width: vw(820);

  @media (max-width: $br1) {
    max-width: 500px;
  }

  @media (max-width: $br4) {
    max-width: 100%;
  }
}

.error__d {
  @include heading-h3;
  max-width: vw(820);
  margin-top: vw(12);

  @media (max-width: $br1) {
    margin-top: 8px;
    max-width: 500px;
  }

  @media (max-width: $br4) {
    max-width: 100%;
  }
}

.error__btn {
  display: flex;
  align-items: center;
  width: fit-content;
  height: vw(64);
  padding: 0 vw(30);
  margin-top: vw(56);
  gap: vw(8);
  @include heading-h4;

  @media (max-width: $br1) {
    height: 48px;
    padding: 0 18px;
    margin-top: 32px;
    gap: 8px;
  }

  span {
    width: vw(28);
    height: vw(28);

    @media (max-width: $br1) {
      width: 28px;
      height: 28px;
    }
  }
}
</style>
