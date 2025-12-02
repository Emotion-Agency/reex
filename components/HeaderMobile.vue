<script lang="ts" setup>
const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="header-mob">
    <div class="header-mob__wrapper">
      <NuxtLink to="/" class="header-mob__logo">
        <IconsLogo />
      </NuxtLink>
      <div class="header-mob__right">
        <Button
          tag="button"
          class="header-mob__menu-btn"
          :class="{ 'header-mob__menu-btn--opened': isOpen }"
          @click="toggleMenu"
        >
          <span class="header-mob__menu-line" />
          <span class="header-mob__menu-line" />
        </Button>
        <SwitchLanguage />
      </div>
    </div>
    <div
      class="header-mob__content-wrapper"
      :class="{ 'header-mob__content-wrapper--opened': isOpen }"
    >
      <div class="header-mob__content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, sapiente
        vitae voluptates minima aspernatur nemo accusamus vero perferendis neque
        dolor, officia placeat? Sit, quisquam, voluptatem fuga adipisci
        voluptatum animi veniam optio laborum numquam, maxime velit sapiente
        aperiam repellendus unde nam ipsum amet tempore dicta nobis! Tempora ea
        voluptas animi reprehenderit illum. Maxime dolorem maiores, unde beatae
        voluptatum error odit sint.
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-mob {
  width: 100%;
}
.header-mob__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: var(--foreground-muted-10);
  backdrop-filter: blur(50px);
  padding: 8px;
  padding-left: 20px;
  border-radius: 12px;
}

.header-mob__logo {
  width: 70px;
}

.header-mob__right {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-direction: row-reverse;
}

.header-mob__menu-btn {
  display: flex;
  flex-direction: column;
  width: 44px;
  gap: 5px;
  padding: 0 10px;

  .header-mob__menu-line {
    height: 2px;
    width: 100%;
    background: var(--secondary);
    border-radius: 2px;
    transition:
      transform 0.3s ease,
      opacity 0.2s ease;
    transform-origin: center;
  }

  &--opened {
    span {
      &:first-child {
        transform: translateY(3px) rotate(45deg);
      }

      &:last-child {
        transform: translateY(-4px) rotate(-45deg);
      }
    }
  }
}

.header-mob__content-wrapper {
  max-height: 0;
  pointer-events: none;
  overflow: hidden;
  opacity: 0;
  transition:
    opacity 0.3s ease,
    max-height 0.3s ease;

  &--opened {
    opacity: 1;
    max-height: 999px;
    pointer-events: auto;
  }
}
</style>
