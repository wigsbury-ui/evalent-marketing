import Link from 'next/link'
import { Post, CATEGORIES, formatDate } from '@/lib/blog'

export default function PostCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  const cat = CATEGORIES[post.blog_category] || CATEGORIES['admissions-strategy']
  const readTime = post.reading_time || 5

  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className="group block bg-white rounded-2xl border border-gray-200 hover:border-brand/30 hover:shadow-lg transition-all overflow-hidden">
        {post.cover_image_url ? (
          <div className="w-full h-44 overflow-hidden bg-gray-100">
            <img src={post.cover_image_url} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
        ) : (
          <div className="w-full h-32 bg-gradient-to-br from-navy to-brand/80 flex items-center justify-center">
            <span className="text-white/15 text-6xl font-black select-none">E</span>
          </div>
        )}
        <div className="p-5">
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${cat.color}`}>{cat.label}</span>
          <h2 className="text-base font-black text-navy leading-snug mt-3 mb-2 group-hover:text-brand transition-colors line-clamp-2">{post.title}</h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span>Evalent</span>
            <span>{formatDate(post.published_at)} · {readTime} min</span>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/blog/${post.slug}`} className="group flex gap-3 py-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 -mx-3 px-3 rounded-xl transition-colors">
      <div className="flex-1 min-w-0">
        <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${cat.color}`}>{cat.label}</span>
        <h3 className="text-sm font-bold text-navy leading-snug group-hover:text-brand transition-colors line-clamp-2 mt-1.5">{post.title}</h3>
        <div className="text-[11px] text-gray-300 mt-1">{formatDate(post.published_at)} · {readTime} min</div>
      </div>
    </Link>
  )
}
