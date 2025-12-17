<script setup lang="ts">
import { useFormStory } from '~/composables/stories/formStory'

const { story } = await useFormStory()
const { isShowThankYou } = useThankyouScreen()
</script>

<template>
  <Dialog v-model:open="isShowThankYou">
    <div class="approve-modal">
      <h2 class="approve-modal__text" v-html="story?.content?.thankyou_text" />
    </div>
  </Dialog>
</template>

<style scoped lang="scss">
.approve-modal {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.approve-modal__text {
  color: var(--secondary);
  text-transform: uppercase;
  text-align: center;
  width: 100%;
  @include heading-h4;

  @media (max-width: $br1) {
    max-width: 80%;
    margin: 0 auto;
  }
}
</style>
