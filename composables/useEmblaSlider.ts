import emblaCarouselVue from 'embla-carousel-vue'
import Autoplay from 'embla-carousel-autoplay'
import type { EmblaOptionsType } from 'embla-carousel'

interface UseEmblaProps {
  slidesToScroll: number | Ref<number>
  container: string
  watchDrag?: boolean
  loop?: boolean
  align?: 'start' | 'center' | 'end'
  autoplay?: boolean | { delay?: number; stopOnInteraction?: boolean }
}

const useEmbla = (props: UseEmblaProps) => {
  const { width } = useWindowSize()

  const slidesToScroll = computed(() =>
    typeof props.slidesToScroll === 'number'
      ? props.slidesToScroll
      : props.slidesToScroll.value
  )

  const options = computed<EmblaOptionsType>(() => ({
    loop: props.loop ?? false,
    slidesToScroll: slidesToScroll.value,
    align: props.align ?? 'start',
    container: props.container,
    watchDrag: props.watchDrag ?? width.value < 960,
  }))

  const autoplayPlugin = computed(() => {
    if (!props.autoplay) return undefined
    if (props.autoplay === true) return Autoplay()
    return Autoplay({
      delay: props.autoplay.delay,
      stopOnInteraction: props.autoplay.stopOnInteraction,
    })
  })

  const plugins = computed(() =>
    autoplayPlugin.value ? [autoplayPlugin.value] : []
  )

  const [emblaRef, emblaApi] = emblaCarouselVue(options, plugins.value)

  const prevBtnDisabled = ref(true)
  const nextBtnDisabled = ref(true)
  const progress = ref(0)

  const scrollPrev = () => emblaApi.value?.scrollPrev()
  const scrollNext = () => emblaApi.value?.scrollNext()

  const updateUI = () => {
    const api = emblaApi.value
    if (!api) return

    prevBtnDisabled.value = !api.canScrollPrev()
    nextBtnDisabled.value = !api.canScrollNext()
    progress.value = api.scrollProgress() * 100
  }

  onMounted(() => {
    const api = emblaApi.value
    if (!api) return

    api.on('init', updateUI)
    api.on('select', updateUI)
    api.on('scroll', updateUI)
    api.on('reInit', updateUI)
    updateUI()
  })

  onBeforeUnmount(() => {
    emblaApi.value?.destroy()
  })

  return {
    emblaApi,
    emblaRef,
    scrollPrev,
    scrollNext,
    prevBtnDisabled,
    nextBtnDisabled,
    progress,
  }
}

export default useEmbla
