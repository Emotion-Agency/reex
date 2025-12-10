import type { iServiceContent } from './service/serviceTypes'
import type { iDeepLink, iLink, iStory } from './story'

export interface iNavigationLinks {
  url: iLink
  label: string
  component: 'link'
  _uid: string
}

export interface iNavigationService {
  items: iStory<iServiceContent>[]
  label: string
  component: 'nav_dropdown'
  _uid: string
}

export type iNavigationItem = iNavigationLinks | iNavigationService

export interface iNavigationContent {
  button: iDeepLink[]
  items: iNavigationItem[]
  _uid: string
  component: string
}
