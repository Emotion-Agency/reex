import type { iStory } from '~/types/stories/story'
import { useGetStory } from './getStory'
import type { iNavigationContent } from '~/types/stories/navigationTypes'

type tNavigationStory = () => Promise<{
  story: Ref<iStory<iNavigationContent>>
}>

export const useNavigationStory: tNavigationStory = async () => {
  const story = useState<iStory<iNavigationContent>>(
    'components/navigation',
    () => null
  )

  try {
    if (!story.value) {
      const res = await useGetStory('components/navigation')

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
