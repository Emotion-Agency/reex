<script lang="ts" setup>
import type { iNavigationContent } from '~/types/stories/navigationTypes'

interface iHeaderDesktopProps {
  navigation: iNavigationContent
}

const props = defineProps<iHeaderDesktopProps>()

const { isMenuOpened } = useAppState()
const isServicesOpened = ref(false)
const localePath = useLocalePath()
const route = useRoute()

const toggleMenu = () => {
  isMenuOpened.value = !isMenuOpened.value
}

const toggleServices = () => {
  isServicesOpened.value = !isServicesOpened.value
}

watch(
  () => route.fullPath,
  () => {
    isMenuOpened.value = false
    isServicesOpened.value = false
  }
)
</script>

<template>
  <div class="header-mob" :class="[{ 'header-mob--opened': isMenuOpened }]">
    <div class="header-mob__wrapper">
      <NuxtLink :to="localePath('/')" class="header-mob__logo">
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

    <nav class="header-mob__nav">
      <ul class="header-mob__nav-list">
        <li
          v-for="item in navigation?.items"
          :key="item?._uid"
          class="header-mob__nav-item"
        >
          <div
            v-if="item?.component === 'nav_dropdown'"
            class="header-mob__submenu"
            :class="{
              'header-mob__submenu--opened': isServicesOpened,
            }"
          >
            <button
              type="button"
              class="header-mob__submenu-btn"
              @click="toggleServices"
            >
              {{ item?.label }}

              <Icon name="lucide:chevron-down" />
            </button>
            <div class="header-mob__submenu-body">
              <div class="header-mob__submenu-list">
                <NuxtLink
                  v-for="(link, idx) in item?.items"
                  :key="idx"
                  :to="`/${link?.full_slug}`"
                  class="header-mob__submenu-link"
                >
                  {{ link?.content?.title }}
                </NuxtLink>
              </div>
            </div>
            <div class="header-mob__line" />
          </div>
          <NuxtLink
            v-else
            :to="localePath(normalizePath(item?.url?.cached_url))"
            class="header-mob__nav-link"
          >
            {{ item?.label }}
          </NuxtLink>
        </li>
      </ul>

      <Button
        class="header-mob__cta"
        tag="nuxt-link"
        :to="localePath(normalizePath(navigation?.button[0]?.url?.cached_url))"
        variant="primary"
      >
        {{ navigation?.button[0]?.label }}
      </Button>
    </nav>
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

    .header-mob__logo {
      color: var(--secondary);
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
  color: var(--foreground);
  height: auto;
  width: 70px;

  svg {
    transition: color 0.3s ease;
  }
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

.header-mob__nav {
  padding: 16px;
  padding-top: 32px;

  .router-link-active {
    &.header-mob__nav-link {
      color: var(--bg-muted-50);
    }
  }
}

.header-mob__nav-list {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

.header-mob__submenu-btn {
  background-color: transparent;
  color: var(--secondary);
  line-height: 1.17em;
  letter-spacing: -0.01em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @include heading-h4;

  span {
    width: 20px;
    height: 20px;
    transition: transform 0.5s ease-in-out;
  }
}

.header-mob__nav-link {
  background-color: transparent;
  color: var(--secondary);
  line-height: 1.17em;
  letter-spacing: -0.01em;
  transition: color 0.3s ease;
  @include heading-h4;
}

.header-mob__submenu {
  &--opened {
    .header-mob__submenu-body {
      max-height: 999px;
    }

    .header-mob__submenu-btn {
      span {
        transform: rotate(180deg);
      }
    }
  }

  .router-link-active {
    &.header-mob__submenu-link {
      color: var(--bg-muted-50);
    }
  }
}

.header-mob__submenu-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
}

.header-mob__submenu-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
}

.header-mob__submenu-link {
  transition: color 0.3s ease;
  @include text-reg-p2;
}

.header-mob__line {
  width: 100%;
  height: 1px;
  background-color: var(--bg-muted-10);
  margin-top: 16px;
}

.header-mob__cta {
  margin-top: 64px;
}
</style>
