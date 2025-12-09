<script setup lang="ts">
import type { iQuestions } from '~/types/stories/service/serviceTypes'

interface iQuestionsProps {
  content: iQuestions
}

const props = defineProps<iQuestionsProps>()

const openedId = ref(props.content?.questions_list[0]?._uid ?? '')
</script>

<template>
  <section class="questions">
    <div class="questions__wrapper container">
      <div class="questions__left">
        <h2 class="questions__t">
          {{ content?.title }}
        </h2>
        <DualButton
          tag="nuxt-link"
          :to="content?.link[0]?.url?.cached_url"
          class="questions__btn"
        >
          {{ content?.link[0]?.label }}
        </DualButton>
      </div>
      <AccordionRoot
        v-model="openedId"
        :steps="content?.questions_list"
        class="questions__a"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.questions {
  padding-top: vw(248);
  padding-bottom: vw(192);

  @media (max-width: $br1) {
    padding-top: 100px;
    padding-bottom: 100px;
  }
}

.questions__wrapper {
  @media (min-width: $br1) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: vw(20);
  }

  @media (max-width: $br1) {
    display: flex;
    flex-direction: column;
  }
}

.questions__left {
  @media (min-width: $br1) {
    @include col(1, 5);
  }

  @media (max-width: $br1) {
    max-width: 320px;
  }

  @media (max-width: $br4) {
    max-width: 100%;
  }
}

.questions__t {
  @include heading-h2;
}

.questions__btn {
  width: fit-content;
  margin-top: vw(48);

  @media (max-width: $br1) {
    margin-top: 32px;
  }
}

.questions__a {
  @media (max-width: $br1) {
    width: 100%;
  }
}
</style>
