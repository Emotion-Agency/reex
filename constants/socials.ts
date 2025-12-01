import Instagram from '~/components/icons/socials/Instagram.vue'
import Telegram from '~/components/icons/socials/Telegram.vue'
import X from '~/components/icons/socials/X.vue'

const socialsList = [
  {
    id: 1,
    label: 'X',
    link: {
      url: 'https://x.com/',
    },
    icon: X,
  },
  {
    id: 2,
    label: 'Instagram',
    link: {
      url: 'https://www.instagram.com/',
    },
    icon: Instagram,
  },
  {
    id: 3,
    label: 'Telegram',
    link: {
      url: 'https://web.telegram.org/k/',
    },
    icon: Telegram,
  },
]

export default socialsList
