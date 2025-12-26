import type { iRichTextDoc } from './richTextTypes'
import type { iDeepLink } from './story'

export interface iGlobalCompanyContactContent {
  phone: string
  email: string
  x: string
  instagram: string
  telegram: string
  _uid: string
  address_list: iDeepLink[]
  component: string
}

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
