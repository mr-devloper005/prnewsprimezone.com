import type { Metadata } from 'next'
import { PressReleaseListing } from '@/components/homepage/press-release-listing'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { PressReleaseFooter } from '@/components/shared/press-release-footer'
import { buildPageMetadata } from '@/lib/seo'
import { fetchTaskPosts } from '@/lib/task-data'

export const revalidate = 300

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/articles',
    title: 'Press Releases - Latest News & Updates',
    description: 'Browse the latest press releases and news from our distribution network. Stay updated with the most recent announcements.',
    keywords: ['press releases', 'news', 'announcements', 'media updates'],
  })
}

export default async function ArticlesPage({ searchParams }: { searchParams?: { category?: string } }) {
  const posts = await fetchTaskPosts('article', 50, { allowMockFallback: true, fresh: false, revalidate: 300 })

  return (
    <div className="min-h-screen bg-white">
      <NavbarShell />
      <PressReleaseListing posts={posts} category={searchParams?.category} />
      <PressReleaseFooter />
    </div>
  )
}
