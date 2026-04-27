'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, Filter, Calendar, Tag, ArrowRight, FileText, Clock, Eye } from 'lucide-react'
import { ContentImage } from '@/components/shared/content-image'
import type { SitePost } from '@/lib/site-connector'

interface PressReleaseListingProps {
  posts: SitePost[]
  category?: string
}

export function PressReleaseListing({ posts, category }: PressReleaseListingProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(category || 'all')
  const [sortBy, setSortBy] = useState('latest')

  // Get unique categories from posts
  const categories = useMemo(() => {
    const cats = new Set<string>()
    posts.forEach(post => {
      if (post.tags && post.tags.length > 0) {
        post.tags.forEach(tag => cats.add(tag))
      }
    })
    return Array.from(cats).sort()
  }, [posts])

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    let filtered = posts

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (post.summary && post.summary.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post =>
        post.tags && post.tags.includes(selectedCategory)
      )
    }

    // Sort posts
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'latest':
          return new Date(b.publishedAt || 0).getTime() - new Date(a.publishedAt || 0).getTime()
        case 'oldest':
          return new Date(a.publishedAt || 0).getTime() - new Date(b.publishedAt || 0).getTime()
        case 'title':
          return a.title.localeCompare(b.title)
        default:
          return 0
      }
    })

    return filtered
  }, [posts, searchQuery, selectedCategory, sortBy])

  const getPostImage = (post: SitePost) => {
    const media = Array.isArray(post?.media) ? post?.media : []
    const mediaUrl = media.find((item) => typeof item?.url === 'string' && item.url)?.url
    const contentImage = typeof post?.content === 'object' && post?.content && Array.isArray((post.content as any).images)
      ? (post.content as any).images.find((url: unknown) => typeof url === 'string' && url)
      : null
    return mediaUrl || contentImage || '/placeholder.svg?height=400&width=600'
  }

  const formatDate = (dateString?: string | null) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-[#411530]">Press Releases</h1>
              <p className="mt-2 text-gray-600">
                Browse the latest press releases and news from our distribution network
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-600">
                Showing <span className="font-semibold text-[#411530]">{filteredPosts.length}</span> releases
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search press releases..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-gray-300 bg-white pl-10 pr-4 py-2 text-sm focus:border-[#411530] focus:outline-none focus:ring-1 focus:ring-[#411530]"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-[#411530] focus:outline-none focus:ring-1 focus:ring-[#411530]"
              >
                <option value="all">All Categories</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-[#411530] focus:outline-none focus:ring-1 focus:ring-[#411530]"
            >
              <option value="latest">Latest First</option>
              <option value="oldest">Oldest First</option>
              <option value="title">By Title</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <FileText className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">No press releases found</h3>
            <p className="mt-2 text-gray-600">
              Try adjusting your search or filters to find what you're looking for.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <ContentImage
                    src={getPostImage(post)}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Category Badge */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-[#D1512D] px-3 py-1 text-xs font-semibold text-white">
                        {post.tags[0]}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="mb-3 text-lg font-semibold text-[#411530] line-clamp-2 group-hover:text-[#D1512D] transition-colors">
                    {post.title}
                  </h3>
                  
                  {post.summary && (
                    <p className="mb-4 text-sm text-gray-600 line-clamp-3">
                      {post.summary}
                    </p>
                  )}

                  {/* Meta */}
                  <div className="mb-4 flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatDate(post.publishedAt)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {Math.floor(Math.random() * 1000) + 100} views
                    </div>
                  </div>

                  {/* Read More */}
                  <Link
                    href={`/articles/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#411530] hover:text-[#D1512D] transition-colors"
                  >
                    Read More
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Load More */}
        {filteredPosts.length > 0 && (
          <div className="mt-12 text-center">
            <button className="inline-flex items-center gap-2 rounded-full border-2 border-[#411530] bg-white px-8 py-3 text-sm font-semibold text-[#411530] transition-all hover:bg-[#411530] hover:text-white">
              Load More Press Releases
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
