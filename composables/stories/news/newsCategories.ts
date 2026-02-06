import type { iStory } from '~/types/stories/story'
import { useGetStories } from '../getStories'
import type { iNewsCategoriesContent } from '~/types/stories/news/newsCategoriesTypes'

type tNewsCategoriesStories = () => Promise<{
  categories: Ref<iStory<iNewsCategoriesContent>[]>
}>

export const useNewsCategoriesStories: tNewsCategoriesStories = async () => {
  const categories = useState<iStory<iNewsCategoriesContent>[]>(
    `news/categories`,
    () => []
  )

  try {
    if (!categories.value?.length) {
      const res = await useGetStories({
        by_slugs: `news/categories/*`,
        content_type: 'article_categories',
        sort_by: 'position:asc',
        is_startpage: false,
      })

      categories.value = res.value
    }
  } catch (error) {
    console.log(error)
  }

  if (import.meta.client) {
    const route = useRoute()
    const slug = route.params.categories as string

    const currentStory = categories.value.find(story => story.slug === slug)

    useStoryblokBridge(currentStory?.id, evStory => {
      categories.value = categories.value.filter(story => story.slug !== slug)
      categories.value = [...categories.value, evStory as unknown as iStory]
    })
  }

  return { categories }
}
