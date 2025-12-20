import type { iRichTextDoc } from '../richTextTypes'
import type { iMeta } from '../story'

export interface iContactsContent {
  meta: iMeta[]
  colored_title: iRichTextDoc
  button: string
}
