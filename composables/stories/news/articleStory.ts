import type { iStory } from '~/types/stories/story'
import { useGetStory } from '../getStory'
import type { iArticleContent } from '~/types/stories/news/articleTypes'

type tNewsStory = (
  id: string,
  slug: string
) => Promise<{
  story: Ref<iStory<iArticleContent>>
}>

export const useArticleStory: tNewsStory = async (id, slug) => {
  const story = useState<iStory<iArticleContent>>(`${slug}/${id}`, () => null)

  try {
    if (!story.value) {
      const res = await useGetStory(`${slug}/${id}`)

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
