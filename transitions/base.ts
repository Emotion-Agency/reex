import type { TransitionProps } from 'vue'
import { gsap } from '../libs/gsap'

const duration = 0.4
const ease = 'power3.inOut'

export const pageTransition: TransitionProps = {
  mode: 'out-in',
  onEnter(el, done) {
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
  },
  async onLeave(el, done) {
    const tl = gsap.timeline({
      onComplete: done,
      defaults: {
        duration,
        ease,
      },
    })
    tl.to(el, {
      opacity: 0,
    })
  },
}
