<script lang="ts" setup>
import useVuelidate from '@vuelidate/core'
import { required, helpers, minLength, maxLength } from '@vuelidate/validators'
import { useFormStory } from '~/composables/stories/formStory'
import { useServiceStories } from '~/composables/stories/serviceStories'

const { story: formStory } = await useFormStory()
const { services } = await useServiceStories('services')

const serviceOptions = computed(() =>
  services.value?.map(s => s.content?.title).filter(Boolean)
)

const form = reactive({
  name: '',
  phone: '',
  service: '',
})

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

const v$ = useVuelidate(rules, form)

const inputs = computed(() => [
  {
    id: 'contact-name',
    name: 'name',
    type: 'text',
    placeholder: formStory?.value?.content?.name_field || 'Name',
    required: true,
    model: form.name,
    errors: v$.value.name.$errors,
  },
  {
    id: 'contact-number',
    name: 'phone',
    type: 'text',
    placeholder: formStory?.value?.content?.phone_field || 'Phone',
    required: true,
    model: form.phone,
    errors: v$.value.phone.$errors,
  },
  {
    id: 'contact-select',
    name: 'service',
    placeholder: formStory?.value?.content?.service_field || 'Service type',
    required: false,
    options: serviceOptions.value,
  },
])

const onSubmit = async () => {
  const valid = await v$.value.$validate()

  if (!valid) return

  console.log('Form data:', { ...form })

  form.name = ''
  form.phone = ''
  form.service = ''
  v$.value.$reset()
}
</script>

<template>
  <form novalidate class="form" @submit.prevent="onSubmit">
    <h2 class="form__t">
      {{ formStory?.content?.text }}
    </h2>
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
          :required="input.required"
          :errors="input.errors"
          class="form__input"
        />
      </template>
    </div>
    <DualButton class="form__btn" type="submit" variant="secondary">
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

.form__t {
  @include heading-h2;

  span {
    color: var(--bg-muted-50);
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

.form__select-trigger {
  width: 100%;
  height: 52px;
  padding: 0 16px;
  border: 1px solid var(--secondary);
  border-radius: 8px;
  background: transparent;
  font-size: 16px;
  color: var(--secondary);
  display: flex;
  align-items: center;
  justify-content: space-between;

  &[data-placeholder] {
    color: var(--muted-foreground, #9ca3af); // сірий для плейсхолдера
  }
}

.form__select-content {
  background: white !important;
  border-radius: 8px;
  padding: 4px 0;
  border: 1px solid #e5e7eb;
}

.form__select-item {
  padding: 10px 16px;
  cursor: pointer;
  font-size: 15px;
  color: var(--secondary);
  outline: none;

  &[data-highlighted='true'] {
    background: var(--bg-muted-50);
    color: white;
  }
}
</style>
