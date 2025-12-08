import type { iDeepLink, iImage, iMeta } from '../story'

export interface iAssetsList {
  assets: iImage[]
  component: string
  _uid: string
}

export interface iAboutPartners {
  tag: string
  title: string
  link: iDeepLink[]
  logos: iImage[]
  component: string
  _uid: string
}

export interface iHistoryItem {
  title: string
  date: string
  text: string
  asset: iImage
  component: string
  _uid: string
}

export interface iHistory {
  title: string
  text: string
  items: iHistoryItem[]
  component: string
  _uid: string
}

export interface iMissionItem {
  title: string
  text: string
  icon: iImage
  component: string
  _uid: string
}

export interface iMissions {
  tag: string
  title: string
  items: iMissionItem[]
  component: string
  _uid: string
}

export interface iAboutHero {
  title: string
  background_asset: iImage
  component: string
  _uid: string
}

export interface iAboutContent {
  meta: iMeta[]
  about_hero: iAboutHero[]
  missions: iMissions[]
  history: iHistory[]
  about_partners: iAboutPartners[]
  assets_list: iAssetsList[]
}
