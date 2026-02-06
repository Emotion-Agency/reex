import type { IEventArgs } from '@emotionagency/emotion-scroll'

export const useHeaderInteraction = () => {
  const isVisible = ref(true)
  const isHovered = ref(false)
  const mousePaused = ref(true)

  const isFixed = () => {
    if (getScrollEl().classList.contains('full-page')) return false
    return window.escroll ? window.escroll.disabled : false
  }

  const toggleVisible = (value: boolean) => {
    if (isVisible.value !== value) {
      isVisible.value = value
    }
  }

  const toggleMousePaused = (value: boolean) => {
    if (mousePaused.value !== value) {
      mousePaused.value = value
    }
  }

  watch(isVisible, value => {
    document.body.classList.toggle('nav-visible', value)
  })

  const onScroll = (e: IEventArgs) => {
    if (isHovered.value) return

    const isDisabled =
      document.documentElement.classList.contains('header-disabled')

    if ((e.direction === 1 && !isFixed() && e.position > 0) || isDisabled) {
      toggleVisible(false)
      toggleMousePaused(false)
    } else {
      toggleMousePaused(true)
      toggleVisible(true)
    }
  }

  const onMouseMove = (e: MouseEvent) => {
    if (isFixed() || mousePaused.value || window.innerWidth < 560) return

    if (document.documentElement.classList.contains('header-disabled')) {
      toggleVisible(false)
      isHovered.value = false
      return
    }

    if (e.screenY <= 200) {
      toggleVisible(true)
      isHovered.value = true
    } else {
      toggleVisible(false)
      isHovered.value = false
    }
  }

  onMounted(() => {
    window.escroll.on(onScroll)
    document.addEventListener('mousemove', onMouseMove)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('mousemove', onMouseMove)
  })

  return {
    isVisible,
    isHovered,
    mousePaused,
  }
}
