import Link from 'next/link'
import { Post, CATEGORIES, formatDate } from '@/lib/blog'

export default function PostCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  const cat = CATEGORIES[post.category]
  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className="group block bg-white rounded-2xl border border-gray-200 hover:border-brand/30 hover:shadow-lg transition-all overflow-hidden">
        {post.coverImage && (
          <div className="w-full h-52 bg-gray-100 overflow-hidden">
            <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
        )}
        {!post.coverImage && (
          <div className="w-full h-40 bg-gradient-to-br from-navy to-brand/80 flex items-center justify-center">
            <span className="text-white/20 text-6xl font-black select-none">E</span>
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${cat.color}`}>{cat.label}</span>
            {post.featured && <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">Featured</span>}
          </div>
          <h2 className="text-lg font-black text-navy leading-snug mb-2 group-hover:text-brand transition-colors">{post.title}</h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span>{post.author.name}</span>
            <span>{formatDate(post.publishedAt)} · {post.readingTime} min read</span>
          </div>
        </div>
      </Link>
    )
  }
  return (
    <Link href={`/blog/${post.slug}`} className="group flex gap-4 py-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 -mx-4 px-4 rounded-xl transition-colors">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1.5">
          <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${cat.color}`}>{cat.label}</span>
        </div>
        <h3 className="text-sm font-bold text-navy leading-snug group-hover:text-brand transition-colors line-clamp-2">{post.title}</h3>
        <p className="text-xs text-gray-400 mt-1 line-clamp-1">{post.excerpt}</p>
        <div className="text-[11px] text-gray-300 mt-1.5">{formatDate(post.publishedAt)} · {post.readingTime} min read</div>
      </div>
    </Link>
  )
}
