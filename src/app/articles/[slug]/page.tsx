import type { Metadata } from 'next'
import Link from 'next/link'
import { SinglePressRelease } from '@/components/homepage/single-press-release'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { PressReleaseFooter } from '@/components/shared/press-release-footer'
import { buildPostMetadata } from '@/lib/seo'
import { fetchTaskPostBySlug, fetchTaskPosts } from '@/lib/task-data'

export const revalidate = 300

export async function generateStaticParams() {
  const posts = await fetchTaskPosts('article', 50)
  if (!posts.length) {
    return [{ slug: 'placeholder' }]
  }
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const post = await fetchTaskPostBySlug('article', resolvedParams.slug)
  if (post) {
    return await buildPostMetadata('article', post)
  }
  return {
    title: 'Press Release Not Found',
    description: 'The requested press release could not be found.',
  }
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const post = await fetchTaskPostBySlug('article', resolvedParams.slug)
  const relatedPosts = await fetchTaskPosts('article', 6, { allowMockFallback: true, fresh: false, revalidate: 300 })

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <NavbarShell />
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-[#411530]">Press Release Not Found</h1>
            <p className="mt-4 text-gray-600">The press release you're looking for could not be found.</p>
            <Link
              href="/articles"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#411530] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#2a0f20]"
            >
              Browse All Press Releases
            </Link>
          </div>
        </div>
        <PressReleaseFooter />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <NavbarShell />
      <SinglePressRelease post={post} relatedPosts={relatedPosts.filter(p => p.id !== post.id)} />
      <PressReleaseFooter />
    </div>
  )
}
