import useVuelidate from '@vuelidate/core'
import type { ValidationArgs } from '@vuelidate/core'

type FormState = Record<string, unknown>

export function useFormHandle<T extends FormState>(
  initialState: T,
  rules: ValidationArgs
) {
  const { showThankYou } = useThankyouScreen()

  const form = reactive({ ...initialState })

  const v$ = useVuelidate(rules, form)

  const reset = () => {
    Object.assign(form, initialState)
    v$.value.$reset()
  }

  const submit = async () => {
    const valid = await v$.value.$validate()
    if (!valid) return

    showThankYou()
    console.log('Form data:', { ...form })

    reset()
  }

  return {
    form,
    v$,
    submit,
    reset,
  }
}
