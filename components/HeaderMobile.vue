<script lang="ts" setup>
import navigationList from '~/constants/navigation'

const { isMenuOpened } = useAppState()

const toggleMenu = () => {
  isMenuOpened.value = !isMenuOpened.value
}
</script>

<template>
  <div class="header-mob" :class="{ 'header-mob--opened': isMenuOpened }">
    <div class="header-mob__wrapper">
      <NuxtLink to="/" class="header-mob__logo">
        <IconsLogo />
      </NuxtLink>
      <div class="header-mob__right">
        <Button tag="button" class="header-mob__menu-btn" @click="toggleMenu">
          <span />
          <span />
        </Button>
        <SwitchLanguage />
      </div>
    </div>
    <div class="header-mob__content-wrapper">
      <div class="header-mob__content">
        <nav class="header-mob__nav">
          <ul class="header-mob__nav-list">
            <li
              v-for="item in navigationList"
              :key="item.label"
              class="header-mob__nav-item"
            >
              <NuxtLink :to="item.link.url">
                {{ item.label }}
              </NuxtLink>
              <div
                v-if="item.link.url.includes('services')"
                class="header-mob__divider"
              />
            </li>
          </ul>

          <Button
            class="header-mob__nav-button"
            tag="nuxt-link"
            to="/contact"
            variant="primary"
          >
            Замовити персонал
          </Button>
        </nav>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-mob {
  height: 100%;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  max-height: 60px;
  color: var(--secondary);
  transition:
    max-height 0.4s ease-in-out,
    background-color 0.4s ease-in-out;
  backdrop-filter: blur(50px);
  background-color: var(--background-secondary);

  &--opened {
    background-color: var(--foreground);
    max-height: 999px;

    .header-mob__menu-btn {
      background-color: var(--secondary);
      padding: 0 13px;

      span {
        background-color: var(--foreground);

        &:first-child {
          transform: translateY(3px) rotate(45deg);
        }

        &:last-child {
          transform: translateY(-4px) rotate(-45deg);
        }
      }
    }
  }
}

.header-mob__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px;
  padding-left: 20px;
}

.header-mob__logo {
  width: 70px;
}

.header-mob__right {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  gap: 8px;
}

.header-mob__menu-btn {
  display: flex;
  flex-direction: column;
  width: 44px;
  gap: 5px;
  padding: 0 10px;
  z-index: 10;
  transition:
    padding 0.3s ease,
    background-color 0.3s ease;

  span {
    height: 2px;
    width: 100%;
    background-color: var(--secondary);
    transition:
      transform 0.3s ease,
      background-color 0.3s ease;
  }
}

.header-mob__content-wrapper {
  padding: 16px;
  padding-top: 32px;
}

.header-mob__nav-list {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  line-height: 1.17em;
  letter-spacing: -0.01em;
  @include heading-h4;
}

.header-mob__divider {
  width: 100%;
  height: 1px;
  background-color: var(--bg-muted-10);
  margin-top: 16px;
}

.header-mob__nav-button {
  margin-top: 64px;
}
</style>
