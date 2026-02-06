import type { iStory } from '~/types/stories/story'
import { useGetStory } from './getStory'
import type { iServiceContent } from '~/types/stories/service/serviceTypes'

type tProjectStory = (
  id: string,
  slug: string
) => Promise<{
  story: Ref<iStory<iServiceContent>>
}>

export const useServiceStory: tProjectStory = async (id, slug) => {
  const story = useState<iStory<iServiceContent>>(`${slug}/${id}`, () => null)

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
