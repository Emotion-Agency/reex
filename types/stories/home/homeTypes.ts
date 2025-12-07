import type { iArticles } from '../articlesTypes'
import type { iDeepLink, iImage, iMeta, iStory } from '../story'

export interface iPartnerMember {
  name: string
  position: string
  logo: iImage
  component: string
  _uid: string
}

export interface iPartnerItem {
  text: string
  member: iPartnerMember[]
  component: string
  _uid: string
}

export interface iPartners {
  tag: string
  logos: iImage[]
  items: iPartnerItem[]
  component: string
  _uid: string
}

export interface iLocations {
  title: string
  text: string
  component: string
  _uid: string
}

export interface iCooperationItem {
  title: string
  description: string
  asset: iImage
  component: string
  _uid: string
}

export interface iCooperationSteps {
  tag: string
  text: string
  items: iCooperationItem[]
  component: string
  _uid: string
}

export interface iHomeAbout {
  tag: string
  text: string
  link: iDeepLink[]
  assets: iImage[]
  component: string
  _uid: string
}

export interface iAdvantageItem {
  title: string
  text: string
  icon: iImage
  component: string
  _uid: string
}

export interface iWhyChoose {
  tag: string
  title: string
  advantage_items: iAdvantageItem[]
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
  link: iDeepLink[]
  service_carousel: iStory<iBusinessCarouselItem>[]
  component: string
  _uid: string
}

export interface iHomeHero {
  title: string
  background_asset: iImage
  component: string
  _uid: string
}

export interface iHomeContent {
  meta: iMeta[]
  hero: iHomeHero[]
  business_solutions: iBusinessSolutions[]
  why_choose: iWhyChoose[]
  about: iHomeAbout[]
  cooperation: iCooperationSteps[]
  locations: iLocations[]
  partners: iPartners[]
  articles: iArticles[]
}
