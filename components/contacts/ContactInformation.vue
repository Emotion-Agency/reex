<script setup lang="ts">
import { useFooterStory } from '~/composables/stories/footerStory'
import { useGlobalCompanyContactStory } from '~/composables/stories/globalCompanyContactStory'

const { story: footerStory } = await useFooterStory()
const { story: globalCompanyContactStory } =
  await useGlobalCompanyContactStory()
</script>

<template>
  <section class="c-info">
    <div class="container c-info__wrapper">
      <div class="grid c-info__content">
        <div class="c-info__socials-wrapper">
          <ul class="c-info__contacts">
            <li class="c-info__item">
              <p class="c-info__t">
                {{ footerStory?.content?.email_label }}
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                :href="`mailto:${globalCompanyContactStory?.content?.email}`"
                class="underline c-info__link"
              >
                {{ globalCompanyContactStory?.content?.email }}
              </a>
            </li>
            <li class="c-info__item">
              <p class="c-info__t">
                {{ footerStory?.content?.phone_label }}
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                :href="`tel:${globalCompanyContactStory?.content?.phone}`"
                class="underline c-info__link"
              >
                {{ globalCompanyContactStory?.content?.phone }}
              </a>
            </li>
          </ul>
          <Socials
            :label="footerStory?.content?.socials_label"
            :x="globalCompanyContactStory?.content?.x"
            :telegram="globalCompanyContactStory?.content?.telegram"
            :instagram="globalCompanyContactStory?.content?.instagram"
            is-contacts
            class="c-info__socials"
          />
        </div>
        <ContactsContactForm class="c-info__form" />
      </div>
      <Rights
        :copyright-text="footerStory?.content?.copyright_text"
        :made-by-text="footerStory?.content?.made_by_text"
        is-contacts
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.c-info {
  margin-top: vw(48);
  padding-bottom: vw(32);

  @media (max-width: $br1) {
    margin-top: 32px;
    padding-bottom: 26px;
  }
}

.c-info__wrapper {
  @media (max-width: $br1) {
  }
}

.c-info__content {
  @media (max-width: $br1) {
    display: flex;
    flex-direction: column-reverse;
    gap: 28px;
  }
}

.c-info__socials-wrapper {
  @media (min-width: $br1) {
    @include col(1, 3);
  }
}

.c-info__contacts {
  display: flex;
  flex-direction: column;
  gap: vw(32);

  @media (max-width: $br1) {
    gap: 24px;
  }
}

.c-info__t {
  color: var(--foreground-muted-50);
  @include text-reg-p1;
}

.c-info__link {
  position: relative;
  display: block;
  width: fit-content;
  margin-top: vw(8);
  font-size: vw(20);
  letter-spacing: -0.01em;
  @include text-med-p1;

  @media (max-width: $br1) {
    margin-top: 6px;
    font-size: 16px;
  }
}

.c-info__form {
  @media (min-width: $br1) {
    @include col(7, 12);
  }
}
</style>
