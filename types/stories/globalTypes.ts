import type { iRichTextDoc } from './richTextTypes'
import type { iServiceContent } from './service/serviceTypes'
import type { iDeepLink, iLink, iStory } from './story'

export interface iGlobalArticlesTitleContent {
  useful_article_title: string
  similar_article_title: string
  _uid: string
  component: string
}

export interface iGlobalFooterContent {
  text: string
  colored_copyright_text: iRichTextDoc
  made_by_text: string
  navigation_label: string
  contacts_label: string
  socials_label: string
  phone_label: string
  email_label: string
  address_label: string
  _uid: string
  component: string
}

export interface iGlobalFormContent {
  colored_text: iRichTextDoc
  name_field: string
  phone_field: string
  service_field: string
  message_field
  button: string
  thankyou_text: string
  _uid: string
  component: string
}

export interface iGlobalNavigationLinks {
  url: iLink
  label: string
  component: 'link'
  _uid: string
}

export interface iGlobalNavigationService {
  items: iStory<iServiceContent>[]
  label: string
  component: 'nav_dropdown'
  _uid: string
}

export type iGlobalNavigationItem =
  | iGlobalNavigationLinks
  | iGlobalNavigationService

export interface iGlobalNavigationContent {
  button: iDeepLink[]
  items: iGlobalNavigationItem[]
  _uid: string
  component: string
}
