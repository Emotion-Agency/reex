import type { iRichTextDoc } from '../richTextTypes'
import type { iMeta } from '../story'

export interface iNewsContent {
  meta: iMeta
  colored_title: iRichTextDoc
  description: string
  all_categories_btn: string
  show_more_btn: string
  _uid: string
  component: string
}
