import type { iStory } from '~/types/stories/story'
import { useGetStory } from '../getStory'
import type { iGlobalFormContent } from '~/types/stories/globalTypes'

type tGlobalFormStory = () => Promise<{
  story: Ref<iStory<iGlobalFormContent>>
}>

export const useGlobalFormStory: tGlobalFormStory = async () => {
  const story = useState<iStory<iGlobalFormContent>>('global/form', () => null)

  try {
    if (!story.value) {
      const res = await useGetStory('global/form')
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
