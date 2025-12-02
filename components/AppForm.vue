<script lang="ts" setup>
import useVuelidate from '@vuelidate/core'
import { required, helpers, minLength, maxLength } from '@vuelidate/validators'

const form = reactive({
  name: '',
  phone: '',
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
const isInvalid = computed(() => v$.value.$invalid)

const inputs = computed(() => [
  {
    id: 'contact-name',
    name: 'name',
    type: 'text',
    placeholder: "Ім'я",
    required: true,
    model: form.name,
    errors: v$.value.name.$errors,
  },
  {
    id: 'contact-number',
    name: 'phone',
    type: 'text',
    placeholder: 'Телефон',
    required: true,
    model: form.phone,
    errors: v$.value.phone.$errors,
  },
])

const onSubmit = async () => {
  const valid = await v$.value.$validate()

  if (!valid) return

  console.log('Form data:', { ...form })

  form.name = ''
  form.phone = ''
  v$.value.$reset()
}

watch(form, () => {
  v$.value.$touch()
})
</script>

<template>
  <form novalidate class="form" @submit.prevent="onSubmit">
    <legend class="form__t">
      Залиште заявку — ми знайдемо персонал <span>за 24 години.</span>
    </legend>
    <div class="form__input-list">
      <InputField
        v-for="input in inputs"
        :key="input.id"
        v-model="form[input.name]"
        :id="input.id"
        :type="input.type"
        :name="input.name"
        :placeholder="input.placeholder"
        :required="input.required"
        :errors="input.errors"
        class="form__input"
      />
    </div>
    <DualButton
      class="form__btn"
      type="submit"
      variant="secondary"
      :disabled="isInvalid"
    >
      Залишити заявку
    </DualButton>
  </form>
</template>

<style lang="scss" scoped>
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  max-width: vw(588);
  gap: vw(48);
  width: 100%;

  @media (max-width: $br1) {
    text-align: start;
    align-items: start;
    max-width: 100%;
    gap: 32px;
  }
}

.form__t {
  @include heading-h2;

  @media (max-width: $br1) {
    max-width: 60%;
  }

  @media (max-width: $br3) {
    max-width: 100%;
  }

  span {
    color: var(--bg-muted-50);
  }
}

.form__input-list {
  display: flex;
  flex-direction: column;
  gap: vw(12);
  max-width: vw(448);
  width: 100%;

  @media (max-width: $br1) {
    gap: 12px;
    max-width: 60%;
  }

  @media (max-width: $br3) {
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
