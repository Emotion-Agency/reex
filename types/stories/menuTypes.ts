import type { iDeepLink } from './story'

export interface iMenuContent {
  links: iDeepLink[]
  _uid: string
  component: string
}
