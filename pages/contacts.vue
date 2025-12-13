<script setup lang="ts">
import { useContactsStory } from '~/composables/stories/contactsStory'
import { pageTransition } from '~/transitions/base'

definePageMeta({
  pageTransition,
})

const { story: contactsStory } = await useContactsStory()
</script>

<template>
  <div class="contacts">
    <AppHero :title="contactsStory?.content?.title" is-contacts />
    <ContactsContactInformation class="contacts__info" />
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
