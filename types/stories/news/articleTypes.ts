import type { iImage, iMeta, iStory } from '../story'

export interface iArticleCategory {
  name: string
  component: string
  _uid: string
}

export interface iArticleContent {
  meta: iMeta
  asset: iImage
  date: string
  title: string
  category: iStory<iArticleCategory>[]
  content: any
  _uid: string
  component: string
}
