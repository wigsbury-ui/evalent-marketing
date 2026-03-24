'use client'
import { useParams } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import PostCard from '@/components/blog/PostCard'
import { getPostBySlug, POSTS, CATEGORIES, formatDate } from '@/lib/blog'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <div className="min-h-screen">
        <Nav />
        <div className="max-w-2xl mx-auto px-6 py-32 text-center">
          <p className="text-4xl mb-4">404</p>
          <h1 className="text-2xl font-black text-navy mb-3">Post not found</h1>
          <Link href="/blog" className="text-brand hover:underline text-sm font-semibold">← Back to the blog</Link>
        </div>
        <Footer />
      </div>
    )
  }

  const cat = CATEGORIES[post.category]
  const related = POSTS.filter(p => p.slug !== post.slug && p.category === post.category).slice(0, 3)
  const moreFromBlog = POSTS.filter(p => p.slug !== post.slug && p.category !== post.category).slice(0, 3)

  return (
    <div className="min-h-screen">
      <Nav />

      {/* Hero */}
      <section className="bg-navy py-14 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-blue-300 mb-6">
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <button
              onClick={() => window.history.back()}
              className="hover:text-white transition-colors"
            >
              {cat.label}
            </button>
          </div>
          {/* Category badge */}
          <div className="mb-4">
            <Link
              href={`/blog?category=${post.category}`}
              className={`inline-block text-xs font-bold px-3 py-1 rounded-full border ${cat.color}`}
            >
              {cat.label}
            </Link>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight mb-5">
            {post.title}
          </h1>
          <p className="text-blue-200 text-lg leading-relaxed mb-8">{post.excerpt}</p>
          {/* Meta row */}
          <div className="flex items-center gap-4 text-sm text-blue-300">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-xs">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <p className="text-white font-semibold text-xs">{post.author.name}</p>
                <p className="text-blue-400 text-[11px]">{post.author.role}</p>
              </div>
            </div>
            <span className="text-white/20">·</span>
            <span>{formatDate(post.publishedAt)}</span>
            <span className="text-white/20">·</span>
            <span>{post.readingTime} min read</span>
          </div>
        </div>
      </section>

      {/* Cover image */}
      {post.coverImage && (
        <div className="w-full h-72 md:h-96 bg-gray-100 overflow-hidden">
          <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
        </div>
      )}

      {/* Content + sidebar */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-[1fr_300px] gap-12">

          {/* Article body */}
          <article>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map(tag => (
                <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-500 font-medium">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Body content */}
            <div
              className="prose prose-lg max-w-none
                prose-headings:font-black prose-headings:text-navy prose-headings:tracking-tight
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-5
                prose-a:text-brand prose-a:no-underline hover:prose-a:underline
                prose-strong:text-navy prose-strong:font-bold
                prose-ul:text-gray-600 prose-ol:text-gray-600
                prose-li:mb-1
                prose-blockquote:border-l-4 prose-blockquote:border-brand
                prose-blockquote:bg-blue-50 prose-blockquote:rounded-r-xl
                prose-blockquote:px-5 prose-blockquote:py-3 prose-blockquote:not-italic
                prose-blockquote:text-navy prose-blockquote:font-semibold"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share / CTA */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="bg-navy rounded-2xl p-8 text-center">
                <p className="text-white font-black text-xl mb-2">Try Evalent free</p>
                <p className="text-blue-200 text-sm mb-5">10 free reports. No credit card. Set up in 5 minutes.</p>
                <a
                  href="https://app.evalent.io/signup"
                  className="inline-flex items-center gap-2 bg-brand text-white font-bold px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                  Start free trial →
                </a>
              </div>
            </div>

            {/* Back link */}
            <div className="mt-8">
              <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-brand hover:underline font-semibold">
                ← Back to all posts
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">

            {/* About the author */}
            <div className="bg-gray-50 rounded-2xl p-5">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">About the author</p>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white font-black text-sm">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-navy">{post.author.name}</p>
                  <p className="text-xs text-gray-400">{post.author.role}</p>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Browse by category</p>
              <div className="space-y-1.5">
                {(Object.entries(CATEGORIES) as [any, any][]).map(([key, cat]) => (
                  <Link
                    key={key}
                    href={`/blog`}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-colors border ${
                      post.category === key ? cat.color : 'bg-white text-gray-600 border-gray-100 hover:border-gray-300'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className="text-gray-300 font-normal">{POSTS.filter(p => p.category === key).length}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Related posts */}
            {related.length > 0 && (
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Related posts</p>
                <div className="divide-y divide-gray-100">
                  {related.map(p => <PostCard key={p.slug} post={p} />)}
                </div>
              </div>
            )}

            {/* More from the blog */}
            {moreFromBlog.length > 0 && (
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">More from the blog</p>
                <div className="divide-y divide-gray-100">
                  {moreFromBlog.map(p => <PostCard key={p.slug} post={p} />)}
                </div>
              </div>
            )}

          </aside>
        </div>
      </div>

      <Footer />
    </div>
  )
}
