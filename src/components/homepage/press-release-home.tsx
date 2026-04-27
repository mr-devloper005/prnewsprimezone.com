import Link from 'next/link'
import { ArrowRight, CheckCircle, Globe, Headphones, TrendingUp, Users, FileText, Clock, Star } from 'lucide-react'
import { ContentImage } from '@/components/shared/content-image'
import { SITE_CONFIG, type TaskKey } from '@/lib/site-config'
import type { SitePost } from '@/lib/site-connector'

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
                <Link 
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#411530] bg-white px-8 py-4 text-sm font-semibold text-[#411530] transition-all hover:bg-[#F5E8E4]"
                >
                  View Pricing
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
                Competitive Pricing
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Get the best value for your press release distribution. Our pricing plans are designed to fit businesses of all sizes, from startups to enterprises.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#D1512D]" />
                  <span className="text-gray-700">Affordable distribution packages</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#D1512D]" />
                  <span className="text-gray-700">No hidden fees</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#D1512D]" />
                  <span className="text-gray-700">Flexible payment options</span>
                </li>
              </ul>
            </div>
            <div className="relative h-64 rounded-2xl bg-gradient-to-br from-[#F5C7A9] to-[#F5E8E4] p-8 shadow-lg">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-[#411530]">$</div>
                  <p className="mt-2 text-sm font-medium text-[#411530]">Best Value Pricing</p>
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
                Value Driven Approach
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                We focus on delivering real value to our clients. Our distribution network and expertise ensure your press releases reach the right audience at the right time.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#D1512D]" />
                  <span className="text-gray-700">Targeted media outreach</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#D1512D]" />
                  <span className="text-gray-700">Comprehensive analytics</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#D1512D]" />
                  <span className="text-gray-700">Measurable results</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 3 - Text Left, Image Right */}
          <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold text-[#411530] sm:text-4xl">
                Caring Customer Service
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Our dedicated support team is here to help you every step of the way. From drafting your press release to distribution and beyond.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#D1512D]" />
                  <span className="text-gray-700">24/7 customer support</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#D1512D]" />
                  <span className="text-gray-700">Expert guidance</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#D1512D]" />
                  <span className="text-gray-700">Personal assistance</span>
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
                Industry Excellence
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                With years of experience in press release distribution, we've built relationships with thousands of media outlets and journalists worldwide.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#D1512D]" />
                  <span className="text-gray-700">Extensive media network</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#D1512D]" />
                  <span className="text-gray-700">Proven track record</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#D1512D]" />
                  <span className="text-gray-700">Industry recognition</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#411530] sm:text-4xl">
              Pricing Plans To Choose From
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Select the perfect plan for your press release distribution needs
            </p>
          </div>
          
          <div className="mt-12 grid gap-8 lg:grid-cols-5">
            {[
              {
                name: 'Basic',
                price: '$99',
                color: 'from-purple-500 to-purple-600',
                features: ['1 Press Release', 'Basic Distribution', '7-Day Support'],
              },
              {
                name: 'Professional',
                price: '$199',
                color: 'from-red-500 to-red-600',
                features: ['5 Press Releases', 'Extended Distribution', 'Priority Support', 'Analytics'],
                popular: true,
              },
              {
                name: 'Business',
                price: '$299',
                color: 'from-orange-500 to-orange-600',
                features: ['10 Press Releases', 'Premium Distribution', '24/7 Support', 'Advanced Analytics', 'SEO Optimization'],
              },
              {
                name: 'Enterprise',
                price: '$499',
                color: 'from-blue-500 to-blue-600',
                features: ['25 Press Releases', 'Global Distribution', 'Dedicated Support', 'Custom Analytics', 'White Label Options'],
              },
              {
                name: 'Custom',
                price: 'Contact',
                color: 'from-green-500 to-green-600',
                features: ['Custom Solutions', 'Tailored Distribution', 'Personal Account Manager', 'Custom Reporting'],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl ${
                  plan.popular ? 'ring-2 ring-[#D1512D] scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-[#D1512D] px-3 py-1 text-xs font-semibold text-white">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className={`text-lg font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                  {plan.name}
                </h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-[#411530]">{plan.price}</span>
                  {plan.price !== 'Contact' && <span className="text-gray-600">/release</span>}
                </div>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[#D1512D]" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/pricing"
                  className={`mt-6 block w-full rounded-full bg-gradient-to-r ${plan.color} py-3 text-center text-sm font-semibold text-white transition-all hover:opacity-90`}
                >
                  {plan.price === 'Contact' ? 'Contact Sales' : 'Get Started'}
                </Link>
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
            {featuredPosts.map((post, index) => (
              <div key={post.id} className="group rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl">
                <div className="relative h-32 overflow-hidden rounded-lg bg-gradient-to-br from-[#F5C7A9] to-[#F5E8E4]">
                  <ContentImage
                    src={post.media?.[0]?.url || '/placeholder.svg?height=200&width=300'}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#411530] group-hover:text-[#D1512D]">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                  {post.summary || 'Read the latest press release and news from our distribution network.'}
                </p>
                <Link
                  href={`/articles/${post.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#411530] hover:text-[#D1512D]"
                >
                  Read More
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              href="/articles"
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
