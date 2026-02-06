import MemberBlok from '~/components/news/MemberBlok.vue'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('member', MemberBlok)
})
