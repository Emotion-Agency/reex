<script lang="ts" setup>
import contacts from '~/constants/contacts'
import navigationList from '~/constants/navigation'
import socialsList from '~/constants/socials'
</script>

<template>
  <footer class="footer">
    <div class="container footer__wrapper">
      <AppForm />
      <div class="footer__line" />
      <div class="grid footer__content">
        <div class="footer__text-wrapper">
          <IconsLogo class="footer__logo" />
          <p class="footer__text">
            Допомагаємо бізнесу працювати стабільно, надаючи кваліфікований і
            перевірений персонал.
          </p>
        </div>
        <div class="footer__nav">
          <p class="footer__t">Навігація</p>
          <ul class="footer__list">
            <li
              v-for="item in navigationList"
              :key="item.id"
              class="footer__item"
            >
              <ServiceDropdown v-if="item.links?.length" :nav-item="item" />
              <NuxtLink
                v-else
                :to="item.link.url"
                class="underline footer__link"
              >
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="footer__contacts">
          <p class="footer__t">Контакти</p>
          <ul class="footer__list">
            <li
              v-for="contact in contacts"
              :key="contact.id"
              class="footer__item"
            >
              <NuxtLink :to="contact.link.url" class="underline footer__link">
                {{ contact.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="footer__socials">
          <p class="footer__t">Соціальні мережі</p>
          <ul class="footer__list">
            <li
              v-for="social in socialsList"
              :key="social.id"
              class="footer__item"
            >
              <NuxtLink :to="social.link.url" class="underline footer__link">
                {{ social.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer__rights-wrapper">
        <p class="footer__rights-text">
          Copyright ©2025. <span>All rights reserved</span>
        </p>
        <p class="footer__rights-text">
          <span>Made by </span>
          <a
            href="https://www.emotion-agency.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="underline footer__by"
          >
            Emotion Agency
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background: var(--foreground);
  color: var(--secondary);
  padding-top: vw(144);
  padding-bottom: vw(32);

  @media (max-width: $br1) {
    padding-top: 100px;
    padding-bottom: 26px;
  }
}

.footer__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: $br1) {
    align-items: flex-start;
  }
}

.footer__line {
  width: 100%;
  height: 1px;
  background-color: var(--bg-muted-10);
  margin-top: vw(96);

  @media (max-width: $br1) {
    margin-top: 72px;
  }
}

.footer__content {
  margin-top: vw(48);
  row-gap: vw(48);

  @media (max-width: $br1) {
    display: flex;
    flex-direction: column;
    margin-top: 32px;
    row-gap: 32px;
  }
}

.footer__text-wrapper {
  @media (min-width: $br1) {
    @include col(1, 4);
  }
}

.footer__logo {
  width: vw(90);
  height: auto;

  @media (max-width: $br1) {
    width: 90px;
  }
}

.footer__text {
  @include heading-h4;
  color: var(--bg-muted-50);
  margin-top: vw(24);

  @media (max-width: $br1) {
    margin-top: 18px;
    max-width: 370px;
  }

  @media (max-width: $br3) {
    max-width: 100%;
  }
}

.footer__nav {
  @media (min-width: $br1) {
    @include col(9, 10);
  }
}

.footer__t {
  @include text-reg-p1;
  color: var(--bg-muted-50);
}

.footer__list {
  display: flex;
  flex-direction: column;
  gap: vw(12);
  margin-top: vw(24);
  @include text-med-p1;

  @media (max-width: $br1) {
    margin-top: 18px;
    gap: 10px;
  }
}

.footer__item {
  width: fit-content;
}

.footer__link {
  position: relative;

  &::before {
    background-color: var(--secondary);
  }
}

.footer__contacts {
  @media (min-width: $br1) {
    @include col(11, 12);
  }
}

.footer__socials {
  @media (min-width: $br1) {
    @include col(9, 10);
    @include row(2, 2);
  }
}

.footer__rights-wrapper {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: vw(144);
  @include text-reg-p2;

  @media (max-width: $br1) {
    margin-top: 80px;
  }

  @media (max-width: $br3) {
    flex-direction: column;
    row-gap: 12px;
  }
}

.footer__rights-text {
  position: relative;

  span {
    color: var(--bg-muted-50);
  }
}

.footer__by {
  position: relative;

  &::before {
    background-color: var(--secondary);
  }
}
</style>
