import type { iDeepLink, iImage, iStory } from './story'

export interface iArticleItem {
  asset: iImage
  category: string
  date: string
  title: string
  component: string
  _uid: string
}

export interface iArticles {
  title: string
  link: iDeepLink[]
  article_items: iStory<iArticleItem>[]
  component: string
  _uid: string
}
