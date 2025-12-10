<script lang="ts" setup>
import { useFooterStory } from '~/composables/stories/footerStory'
import { useGlobalStory } from '~/composables/stories/globalStory'
import { useNavigationStory } from '~/composables/stories/navigationStory'

const { story: footerStory } = await useFooterStory()
const { story: navigationStory } = await useNavigationStory()
const { story: globalStory } = await useGlobalStory()
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
            {{ footerStory?.content?.text }}
          </p>
        </div>
        <div class="footer__nav">
          <p class="footer__t">{{ footerStory?.content?.navigation_label }}</p>
          <ul class="footer__list">
            <li
              v-for="item in navigationStory?.content?.items"
              :key="item?._uid"
              class="footer__item"
            >
              <ServiceDropdown
                v-if="item?.component === 'nav_dropdown'"
                :services="item"
              />
              <NuxtLink
                v-else
                :to="item?.url?.cached_url"
                class="underline footer__link"
              >
                {{ item?.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="footer__contacts">
          <p class="footer__t">{{ footerStory?.content?.contacts_label }}</p>
          <ul class="footer__list">
            <li class="footer__item">
              <NuxtLink
                tag="a"
                :href="`tel:${globalStory?.content?.phone}`"
                class="underline footer__link"
              >
                {{ globalStory?.content?.phone }}
              </NuxtLink>
            </li>
            <li class="footer__item">
              <NuxtLink
                tag="a"
                :href="`mailto:${globalStory?.content?.email}`"
                class="underline footer__link"
              >
                {{ globalStory?.content?.email }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="footer__socials">
          <p class="footer__t">{{ footerStory?.content?.socials_label }}</p>
          <ul class="footer__list footer__list--socials">
            <li class="footer__item">
              <MultipleButton
                tag="a"
                :href="globalStory?.content?.x"
                direction="right-down-up"
                variant="secondary"
                is-icons
              >
                <IconsSocialsX />
              </MultipleButton>
            </li>
            <li class="footer__item">
              <MultipleButton
                tag="a"
                :href="globalStory?.content?.instagram"
                direction="up-down"
                variant="secondary"
                is-icons
              >
                <IconsSocialsInstagram />
              </MultipleButton>
            </li>
            <li class="footer__item">
              <MultipleButton
                tag="a"
                :href="globalStory?.content?.telegram"
                direction="left-down-up"
                variant="secondary"
                is-icons
              >
                <IconsSocialsTelegram />
              </MultipleButton>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer__rights-wrapper">
        <p class="footer__rights-text">
          {{ footerStory?.content?.copyright_text }}
        </p>
        <p class="footer__rights-text">
          <span>{{ footerStory?.content?.made_by_text }} {{ ' ' }}</span>
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

  &--socials {
    flex-direction: row;
    gap: vw(20);

    @media (max-width: $br1) {
      gap: 20px;
    }
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
