import type { iHomeContent } from '~/types/stories/homeTypes'
import { useGetStory } from './getStory'
import type { iStory } from '~/types/stories/story'

type tBusinessSolutions = () => Promise<{
  story: Ref<iStory<iHomeContent>>
}>

export const useBusinessSolutions: tBusinessSolutions = async () => {
  const story = useState<iStory<iHomeContent>>('home', () => null)

  try {
    if (!story.value) {
      const res = await useGetStory('home')

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
