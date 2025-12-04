import type { iDeepLink, iImage } from './story'

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
  article_items: { content: iArticleItem }[]
  component: string
  _uid: string
}
