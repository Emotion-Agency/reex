import type { iRichTextDoc } from './richTextTypes'

export interface iFormContent {
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
