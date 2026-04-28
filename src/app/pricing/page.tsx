import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Star, Users, Globe2, BarChart3, Headphones, Zap, Shield } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { PressReleaseFooter } from '@/components/shared/press-release-footer'
import { buildPageMetadata } from '@/lib/seo'
import { siteContent } from '@/config/site.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/pricing',
    title: 'Pricing Plans - Press Release Distribution',
    description: 'Choose the perfect press release distribution plan for your business. From basic to enterprise solutions.',
    keywords: ['press release pricing', 'distribution plans', 'media outreach pricing'],
  })
}

const pricingPlans = [
  {
    name: 'Basic',
    description: 'Perfect for small businesses and startups',
    price: '$199',
    period: 'per release',
    color: 'from-gray-600 to-gray-700',
    features: [
      '1 Press Release Distribution',
      'Basic Media Outlets (500+)',
      '7-Day Support',
      'Basic Analytics',
      'Standard Distribution',
    ],
    excluded: ['Priority Support', 'SEO Optimization', 'Custom Targeting'],
  },
  {
    name: 'Professional',
    description: 'Ideal for growing companies and agencies',
    price: '$399',
    period: 'per release',
    color: 'from-[#D1512D] to-[#B84124]',
    popular: true,
    features: [
      '5 Press Releases',
      'Extended Media Outlets (2,000+)',
      'Priority Support (24/7)',
      'Advanced Analytics Dashboard',
      'SEO Optimization',
      'Custom Targeting',
      'Social Media Distribution',
    ],
    excluded: ['Dedicated Account Manager', 'White Label Options'],
  },
  {
    name: 'Enterprise',
    description: 'Comprehensive solution for large organizations',
    price: '$799',
    period: 'per release',
    color: 'from-[#411530] to-[#2a0f20]',
    features: [
      'Unlimited Press Releases',
      'Global Media Network (10,000+)',
      'Dedicated Account Manager',
      'Custom Analytics & Reporting',
      'Advanced SEO Suite',
      'Premium Targeting Options',
      'White Label Distribution',
      'API Access',
      'Custom Integrations',
      'Priority Media Placement',
    ],
    excluded: [],
  },
]

const addOns = [
  {
    name: 'Premium Media Placement',
    description: 'Guaranteed placement in top-tier media outlets',
    price: '$299',
    icon: Star,
  },
  {
    name: 'Enhanced Analytics',
    description: 'Detailed performance reports and insights',
    price: '$149',
    icon: BarChart3,
  },
  {
    name: 'Global Distribution',
    description: 'Extended reach to international media networks',
    price: '$199',
    icon: Globe2,
  },
]

const faqs = [
  {
    question: 'What is included in the media distribution?',
    answer: 'Our distribution includes access to our extensive network of journalists, newsrooms, media outlets, and online platforms. The number of outlets varies by plan, from 500+ in Basic to 10,000+ in Enterprise.',
  },
  {
    question: 'Can I change my plan anytime?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any differences in pricing.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'We offer a 30-day money-back guarantee for all new plans. If you\'re not satisfied with our service, we\'ll provide a full refund.',
  },
  {
    question: 'How long does distribution take?',
    answer: 'Standard distribution typically takes 24-48 hours. Priority plans offer same-day distribution options.',
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavbarShell />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F5E8E4] via-white to-[#F5C7A9]/20 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-[#411530] sm:text-5xl lg:text-6xl">
            Business Wire Pricing
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Choose the perfect press release distribution plan for your business needs
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl ${
                  plan.popular ? 'ring-2 ring-[#D1512D] scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-[#D1512D] px-4 py-2 text-sm font-semibold text-white">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center">
                  <h3 className={`text-2xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{plan.description}</p>
                  
                  <div className="mt-6">
                    <span className="text-4xl font-bold text-[#411530]">{plan.price}</span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.excluded.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3 opacity-50">
                      <div className="mt-0.5 h-5 w-5 flex-shrink-0 rounded-full border-2 border-gray-300" />
                      <span className="text-sm text-gray-500 line-through">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/register"
                  className={`mt-8 block w-full rounded-full bg-gradient-to-r ${plan.color} py-3 text-center text-sm font-semibold text-white transition-all hover:opacity-90`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#411530] sm:text-4xl">
              Compare Features
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              See what's included in each plan
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
            <table className="w-full">
              <thead className="bg-[#411530] text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Features</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Basic</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Professional</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Media Outlets</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">500+</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">2,000+</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">10,000+</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Support</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">7-Day</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">24/7 Priority</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">Dedicated Manager</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Analytics</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">Basic</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">Advanced</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">Custom Reports</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">SEO Optimization</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">
                    <div className="flex justify-center">
                      <div className="h-5 w-5 rounded-full border-2 border-gray-300" />
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">
                    <div className="flex justify-center">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">
                    <div className="flex justify-center">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#411530] sm:text-4xl">
              Enhance Your Distribution
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Add-on services to boost your press release impact
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {addOns.map((addOn, index) => (
              <div key={index} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition-all hover:shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-[#F5E8E4] p-3">
                    <addOn.icon className="h-6 w-6 text-[#411530]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#411530]">{addOn.name}</h3>
                    <p className="text-sm text-gray-600">{addOn.description}</p>
                  </div>
                </div>
                <div className="mt-4 text-2xl font-bold text-[#D1512D]">{addOn.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#411530] sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="mt-12 space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-[#411530]">{faq.question}</h3>
                <p className="mt-3 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#411530] to-[#D1512D] py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Share Your News?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Join thousands of businesses using our press release distribution service
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#411530] shadow-lg transition-all hover:bg-gray-100"
            >
              Get Started Now
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <PressReleaseFooter />
    </div>
  )
}
