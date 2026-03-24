export type Category =
  | 'admissions-strategy'
  | 'ai-assessment'
  | 'school-leadership'
  | 'international-schools'
  | 'product-updates'
  | 'research'

export interface Post {
  id: string
  slug: string
  title: string
  excerpt: string
  body: string
  blog_category: Category
  tags: string[]
  cover_image_url: string | null
  reading_time: number
  published_at: string
  created_by: string
}

export const CATEGORIES: Record<Category, { label: string; description: string; color: string }> = {
  'admissions-strategy': {
    label: 'Admissions Strategy',
    description: 'Best practice for independent and international school admissions',
    color: 'bg-blue-50 text-blue-700 border-blue-200',
  },
  'ai-assessment': {
    label: 'AI & Assessment',
    description: 'How AI is changing the way schools evaluate applicants',
    color: 'bg-purple-50 text-purple-700 border-purple-200',
  },
  'school-leadership': {
    label: 'School Leadership',
    description: 'Insights for heads, deputies and admissions directors',
    color: 'bg-amber-50 text-amber-700 border-amber-200',
  },
  'international-schools': {
    label: 'International Schools',
    description: 'IB, EAL, global mobility and international admissions',
    color: 'bg-green-50 text-green-700 border-green-200',
  },
  'product-updates': {
    label: 'Product Updates',
    description: 'New features, improvements and platform announcements',
    color: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  },
  'research': {
    label: 'Research',
    description: 'Data, evidence and academic perspectives on admissions',
    color: 'bg-gray-50 text-gray-700 border-gray-200',
  },
}

export async function fetchPosts(params?: { category?: Category; search?: string }): Promise<Post[]> {
  const url = new URL('/api/blog', 'https://www.evalent.io')
  if (params?.category) url.searchParams.set('category', params.category)
  if (params?.search) url.searchParams.set('search', params.search)
  const res = await fetch(url.toString(), { cache: 'no-store' })
  if (!res.ok) return []
  const data = await res.json()
  return Array.isArray(data) ? data.filter((p: Post) => p.slug) : []
}

export async function fetchPostBySlug(slug: string): Promise<Post | null> {
  const res = await fetch(`https://www.evalent.io/api/blog?slug=${slug}`, { cache: 'no-store' })
  if (!res.ok) return null
  const data = await res.json()
  return data?.slug ? data : null
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  })
}
