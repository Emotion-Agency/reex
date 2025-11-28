<script lang="ts" setup>
const navItems = [
  { label: 'Головна', href: '/' },
  { label: 'Послуги', href: '/services' },
  { label: 'Про компанію', href: '/about' },
  { label: 'Блог', href: '/blog' },
]
</script>

<template>
  <header class="header">
    <NuxtLink to="/" class="header__logo">
      <IconsLogo />
    </NuxtLink>
    <nav class="header__nav" role="navigation">
      <ul class="header__nav-list">
        <li
          v-for="item in navItems"
          :key="item.label"
          class="header__nav-item underline"
        >
          <NuxtLink :to="item.href">
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
      <Button class="header__nav-button" tag="nuxt-link" to="/contact">
        Замовити персонал
      </Button>
      <SwitchLanguage />
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: vw(16) vw(32);
  z-index: 100;

  @media (max-width: $br1) {
    padding: 12px 24px;
    gap: 10px;
  }
}

.header__logo {
  display: block;
  width: vw(90);
  height: auto;

  @media (max-width: $br1) {
    width: 70px;
  }
}

.header__nav {
  display: flex;
  align-items: center;
  padding: vw(4);
  padding-left: vw(24);
  background-color: var(--bg-muted-75);
  border-radius: vw(12);

  @media (max-width: $br1) {
    padding: 8px;
    padding-left: 16px;
    border-radius: 8px;
  }
}

.header__nav-list {
  display: flex;
  align-items: center;
  gap: vw(24);
  flex: 1 0 auto;
  margin-right: vw(24);

  @media (max-width: $br1) {
    gap: 16px;
  }
}

.header__nav-item {
  position: relative;
  color: var(--foreground);
  @include text-med-p2;
}

.header__nav-button {
  color: var(--secondary);
  margin-right: vw(4);
  @include text-reg-p2;
}
</style>
