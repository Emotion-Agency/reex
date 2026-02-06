import type { iStory } from '~/types/stories/story'
import type { iGlobalArticlesTitleContent } from '~/types/stories/globalTypes'
import { useGetStory } from '../getStory'

type tGlobalStory = () => Promise<{
  story: Ref<iStory<iGlobalArticlesTitleContent>>
}>

export const useGlobalArticlesTitleStory: tGlobalStory = async () => {
  const story = useState<iStory<iGlobalArticlesTitleContent>>(
    'global/articles-title',
    () => null
  )

  try {
    if (!story.value) {
      const res = await useGetStory('global/articles-title')
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
