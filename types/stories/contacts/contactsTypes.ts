import type { iRichTextDoc } from '../richTextTypes'
import type { iDeepLink, iMeta } from '../story'

export interface iContactsContent {
  meta: iMeta[]
  colored_title: iRichTextDoc
  phone: string
  email: string
  x: string
  instagram: string
  telegram: string
  address_list: iDeepLink[]
  button: string
}
