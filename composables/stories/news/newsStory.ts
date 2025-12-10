import type { iStory } from '~/types/stories/story'
import { useGetStory } from '../getStory'
import type { iNewsContent } from '~/types/stories/news/newsTypes'

type tNewsStory = () => Promise<{
  story: Ref<iStory<iNewsContent>>
}>

export const useNewsStory: tNewsStory = async () => {
  const story = useState<iStory<iNewsContent>>(`news/index`, () => null)

  try {
    if (!story.value) {
      const res = await useGetStory('news/index')

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
