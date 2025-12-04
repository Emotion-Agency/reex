import type { iImage, iLink, iMeta } from './story'

export interface iHomeHero {
  title: string
  background_asset: iImage
  component: string
  _uid: string
}

export interface iBusinessCarouselItem {
  asset: iImage
  title: string
  description: string
  component: string
  _uid: string
}

export interface iBusinessSolutions {
  tag: string
  title: string
  link: { label: string; url: iLink }[]
  service_carousel: { content: iBusinessCarouselItem }[]
  component: string
  _uid: string
}

export interface iHomeContent {
  meta: iMeta[]
  hero: iHomeHero[]
  business_solutions: iBusinessSolutions[]
}
