import useVuelidate from '@vuelidate/core'
import type { ValidationArgs } from '@vuelidate/core'

type FormState = Record<string, unknown>

export function useFormHandle<T extends FormState>(
  initialState: T,
  rules: ValidationArgs
) {
  const { showThankYou } = useThankyouScreen()
  const { addToast } = useToasts()
  const isSubmitting = ref(false)

  const form = reactive({ ...initialState })

  const v$ = useVuelidate(rules, form)

  const reset = () => {
    Object.assign(form, initialState)
    v$.value.$reset()
  }

  const submit = async () => {
    const valid = await v$.value.$validate()
    if (!valid || isSubmitting.value) return

    isSubmitting.value = true
    document.documentElement.style.cursor = 'wait'

    try {
      await fetch('https://formspree.io/f/mkowabvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ ...form }),
      })

      showThankYou()
      reset()
    } catch (err) {
      addToast({
        color: ToastColor.danger,
        text: 'An error occurred while submitting the form. Please try again later.',
      })
      console.error('Form submit error:', err)
    } finally {
      isSubmitting.value = false
      document.documentElement.style.cursor = ''
    }
  }

  return {
    form,
    v$,
    isSubmitting,
    submit,
    reset,
  }
}
