import type { iStory } from '~/types/stories/story'
import { useGetStory } from './getStory'
import type { iAboutContent } from '~/types/stories/about/aboutTypes'

type tAboutStory = () => Promise<{
  story: Ref<iStory<iAboutContent>>
}>

export const useAboutStory: tAboutStory = async () => {
  const story = useState<iStory<iAboutContent>>('about', () => null)

  try {
    if (!story.value) {
      const res = await useGetStory('about')

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
