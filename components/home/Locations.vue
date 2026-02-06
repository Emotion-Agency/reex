<script setup lang="ts">
import type { iLocations } from '~/types/stories/home/homeTypes'

interface IProps {
  content: iLocations
}

defineProps<IProps>()
</script>

<template>
  <section class="locations">
    <div class="locations__wrapper container">
      <div class="locations__content">
        <div class="locations__text-wrapper">
          <h3 class="locations__t">
            {{ content?.title }}
          </h3>
          <p class="locations__d">
            {{ content?.text }}
          </p>
        </div>
        <div class="locations__map">
          <img src="/map.svg" alt="Ukraine map" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.locations {
  padding-top: vw(250);

  @media (max-width: $br1) {
    padding-top: 100px;
  }
}

.locations__content {
  display: flex;
  background-color: var(--foreground-muted-10);
  border-radius: vw(16);

  @media (max-width: $br1) {
    flex-direction: column;
    border-radius: 16px;
    padding: 30px;
    gap: 30px;
  }
}

.locations__text-wrapper {
  padding: vw(48) vw(32);
  padding-bottom: vw(10);
  max-width: vw(480);
  flex-shrink: 0;

  @media (max-width: $br1) {
    padding: 0;
    max-width: 358px;
  }

  @media (max-width: $br3) {
    max-width: 100%;
  }
}

.locations__t {
  @include heading-h3;
}

.locations__d {
  @include text-reg-p1;
  margin-top: vw(32);
  max-width: vw(332);

  @media (max-width: $br1) {
    margin-top: 24px;
    max-width: 100%;
  }
}

.locations__map {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: vw(64);
  height: 100%;
  flex: 1;

  @media (max-width: $br1) {
    justify-content: center;
    padding: 0;
  }

  svg {
    height: 100%;
    width: 100%;
  }
}
</style>
