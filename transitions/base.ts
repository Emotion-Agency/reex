import type { TransitionProps } from 'vue'
import { gsap } from '../libs/gsap'
import { basicObject } from './basicObject'

const duration = 1
const ease = 'power3.inOut'

export const pageTransition: TransitionProps = {
  mode: 'out-in',
  onEnter(el, done) {
    const { init } = useLoadingAnimation()

    const tl = gsap.timeline({
      defaults: {
        duration,
        ease,
      },
      onComplete: () => {
        done()

        tl.revert()
        tl.kill()
      },
    })

    tl.fromTo(
      el,
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    )

    basicObject.onEnter()

    init()
  },
  async onLeave(el, done) {
    const tl = gsap.timeline({
      onComplete: () => {
        done()
        resetScroll()
      },
      defaults: {
        duration,
        ease,
      },
    })
    tl.to(el, {
      opacity: 0,
    })

    basicObject.onLeave()
  },
}
