import type { iAccordionSteps } from '../accordionTypes'
import type { iAdvantageItem } from '../advantagesTypes'
import type { iRichTextDoc } from '../richTextTypes'
import type { iDeepLink, iImage, iMeta } from '../story'

export interface iQuestionItem {
  title: string
  description: string
  component: string
  _uid: string
}

export interface iQuestions {
  title: string
  link: iDeepLink[]
  questions_list: iQuestionItem[]
  component: string
  _uid: string
}

export interface iAdvantages {
  tag: string
  title: string
  link: iDeepLink[]
  advantage_items: iAdvantageItem[]
  component: string
  _uid: string
}

export interface iAdvice {
  title: string
  description: string
  asset: iImage
  link: iDeepLink[]
  component: string
  _uid: string
}

export interface iServiceContent {
  colored_title: iRichTextDoc
  description: string
  asset: iImage
  advice: iAdvice[]
  accordion_steps: iAccordionSteps[]
  advantages: iAdvantages[]
  questions: iQuestions[]
  meta: iMeta[]
}
