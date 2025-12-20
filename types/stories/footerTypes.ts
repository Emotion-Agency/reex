import type { iRichTextDoc } from './richTextTypes'

export interface iFooterContent {
  text: string
  colored_copyright_text: iRichTextDoc
  made_by_text: string
  navigation_label: string
  contacts_label: string
  socials_label: string
  phone_label: string
  email_label: string
  _uid: string
  component: string
}
