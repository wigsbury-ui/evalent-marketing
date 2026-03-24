export type Category =
  | 'admissions-strategy'
  | 'ai-assessment'
  | 'school-leadership'
  | 'international-schools'
  | 'product-updates'
  | 'research'

export type Tag = string

export interface Author {
  name: string
  role: string
  avatar?: string
}

export interface Post {
  slug: string
  title: string
  excerpt: string
  content: string        // HTML or markdown string
  category: Category
  tags: Tag[]
  author: Author
  publishedAt: string    // ISO date string
  readingTime: number    // minutes
  coverImage?: string
  featured?: boolean
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
    color: 'bg-brand/10 text-brand border-brand/20',
  },
  'research': {
    label: 'Research',
    description: 'Data, evidence and academic perspectives on admissions',
    color: 'bg-gray-50 text-gray-700 border-gray-200',
  },
}

// Sample posts — replace with DB/CMS fetch in production
export const POSTS: Post[] = [
  {
    slug: 'why-writing-tasks-predict-school-readiness',
    title: 'Why Extended Writing Tasks Predict School Readiness Better Than MCQ',
    excerpt: 'Multiple choice questions measure knowledge. Extended writing reveals how a student thinks. Here is why the distinction matters for international school admissions.',
    content: `<p>When admissions teams ask what makes an Evalent report different from a standardised test result, the answer almost always comes back to the writing component...</p>`,
    category: 'ai-assessment',
    tags: ['writing assessment', 'MCQ', 'school readiness', 'IB'],
    author: { name: 'Evalent Research', role: 'Evalent' },
    publishedAt: '2026-03-15',
    readingTime: 6,
    featured: true,
  },
  {
    slug: 'five-admissions-bottlenecks-and-how-to-fix-them',
    title: 'Five Admissions Bottlenecks That Slow Down Your Pipeline (And How to Fix Them)',
    excerpt: 'From late assessor responses to untracked applications, these are the five patterns that consistently delay offers — and what you can do about each one.',
    category: 'admissions-strategy',
    tags: ['pipeline', 'workflow', 'assessors', 'conversion'],
    author: { name: 'Evalent Team', role: 'Evalent' },
    publishedAt: '2026-03-08',
    readingTime: 5,
    content: `<p>The average time from enquiry to offer at international schools is 18 days...</p>`,
  },
  {
    slug: 'eal-students-and-assessment-fairness',
    title: 'Assessing EAL Students Fairly: What the Evidence Says',
    excerpt: 'Language proficiency and academic ability are not the same thing. This piece looks at how Evalent separates the two in its scoring model.',
    category: 'international-schools',
    tags: ['EAL', 'fairness', 'language support', 'IB'],
    author: { name: 'Evalent Research', role: 'Evalent' },
    publishedAt: '2026-02-28',
    readingTime: 7,
    content: `<p>For schools with a high proportion of EAL applicants...</p>`,
  },
]

export function getPostsByCategory(category: Category): Post[] {
  return POSTS.filter(p => p.category === category)
}

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find(p => p.slug === slug)
}

export function searchPosts(query: string): Post[] {
  const q = query.toLowerCase()
  return POSTS.filter(p =>
    p.title.toLowerCase().includes(q) ||
    p.excerpt.toLowerCase().includes(q) ||
    p.tags.some(t => t.toLowerCase().includes(q)) ||
    CATEGORIES[p.category].label.toLowerCase().includes(q)
  )
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}
