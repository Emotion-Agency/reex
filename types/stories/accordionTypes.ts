import type { iImage } from './story'

export interface iAccordionItem {
  title: string
  description: string
  asset?: iImage
  component: string
  _uid: string
}

export interface iAccordionSteps {
  tag: string
  text: string
  items: iAccordionItem[]
  component: string
  _uid: string
}
