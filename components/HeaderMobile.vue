<script lang="ts" setup></script>

<template>
  <div class="header-mob">
    <NuxtLink to="/" class="header-mob__logo">
      <IconsLogo />
    </NuxtLink>
    <div class="header-mob__right">
      <Button tag="button" class="header-mob__menu-btn">
        <span class="header-mob__menu-line" />
        <span class="header-mob__menu-line" />
      </Button>
      <SwitchLanguage />
    </div>
  </div>
</template>

<style lang="scss">
.header-mob {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
}

.header-mob__menu-btn {
  span {
    flex-direction: column;
    width: 100%;
    height: 1px;

    .header-mob__menu-line {
      width: 100%;
      height: 1px;
      background-color: var(--secondary);
    }
  }
}
</style>
