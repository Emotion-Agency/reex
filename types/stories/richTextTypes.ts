export type iRichTextNode = {
  type: string
  text?: string
  marks?: Array<{ type: string }>
  content?: iRichTextNode[]
}

export type iRichTextDoc = {
  type: 'doc'
  content: iRichTextNode[]
}
