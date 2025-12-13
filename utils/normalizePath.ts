export const normalizePath = (url?: string) => {
  if (!url) return '/'

  const cleaned = url.replace(/^\/+/, '').replace(/\/index$/, '')

  // розбиваємо шлях на сегменти
  const segments = cleaned.split('/')

  // якщо останній сегмент — home
  if (segments[segments.length - 1] === 'home') {
    segments.pop()
  }

  // якщо нічого не залишилось — root
  if (segments.length === 0) {
    return '/'
  }

  return `/${segments.join('/')}`
}
