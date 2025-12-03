interface BaseNavigationItem {
  id: number
  label: string
}

interface NavigationSingle extends BaseNavigationItem {
  link: { url: string }
  links?: never
}

interface NavigationGroup extends BaseNavigationItem {
  links: { label: string; url: string }[]
  link?: never
}

type NavigationItem = NavigationSingle | NavigationGroup

const navigationList: NavigationItem[] = [
  {
    id: 1,
    label: 'Головна',
    link: {
      url: '/',
    },
  },
  {
    id: 2,
    label: 'Послуги',
    links: [
      {
        label: 'Аутстафінг',
        url: '/outstaffing',
      },
      {
        label: 'Іноземний персонал',
        url: '/foreign-personnel',
      },
      {
        label: 'Аутсорсинг',
        url: '/outsourcing',
      },
      {
        label: 'Аутстафінг торгового персоналу',
        url: '/retail-staff-outstaffing',
      },
      {
        label: 'Підбір',
        url: '/recruitment',
      },
    ],
  },
  {
    id: 3,
    label: 'Про компанію',
    link: {
      url: '/about',
    },
  },
  {
    id: 4,
    label: 'Блог',
    link: {
      url: '/blog',
    },
  },
]

export default navigationList
