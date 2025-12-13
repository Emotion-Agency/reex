<script setup lang="ts">
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
  message: '',
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
    id: 'contact-form-name',
    name: 'name',
    type: 'text',
    placeholder: formStory?.value?.content?.name_field || 'Name',
    required: true,
    model: form.name,
    errors: v$.value.name.$errors,
  },
  {
    id: 'contact-form-number',
    name: 'phone',
    type: 'text',
    placeholder: formStory?.value?.content?.phone_field || 'Phone',
    required: true,
    model: form.phone,
    errors: v$.value.phone.$errors,
  },
  {
    id: 'contact-form-message',
    name: 'message',
    type: 'textarea',
    placeholder: formStory?.value?.content?.message_field || 'Message',
    required: false,
  },
  {
    id: 'contact-form-select',
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
  form.message = ''
  v$.value.$reset()
}
</script>

<template>
  <form novalidate class="c-form" @submit.prevent="onSubmit">
    <div class="c-form__input-list">
      <!-- Name -->
      <InputField
        v-model="form.name"
        id="contact-form-name"
        type="text"
        name="name"
        :placeholder="formStory?.content?.name_field || 'Name'"
        required
        :errors="v$.name.$errors"
        class="c-form__input"
      />

      <!-- Phone -->
      <InputField
        v-model="form.phone"
        id="contact-form-number"
        type="text"
        name="phone"
        :placeholder="formStory?.content?.phone_field || 'Phone'"
        required
        :errors="v$.phone.$errors"
        class="c-form__input"
      />

      <!-- Service -->
      <BaseSelect
        v-model="form.service"
        :options="serviceOptions"
        :placeholder="formStory?.content?.service_field || 'Service type'"
        class="c-form__select"
      />

      <!-- Message -->
      <InputTextarea
        v-if="true"
        v-model="form.message"
        id="contact-form-message"
        name="message"
        :placeholder="formStory?.content?.message_field || 'Message'"
        class="c-form__input c-form__input--textarea"
      />
    </div>

    <DualButton class="c-form__btn" type="submit">
      {{ formStory?.content?.button }}
    </DualButton>
  </form>
</template>

<style lang="scss">
.c-form {
  position: relative;
  display: flex;
  text-align: start;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  gap: vw(32);
  width: 100%;

  @media (max-width: $br1) {
    gap: 24px;
  }
}

.c-form__input-list {
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  gap: vw(16);
  width: 100%;

  @media (max-width: $br1) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}

.c-form__input-list > *:nth-child(n + 3) {
  @media (min-width: $br1) {
    grid-column: 1 / -1;
  }
}

.c-form__input {
  .field__control {
    background-color: var(--background-secondary);
  }

  .input {
    color: var(--foreground);
    &::placeholder {
      color: var(--foreground-muted-50) !important;
    }
  }

  &--textarea {
    .field__control {
      height: vw(112);

      @media (max-width: $br1) {
        height: 112px;
      }
    }
  }
}

.c-form__select {
  .base-select__trigger {
    background-color: var(--background-secondary);
  }

  .base-select__value {
    color: var(--foreground-muted-50);
  }

  .base-select__dropdown {
    background-color: var(--background-secondary);
  }

  .base-select__item {
    color: var(--foreground-muted-50);

    &:hover {
      color: var(--foreground);

      span {
        border-color: var(--foreground);

        &:after {
          background-color: var(--foreground);
        }
      }
    }

    span {
      border: 1px solid var(--foreground-muted-50);

      &:after {
        background-color: var(--foreground-muted-50);
      }
    }
  }
}

.c-form__btn {
  width: fit-content;
}
</style>
