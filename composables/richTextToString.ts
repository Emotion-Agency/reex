const richTextToString = (doc?: any): string => {
  if (!doc?.content?.length) return ''

  return doc.content
    .flatMap((block: any) => block.content ?? [])
    .map((node: any) => node.text ?? '')
    .join('')
}

export default richTextToString
