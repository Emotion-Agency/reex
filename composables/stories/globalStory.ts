import type { iStory } from '~/types/stories/story'
import { useGetStory } from './getStory'
import type { iGlobalContent } from '~/types/stories/globalTypes'

type tGlobalStory = () => Awaited<{
  story: Ref<iStory<iGlobalContent>>
}>

export const useGlobalStory: tGlobalStory = () => {
  const story = useState<iStory<iGlobalContent>>('globalStory', () => null)

  try {
    if (!story.value) {
      useAsyncData('globalStory', () =>
        useGetStory('global/company-contact')
      ).then(res => {
        if (res.data.value?.value) {
          story.value = res.data.value?.value
        }
      })
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
