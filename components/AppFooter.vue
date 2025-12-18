<script lang="ts" setup>
import { useFooterStory } from '~/composables/stories/footerStory'
import { useGlobalCompanyContactStory } from '~/composables/stories/globalCompanyContactStory'
import { useNavigationStory } from '~/composables/stories/navigationStory'

const { story: footerStory } = await useFooterStory()
const { story: navigationStory } = await useNavigationStory()
const { story: globalCompanyContactStory } =
  await useGlobalCompanyContactStory()

const localePath = useLocalePath()

const $el = ref<HTMLElement | null>(null)

useDetectHeaderColor($el as Ref<HTMLElement>)
</script>

<template>
  <footer ref="$el" class="footer">
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
          <ul
            v-if="navigationStory?.content?.items?.length"
            class="footer__list"
          >
            <li
              v-for="item in navigationStory.content.items"
              :key="item._uid"
              class="footer__item"
            >
              <ServiceDropdown
                v-if="item.component === 'nav_dropdown'"
                :services="item"
              />
              <NuxtLink
                v-else
                :to="localePath(normalizePath(item.url?.cached_url))"
                class="underline footer__link"
              >
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="footer__contacts">
          <p class="footer__t">
            {{ footerStory?.content?.contacts_label }}
          </p>

          <ul
            v-if="
              globalCompanyContactStory?.content?.phone &&
              globalCompanyContactStory?.content?.email
            "
            class="footer__list"
          >
            <li class="footer__item">
              <a
                target="_blank"
                rel="noopener noreferrer"
                :href="`tel:${globalCompanyContactStory?.content?.phone}`"
                class="underline footer__link"
              >
                {{ globalCompanyContactStory?.content?.phone }}
              </a>
            </li>

            <li class="footer__item">
              <a
                target="_blank"
                rel="noopener noreferrer"
                :href="`mailto:${globalCompanyContactStory?.content?.email}`"
                class="underline footer__link"
              >
                {{ globalCompanyContactStory?.content?.email }}
              </a>
            </li>
          </ul>
        </div>
        <Socials
          :label="footerStory?.content?.socials_label"
          :x="globalCompanyContactStory?.content?.x"
          :telegram="globalCompanyContactStory?.content?.telegram"
          :instagram="globalCompanyContactStory?.content?.instagram"
          class="footer__socials"
        />
      </div>
      <Rights
        :copyright-text="footerStory?.content?.copyright_text"
        :made-by-text="footerStory?.content?.made_by_text"
      />
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
</style>
