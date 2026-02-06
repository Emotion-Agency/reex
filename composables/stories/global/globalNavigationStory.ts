import type { iStory } from '~/types/stories/story'
import { useGetStory } from '../getStory'
import type { iGlobalNavigationContent } from '~/types/stories/globalTypes'

type tGlobalNavigationStory = () => Promise<{
  story: Ref<iStory<iGlobalNavigationContent>>
}>

export const useGlobalNavigationStory: tGlobalNavigationStory = async () => {
  const story = useState<iStory<iGlobalNavigationContent>>(
    'global/navigation',
    () => null
  )

  try {
    if (!story.value) {
      const res = await useGetStory('global/navigation')
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
