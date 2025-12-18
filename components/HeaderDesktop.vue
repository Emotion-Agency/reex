<script lang="ts" setup>
import type { iNavigationContent } from '~/types/stories/navigationTypes'

interface iHeaderDesktopProps {
  navigation: iNavigationContent
}

const props = defineProps<iHeaderDesktopProps>()

const localePath = useLocalePath()

const { headerColor, $headerRef } = useHeaderColor()
</script>

<template>
  <div
    ref="$headerRef"
    class="header-desk"
    :class="`header-desk--${headerColor}`"
  >
    <NuxtLink
      :to="localePath('/')"
      aria-label="Site logo"
      class="header-desk__logo"
    >
      <IconsLogo />
    </NuxtLink>
    <nav class="header-desk__nav">
      <ul class="header-desk__nav-list">
        <li
          v-for="item in navigation?.items"
          :key="item?._uid"
          class="header-desk__nav-item"
        >
          <ServiceDropdown
            v-if="item?.component === 'nav_dropdown'"
            :services="item"
            is-header
          />
          <NuxtLink
            v-else
            :to="localePath(normalizePath(item?.url?.cached_url))"
            class="header-desk__nav-link underline"
          >
            {{ item?.label }}
          </NuxtLink>
        </li>
      </ul>
      <Button
        class="header-desk__nav-button"
        tag="nuxt-link"
        :to="localePath(normalizePath(navigation?.button[0]?.url?.cached_url))"
      >
        {{ navigation?.button[0]?.label }}
      </Button>
      <SwitchLanguage />
    </nav>
  </div>
</template>

<style scoped lang="scss">
.header-desk {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &--white {
    .header-desk__logo {
      color: var(--secondary);
    }
  }
}

.header-desk__logo {
  display: block;
  width: vw(90);
  height: auto;
  color: var(--foreground);

  svg {
    transition: color 0.3s ease;
  }
}

.header-desk__nav {
  position: relative;
  display: flex;
  align-items: center;
  padding: vw(4);
  padding-left: vw(24);
  border-radius: vw(12);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: var(--bg-muted-75);
    backdrop-filter: blur(vw(50));
    pointer-events: none;
    border-radius: inherit;
  }

  .router-link-active {
    &.underline {
      &::before {
        width: 100% !important;
      }
    }
  }
}

.header-desk__nav-list {
  display: flex;
  align-items: center;
  gap: vw(24);
  flex: 1 0 auto;
  margin-right: vw(24);
}

.header-desk__nav-item {
  position: relative;
}

.header-desk__nav-link {
  color: var(--foreground);
  background-color: transparent;
  transition: color 0.3s ease;
  @include text-med-p2;

  &--button {
    display: flex;
    align-items: center;
    gap: vw(4);

    &:hover {
      color: var(--foreground-muted-50);
    }

    span {
      width: vw(12);
      height: vw(12);
    }
  }
}

.header-desk__nav-button {
  color: var(--secondary);
  margin-right: vw(4);
  @include text-reg-p2;
}
</style>
