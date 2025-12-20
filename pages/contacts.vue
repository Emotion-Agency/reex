<script setup lang="ts">
import { useContactsStory } from '~/composables/stories/contactsStory'
import { pageTransition } from '~/transitions/base'

definePageMeta({
  pageTransition,
})

const { story: contactsStory } = await useContactsStory()

const meta = computed(() => {
  const data = contactsStory?.value?.content?.meta[0]

  if (!data) {
    return null
  }

  return {
    title: data.title,
    description: data.description,
    ogImage: data?.image?.filename,
  }
})
</script>

<template>
  <div class="contacts">
    <PageMeta v-if="meta" v-bind="meta" />
    <AppHero
      :colored-title="contactsStory?.content?.colored_title"
      is-contacts
    />
    <ContactsContactInformation data-contacts class="contacts__info" />
  </div>
</template>

<style lang="scss" scoped>
.contacts {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: vw(48);

  @media (max-width: $br1) {
    gap: 32px;
  }
}

.contacts__info {
  margin-top: auto;
}
</style>
