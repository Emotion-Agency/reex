import type { iStory } from '~/types/stories/story'
import { useGetStories } from './getStories'
import type { iServiceContent } from '~/types/stories/service/serviceTypes'

type tServiceStories = (slug: string) => Promise<{
  services: Ref<iStory<iServiceContent>[]>
}>

export const useServiceStories: tServiceStories = async (slug: string) => {
  const services = useState<iStory<iServiceContent>[]>(slug, () => [])

  try {
    if (!services.value?.length) {
      const res = await useGetStories({
        by_slugs: `${slug}/*`,
        content_type: 'service',
        sort_by: 'position:asc',
        is_startpage: false,
      })

      services.value = res.value
    }
  } catch (error) {
    console.log(error)
  }

  if (import.meta.client) {
    const route = useRoute()
    const slug = route.params.services as string

    const currentStory = services.value.find(story => story.slug === slug)

    useStoryblokBridge(currentStory?.id, evStory => {
      services.value = services.value.filter(story => story.slug !== slug)
      services.value = [...services.value, evStory as unknown as iStory]
    })
  }

  return { services }
}
