'use client'
import { useState, useMemo } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PostCard from '@/components/blog/PostCard'
import Link from 'next/link'
import { POSTS, CATEGORIES, Category, searchPosts } from '@/lib/blog'

export default function BlogIndex() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all')

  const results = useMemo(() => {
    let posts = query.trim() ? searchPosts(query) : POSTS
    if (activeCategory !== 'all') posts = posts.filter(p => p.category === activeCategory)
    return posts
  }, [query, activeCategory])

  const featured = POSTS.filter(p => p.featured)
  const showGrid = !query.trim() && activeCategory === 'all'

  return (
    <div className="min-h-screen">
      <Nav />

      {/* Hero */}
      <section className="bg-navy py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5">
            INSIGHTS & RESOURCES
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            The Evalent Blog
          </h1>
          <p className="text-blue-200 text-lg leading-relaxed mb-8">
            Admissions strategy, AI assessment, school leadership, and product updates.
          </p>
          {/* Search */}
          <div className="relative max-w-lg mx-auto">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={e => { setQuery(e.target.value); setActiveCategory('all') }}
              placeholder="Search posts, topics, or tags…"
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand shadow-lg"
            />
            {query && (
              <button onClick={() => setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Category pills */}
      <div className="sticky top-16 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center gap-2 overflow-x-auto scrollbar-hide">
          <button
            onClick={() => setActiveCategory('all')}
            className={`flex-shrink-0 text-xs font-bold px-3.5 py-1.5 rounded-full border transition-all ${
              activeCategory === 'all'
                ? 'bg-navy text-white border-navy'
                : 'bg-white text-gray-500 border-gray-200 hover:border-navy hover:text-navy'
            }`}
          >
            All posts
          </button>
          {(Object.entries(CATEGORIES) as [Category, typeof CATEGORIES[Category]][]).map(([key, cat]) => (
            <button
              key={key}
              onClick={() => { setActiveCategory(key); setQuery('') }}
              className={`flex-shrink-0 text-xs font-bold px-3.5 py-1.5 rounded-full border transition-all ${
                activeCategory === key
                  ? cat.color + ' font-black shadow-sm'
                  : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Search results */}
        {query.trim() && (
          <div>
            <p className="text-sm text-gray-400 mb-6">{results.length} result{results.length !== 1 ? 's' : ''} for <strong className="text-gray-700">"{query}"</strong></p>
            {results.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-400 text-sm">No posts found. Try a different search term.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map(post => <PostCard key={post.slug} post={post} featured />)}
              </div>
            )}
          </div>
        )}

        {/* Category filtered */}
        {!query.trim() && activeCategory !== 'all' && (
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-black text-navy">{CATEGORIES[activeCategory].label}</h2>
              <p className="text-sm text-gray-500 mt-1">{CATEGORIES[activeCategory].description}</p>
            </div>
            {results.length === 0 ? (
              <div className="text-center py-20 border-2 border-dashed border-gray-200 rounded-2xl">
                <p className="text-gray-400 text-sm">No posts in this category yet.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map(post => <PostCard key={post.slug} post={post} featured />)}
              </div>
            )}
          </div>
        )}

        {/* Default: featured + all posts */}
        {showGrid && (
          <div className="space-y-12">
            {/* Featured */}
            {featured.length > 0 && (
              <div>
                <h2 className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-5">Featured</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featured.map(post => <PostCard key={post.slug} post={post} featured />)}
                </div>
              </div>
            )}
            {/* All posts by category */}
            {(Object.keys(CATEGORIES) as Category[]).map(cat => {
              const catPosts = POSTS.filter(p => p.category === cat)
              if (catPosts.length === 0) return null
              return (
                <div key={cat}>
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <h2 className="text-xs font-bold text-gray-400 tracking-widest uppercase">{CATEGORIES[cat].label}</h2>
                    </div>
                    <button
                      onClick={() => setActiveCategory(cat)}
                      className="text-xs text-brand hover:underline font-semibold"
                    >
                      See all →
                    </button>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {catPosts.slice(0, 3).map(post => <PostCard key={post.slug} post={post} featured />)}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
