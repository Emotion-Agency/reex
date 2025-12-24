<script setup lang="ts">
import { required, helpers, minLength, maxLength } from '@vuelidate/validators'
import { useFormStory } from '~/composables/stories/formStory'
import { useServiceStories } from '~/composables/stories/serviceStories'

const { story: formStory } = await useFormStory()
const { services } = await useServiceStories('services')

const serviceOptions = computed<string[]>(
  () =>
    services.value
      ?.map(s => richTextToString(s.content?.colored_title))
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
    message: '',
  },
  rules
)
</script>

<template>
  <form novalidate class="c-form" @submit.prevent="submit">
    <div class="c-form__input-list">
      <!-- Name -->
      <InputField
        v-model="form.name"
        id="contact-form-name"
        type="text"
        name="name"
        :placeholder="formStory?.content?.name_field || 'Name'"
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
        v-model="form.message"
        id="contact-form-message"
        name="message"
        :placeholder="formStory?.content?.message_field || 'Message'"
        class="c-form__input c-form__input--textarea"
      />
    </div>

    <DualButton class="c-form__btn" type="submit" :disabled="isSubmitting">
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
  width: fit-content !important;
}
</style>
