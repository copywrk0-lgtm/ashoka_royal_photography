import type {Story} from '@/types/site'; export function StoryCard({story}:{story:Story}){return <article><h3>{story.title}</h3><p>{story.place}</p></article>}
