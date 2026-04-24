'use client'
import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import PostCard from '@/components/blog/PostCard'
import { fetchPostBySlug, fetchPosts, CATEGORIES, Post, formatDate } from '@/lib/blog'
import ShareButtons from '@/components/blog/ShareButtons'
import BlogCTA from '@/components/blog/BlogCTA'
import CtaTrialButton from '@/components/CtaTrialButton'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const [post, setPost] = useState<Post | null>(null)
  const [related, setRelated] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPostBySlug(slug).then(async p => {
      setPost(p)
      if (p) {
        const all = await fetchPosts()
        setRelated(all.filter(x => x.slug !== slug && x.blog_category === p.blog_category).slice(0, 3))
      }
      setLoading(false)
    })
  }, [slug])

  if (loading) return (
    <div className="min-h-screen"><Nav />
      <div className="flex items-center justify-center py-32">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-brand border-t-transparent" />
      </div>
    <Footer /></div>
  )

  if (!post) return (
    <div className="min-h-screen"><Nav />
      <div className="max-w-2xl mx-auto px-6 py-32 text-center">
        <p className="text-4xl mb-4">404</p>
        <h1 className="text-2xl font-black text-navy mb-3">Post not found</h1>
        <Link href="/blog" className="text-brand hover:underline text-sm font-semibold">← Back to the blog</Link>
      </div>
    <Footer /></div>
  )

  const cat = CATEGORIES[post.blog_category]

  return (
    <div className="min-h-screen">
      <Nav />

      {/* Hero */}
      <section className="bg-navy py-14 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-xs text-blue-300 mb-6">
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-blue-400">{cat.label}</span>
          </div>
          <div className="mb-4">
            <Link href="/blog" onClick={e => { e.preventDefault(); window.history.back() }}
              className={`inline-block text-xs font-bold px-3 py-1 rounded-full border ${cat.color}`}>
              {cat.label}
            </Link>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight mb-5">{post.title}</h1>
          <p className="text-blue-200 text-lg leading-relaxed mb-8">{post.excerpt}</p>
          <div className="flex items-center gap-4 text-sm text-blue-300">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-xs">E</div>
              <div>
                <p className="text-white font-semibold text-xs">Evalent</p>
                <p className="text-blue-400 text-[11px]">Admissions Intelligence</p>
              </div>
            </div>
            <span className="text-white/20">·</span>
            <span>{formatDate(post.published_at)}</span>
            <span className="text-white/20">·</span>
            <span>{post.reading_time} min read</span>
          </div>
        </div>
      </section>

      {/* Cover image */}
      {post.cover_image_url && (
        <div className="w-full h-64 md:h-80 overflow-hidden bg-gray-100">
          <img src={post.cover_image_url} alt={post.title} className="w-full h-full object-cover" />
        </div>
      )}

      {/* Content + sidebar */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-[1fr_300px] gap-12">
          <article>
            {/* Tags */}
            {post.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map(tag => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-500 font-medium">#{tag}</span>
                ))}
              </div>
            )}

            {/* Share */}
            <div className="mb-8 pb-6 border-b border-gray-100">
              <ShareButtons
                url={`https://evalent.io/blog/${post.slug}`}
                title={post.title}
                excerpt={post.excerpt}
              />
            </div>

            {/* Body */}
            <div className="prose prose-lg max-w-none
              prose-headings:font-black prose-headings:text-navy prose-headings:tracking-tight
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-5
              prose-a:text-brand prose-a:no-underline hover:prose-a:underline
              prose-strong:text-navy
              prose-ul:text-gray-600 prose-ol:text-gray-600
              prose-blockquote:border-l-4 prose-blockquote:border-brand
              prose-blockquote:bg-blue-50 prose-blockquote:rounded-r-xl
              prose-blockquote:px-5 prose-blockquote:py-3 prose-blockquote:not-italic
              prose-blockquote:text-navy prose-blockquote:font-semibold"
              dangerouslySetInnerHTML={{ __html: post.body }}
            />

            {/* Share before CTA */}
            <div className="mt-12 pt-8 border-t border-gray-100 mb-6">
              <ShareButtons
                url={`https://evalent.io/blog/${post.slug}`}
                title={post.title}
                excerpt={post.excerpt}
              />
            </div>

            {/* End CTA */}
            <div className="pt-8 border-t border-gray-100">
              <div className="bg-navy rounded-2xl p-8 text-center">
                <p className="text-white font-black text-xl mb-2">Try Evalent free</p>
                <p className="text-blue-200 text-sm mb-5">10 free reports. No credit card. Set up in 5 minutes.</p>
                <CtaTrialButton />
              </div>
            </div>

            <div className="mt-8">
              <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-brand hover:underline font-semibold">← Back to all posts</Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-5">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Browse by category</p>
              <div className="space-y-1.5">
                {(Object.entries(CATEGORIES) as [any, any][]).map(([key, c]) => (
                  <Link key={key} href={`/blog`}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-colors border ${post.blog_category === key ? c.color : 'bg-white text-gray-600 border-gray-100 hover:border-gray-300'}`}>
                    <span>{c.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {related.length > 0 && (
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Related posts</p>
                <div className="divide-y divide-gray-100">
                  {related.map(p => <PostCard key={p.slug} post={p} />)}
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
