<template>
  <header class="header">
    <ClientOnly>
      <HeaderDesktop class="header__desk" />
      <HeaderMobile class="header__mob" />
    </ClientOnly>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  width: 100%;
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

.header__desk {
  display: flex;

  @media (max-width: $br1) {
    display: none;
  }
}

.header__mob {
  display: none;

  @media (max-width: $br1) {
    display: flex;
  }
}
</style>
