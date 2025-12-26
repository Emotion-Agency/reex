import type { StoryblokRichTextDocumentNode } from '@storyblok/richtext'

export const extractPlainText = (
  node?: StoryblokRichTextDocumentNode
): string => {
  if (!node) return ''

  if ('text' in node && typeof node.text === 'string') {
    return node.text
  }

  if ('content' in node && Array.isArray(node.content)) {
    return node.content.map(extractPlainText).join(' ')
  }

  return ''
}

export const calculateReadingTime = (
  richText?: StoryblokRichTextDocumentNode,
  wordsPerMinute = 200
): number => {
  const text = extractPlainText(richText)
  const words = text.trim().split(/\s+/).filter(Boolean).length

  return Math.max(1, Math.ceil(words / wordsPerMinute))
}
