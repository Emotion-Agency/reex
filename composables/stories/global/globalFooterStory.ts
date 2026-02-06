import type { iStory } from '~/types/stories/story'
import { useGetStory } from '../getStory'
import type { iGlobalFooterContent } from '~/types/stories/globalTypes'

type tGlobalFooterStory = () => Promise<{
  story: Ref<iStory<iGlobalFooterContent>>
}>

export const useGlobalFooterStory: tGlobalFooterStory = async () => {
  const story = useState<iStory<iGlobalFooterContent>>(
    'global/footer',
    () => null
  )

  try {
    if (!story.value) {
      const res = await useGetStory('global/footer')
      story.value = res.value
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
