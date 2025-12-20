import type { iAccordionSteps } from '../accordionTypes'
import type { iAdvantageItem } from '../advantagesTypes'
import type { iArticleCategory } from '../news/articleTypes'
import type { iRichTextDoc } from '../richTextTypes'
import type { iDeepLink, iImage, iMeta, iStory } from '../story'

export interface iHomeArticleItem {
  asset: iImage
  category: iStory<iArticleCategory>[]
  date: string
  title: string
  component: string
  _uid: string
}

export interface iMember {
  name: string
  position: string
  logo: iImage
  component: string
  _uid: string
}

export interface iPartnerItem {
  text: string
  member: iMember[]
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

export interface iHomeAbout {
  tag: string
  colored_title: iRichTextDoc
  link: iDeepLink[]
  assets: iImage[]
  component: string
  _uid: string
}

export interface iWhyChoose {
  tag: string
  text: string
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
  colored_title: iRichTextDoc
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
  cooperation: iAccordionSteps[]
  locations: iLocations[]
  partners: iPartners[]
}
