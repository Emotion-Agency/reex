import type { iStory } from '~/types/stories/story'
import { useGetStory } from './getStory'
import type { iFooterContent } from '~/types/stories/footerTypes'

type tFooterStory = () => Awaited<{
  story: Ref<iStory<iFooterContent>>
}>

export const useFooterStory: tFooterStory = () => {
  const story = useState<iStory<iFooterContent>>(
    'components/footer',
    () => null
  )

  try {
    if (!story.value) {
      useAsyncData('footerStory', () => useGetStory('components/footer')).then(
        res => {
          if (res.data.value?.value) {
            story.value = res.data.value?.value
          }
        }
      )
    }
  } catch (error) {
    console.log(error)
  }

  if (import.meta.client) {
    useStoryblokBridge(story.value?.id, evStory => {
      story.value = evStory as unknown as iStory
    })
  }

  return { story }
}
