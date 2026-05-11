import Link from 'next/link'
import { ArrowRight, CheckCircle, Globe, Headphones, TrendingUp, Users, FileText, Clock, Star } from 'lucide-react'
import { SITE_CONFIG, type TaskKey } from '@/lib/site-config'
import type { SitePost } from '@/lib/site-connector'
import { TaskPostCard } from '@/components/shared/task-post-card'

interface PressReleaseHomeProps {
  primaryTask?: any
  posts: SitePost[]
  supportTasks: any[]
}

export function PressReleaseHome({ primaryTask, posts, supportTasks }: PressReleaseHomeProps) {
  const featuredPosts = posts.slice(0, 8)
  
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F5E8E4] via-white to-[#F5C7A9]/20">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            {/* Left Side */}
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-[#411530] sm:text-5xl lg:text-6xl">
                Press Release Distribution Since 2004
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Get your news distributed to thousands of media outlets, journalists, and newsrooms worldwide. 
                Reach your audience with professional press release distribution services.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link 
                  href={primaryTask?.route || '/articles'}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#411530] px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#2a0f20] hover:shadow-xl"
                >
                  Submit Press Release
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Side - Circular Graphic */}
            <div className="relative">
              <div className="relative mx-auto h-80 w-80 rounded-full bg-gradient-to-br from-[#411530] to-[#D1512D] p-1 shadow-2xl">
                <div className="h-full w-full rounded-full bg-white p-8">
                  <div className="grid h-full grid-cols-3 gap-2">
                    {[
                      { icon: Globe, label: 'Global Reach' },
                      { icon: FileText, label: 'Newsrooms' },
                      { icon: Users, label: 'Journalists' },
                      { icon: TrendingUp, label: 'Analytics' },
                      { icon: Clock, label: '24/7' },
                      { icon: Star, label: 'Featured' },
                    ].map((item, index) => (
                      <div key={index} className="flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-[#F5E8E4] to-[#F5C7A9] p-2 text-center">
                        <item.icon className="h-6 w-6 text-[#411530]" />
                        <span className="mt-1 text-xs font-medium text-[#411530]">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Banner */}
      <section className="bg-gradient-to-r from-[#411530] to-[#D1512D] py-6">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-lg font-semibold text-white">
            Experience the PR News Prime Zone Difference
          </p>
        </div>
      </section>

      {/* Features Section - Alternating Layout */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Feature 1 - Text Left, Image Right */}
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold text-[#411530] sm:text-4xl">
                Nationwide Media Distribution
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Your press release is distributed to thousands of verified journalists, editors, and newsrooms across print, digital, and broadcast media — all in one submission.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#D1512D]" />
                  <span className="text-gray-700">10,000+ media outlets covered</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#D1512D]" />
                  <span className="text-gray-700">Industry-specific targeting</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#D1512D]" />
                  <span className="text-gray-700">Regional and national reach</span>
                </li>
              </ul>
            </div>
            <div className="relative h-64 rounded-2xl bg-gradient-to-br from-[#F5C7A9] to-[#F5E8E4] p-8 shadow-lg">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <Globe className="mx-auto h-16 w-16 text-[#411530]" />
                  <p className="mt-3 text-sm font-medium text-[#411530]">Global Media Network</p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 - Image Left, Text Right */}
          <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
            <div className="relative h-64 rounded-2xl bg-gradient-to-br from-[#D1512D]/20 to-[#411530]/20 p-8 shadow-lg lg:order-first">
              <div className="flex h-full items-center justify-center">
                <TrendingUp className="h-24 w-24 text-[#411530]" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#411530] sm:text-4xl">
                Real-Time Coverage Tracking
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Monitor exactly where your press release is picked up. Our analytics dashboard gives you live data on media pickups, impressions, and audience reach.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#D1512D]" />
                  <span className="text-gray-700">Live pickup notifications</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#D1512D]" />
                  <span className="text-gray-700">Audience reach and impressions</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#D1512D]" />
                  <span className="text-gray-700">Downloadable coverage reports</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 3 - Text Left, Image Right */}
          <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold text-[#411530] sm:text-4xl">
                Editorial Review & Compliance
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Every press release is reviewed by our editorial team before distribution to ensure it meets professional journalism standards and maximizes media pickup rates.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#D1512D]" />
                  <span className="text-gray-700">Professional editorial review</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#D1512D]" />
                  <span className="text-gray-700">AP style formatting</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#D1512D]" />
                  <span className="text-gray-700">Compliance and accuracy checks</span>
                </li>
              </ul>
            </div>
            <div className="relative h-64 rounded-2xl bg-gradient-to-br from-[#F5E8E4] to-[#F5C7A9] p-8 shadow-lg">
              <div className="flex h-full items-center justify-center">
                <Headphones className="h-24 w-24 text-[#411530]" />
              </div>
            </div>
          </div>

          {/* Feature 4 - Image Left, Text Right */}
          <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
            <div className="relative h-64 rounded-2xl bg-gradient-to-br from-[#411530]/10 to-[#D1512D]/10 p-8 shadow-lg lg:order-first">
              <div className="flex h-full items-center justify-center">
                <Users className="h-24 w-24 text-[#411530]" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#411530] sm:text-4xl">
                Verified Journalist Network
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                We maintain direct relationships with thousands of active journalists and editors across every major beat — business, tech, health, finance, entertainment, and more.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#D1512D]" />
                  <span className="text-gray-700">5,000+ verified journalists</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#D1512D]" />
                  <span className="text-gray-700">Beat-specific targeting</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#D1512D]" />
                  <span className="text-gray-700">Direct inbox delivery</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#411530] sm:text-4xl">
              Why Media Professionals Trust Us
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Trusted by thousands of PR professionals, agencies, and brands worldwide
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Massive Media Reach',
                description: 'Your press release reaches over 10,000 journalists, newsrooms, and media outlets across print, digital, and broadcast channels.',
                icon: Globe,
              },
              {
                title: 'Fast Turnaround',
                description: 'Same-day distribution available. Get your news in front of the right people within hours of submission.',
                icon: Clock,
              },
              {
                title: 'Verified Journalist Network',
                description: 'Direct access to a curated database of verified journalists and editors actively covering your industry.',
                icon: Users,
              },
              {
                title: 'Performance Tracking',
                description: 'Real-time analytics showing pickups, impressions, and media coverage so you can measure your PR impact.',
                icon: TrendingUp,
              },
              {
                title: 'Editorial Support',
                description: 'Our in-house editorial team reviews every release to ensure it meets professional media standards before distribution.',
                icon: FileText,
              },
              {
                title: 'Dedicated PR Support',
                description: 'A dedicated account manager guides you through every step — from writing to distribution to follow-up coverage.',
                icon: Headphones,
              },
            ].map((item, index) => (
              <div key={index} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition-all hover:shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-[#F5E8E4] p-3">
                    <item.icon className="h-6 w-6 text-[#411530]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#411530]">{item.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-[#411530] to-[#D1512D] py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready To Grow Your Brand?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Start distributing your press releases today and reach thousands of media outlets
          </p>
          <Link
            href={primaryTask?.route || '/articles'}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#411530] shadow-lg transition-all hover:bg-gray-100"
          >
            Submit Press Release
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Latest Press Releases Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#411530] sm:text-4xl">
              Latest Press Releases
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Discover recent press releases and news from our distribution network
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredPosts.map((post) => (
              <TaskPostCard
                key={post.id}
                post={post}
                href={`/updates/${post.slug}`}
                taskKey="mediaDistribution"
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/updates"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#411530] bg-white px-8 py-3 text-sm font-semibold text-[#411530] transition-all hover:bg-[#F5E8E4]"
            >
              View All Press Releases
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
