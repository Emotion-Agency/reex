import type { iHomeContent } from '~/types/stories/home/homeTypes'
import type { iStory } from '~/types/stories/story'
import { useGetStory } from './getStory'

type tHomeStory = () => Promise<{
  story: Ref<iStory<iHomeContent>>
}>

export const useHomeStory: tHomeStory = async () => {
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
