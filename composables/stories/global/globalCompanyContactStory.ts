import type { iStory } from '~/types/stories/story'
import type { iGlobalCompanyContactContent } from '~/types/stories/globalTypes'
import { useGetStory } from '../getStory'

type tGlobalStory = () => Promise<{
  story: Ref<iStory<iGlobalCompanyContactContent>>
}>

export const useGlobalCompanyContactStory: tGlobalStory = async () => {
  const story = useState<iStory<iGlobalCompanyContactContent>>(
    'global/company-contact',
    () => null
  )

  try {
    if (!story.value) {
      const res = await useGetStory('global/company-contact')
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
