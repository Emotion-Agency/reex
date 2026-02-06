import type { iStory } from '~/types/stories/story'
import { useGetStory } from './getStory'
import type { iContactsContent } from '~/types/stories/contacts/contactsTypes'

type tContactsStory = () => Promise<{
  story: Ref<iStory<iContactsContent>>
}>

export const useContactsStory: tContactsStory = async () => {
  const story = useState<iStory<iContactsContent>>('contacts', () => null)

  try {
    if (!story.value) {
      const res = await useGetStory('contacts')

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
