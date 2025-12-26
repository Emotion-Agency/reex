<script lang="ts" setup>
import { required, helpers, minLength, maxLength } from '@vuelidate/validators'
import { useFormStory } from '~/composables/stories/formStory'
import { useServiceStories } from '~/composables/stories/serviceStories'

const { story: formStory } = await useFormStory()
const { services } = await useServiceStories('services')

const serviceOptions = computed<string[]>(
  () =>
    services.value
      ?.map(s => richTextToString(s?.content?.colored_title))
      .filter(Boolean) ?? []
)

const rules = {
  name: {
    required: helpers.withMessage('Введіть імʼя', required),
    minLength: helpers.withMessage('Мінімум 2 символи', minLength(2)),
  },
  phone: {
    required: helpers.withMessage('Введіть номер телефону', required),
    minLength: helpers.withMessage('Мінімум 9 цифр', minLength(9)),
    maxLength: helpers.withMessage('Максимум 30 цифр', maxLength(30)),
  },
}

const { form, v$, isSubmitting, submit } = useFormHandle(
  {
    name: '',
    phone: '',
    service: '',
  },
  rules
)

const inputs = computed(() => [
  {
    id: 'app-form-name',
    name: 'name',
    type: 'text',
    placeholder: formStory?.value?.content?.name_field || 'Name',
    errors: v$.value?.name?.$errors,
  },
  {
    id: 'app-form-phone',
    name: 'phone',
    type: 'text',
    placeholder: formStory?.value?.content?.phone_field || 'Phone',
    errors: v$.value?.phone?.$errors,
  },
  {
    id: 'app-form-service',
    name: 'service',
    placeholder: formStory?.value?.content?.service_field || 'Service type',
    options: serviceOptions.value,
  },
])
</script>

<template>
  <form novalidate class="form" @submit.prevent="submit">
    <ColoredText
      as="h2"
      variant="light"
      :content="formStory?.content?.colored_text"
      class="form__t"
    />
    <div class="form__input-list">
      <template v-for="input in inputs" :key="input.id">
        <BaseSelect
          v-if="input.options"
          v-model="form[input.name]"
          :options="input.options"
          :placeholder="input.placeholder"
        />
        <InputField
          v-else
          v-model="form[input.name]"
          :id="input.id"
          :type="input.type"
          :name="input.name"
          :placeholder="input.placeholder"
          :errors="input.errors"
          class="form__input"
        />
      </template>
    </div>
    <DualButton
      class="form__btn"
      type="submit"
      variant="secondary"
      :disabled="isSubmitting"
    >
      {{ formStory?.content?.button }}
    </DualButton>
  </form>
</template>

<style lang="scss" scoped>
.form {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  max-width: vw(572);
  gap: vw(48);
  width: 100%;

  @media (max-width: $br1) {
    text-align: start;
    align-items: start;
    justify-content: start;
    max-width: 520px;
    gap: 32px;
  }

  @media (max-width: $br3) {
    max-width: 100%;
  }
}

.form__input-list {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: vw(12);
  max-width: vw(448);
  width: 100%;

  @media (max-width: $br1) {
    gap: 12px;
    max-width: 100%;
  }
}

.form__input {
  color: var(--secondary);
}

.form__btn {
  width: fit-content;
}
</style>
