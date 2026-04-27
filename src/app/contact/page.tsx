import type { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock, Send, Building2, Users, Headphones } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { PressReleaseFooter } from '@/components/shared/press-release-footer'
import { buildPageMetadata } from '@/lib/seo'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/contact',
    title: 'Contact Us - PR News Prime Zone',
    description: 'Get in touch with PR News Prime Zone for press release distribution, media inquiries, and partnership opportunities.',
    keywords: ['contact', 'support', 'media inquiries', 'partnerships'],
  })
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavbarShell />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F5E8E4] via-white to-[#F5C7A9]/20 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-[#411530] sm:text-5xl lg:text-6xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Get in touch with our team for press release distribution, media inquiries, and partnership opportunities
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#411530]">Get in Touch</h2>
              <p className="mt-4 text-gray-600">
                We're here to help with your press release distribution needs. Reach out to us through any of the following channels.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-[#F5E8E4] p-3">
                    <Mail className="h-6 w-6 text-[#411530]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#411530]">Email Us</h3>
                    <p className="mt-1 text-gray-600">support@prnewsprimezone.com</p>
                    <p className="mt-2 text-sm text-gray-500">
                      For general inquiries, support, and partnership opportunities
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-[#F5E8E4] p-3">
                    <Phone className="h-6 w-6 text-[#411530]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#411530]">Call Us</h3>
                    <p className="mt-1 text-gray-600">1-800-PRESS-RELEASE</p>
                    <p className="mt-2 text-sm text-gray-500">
                      Monday - Friday: 9:00 AM - 6:00 PM EST
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-[#F5E8E4] p-3">
                    <MapPin className="h-6 w-6 text-[#411530]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#411530]">Office Location</h3>
                    <p className="mt-1 text-gray-600">Global Distribution Network</p>
                    <p className="mt-2 text-sm text-gray-500">
                      Serving clients worldwide with digital press release distribution
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="rounded-2xl bg-[#411530] p-6 text-white">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Business Hours
              </h3>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-[#411530]">Send us a Message</h2>
              <p className="mt-4 text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form className="mt-8 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm focus:border-[#411530] focus:outline-none focus:ring-1 focus:ring-[#411530]"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm focus:border-[#411530] focus:outline-none focus:ring-1 focus:ring-[#411530]"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm focus:border-[#411530] focus:outline-none focus:ring-1 focus:ring-[#411530]"
                    placeholder="john.doe@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm focus:border-[#411530] focus:outline-none focus:ring-1 focus:ring-[#411530]"
                    placeholder="Acme Corporation"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm focus:border-[#411530] focus:outline-none focus:ring-1 focus:ring-[#411530]"
                  >
                    <option value="">Select a topic</option>
                    <option value="press-release">Press Release Distribution</option>
                    <option value="pricing">Pricing Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="support">Technical Support</option>
                    <option value="media">Media Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm focus:border-[#411530] focus:outline-none focus:ring-1 focus:ring-[#411530]"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#411530] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#2a0f20]"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#411530] sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-[#411530]">How quickly are press releases distributed?</h3>
              <p className="mt-3 text-gray-600">
                Standard distribution takes 24-48 hours. Priority plans offer same-day distribution options for urgent releases.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-[#411530]">What media outlets do you work with?</h3>
              <p className="mt-3 text-gray-600">
                We have partnerships with over 10,000 media outlets including major news networks, industry publications, and local newsrooms.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-[#411530]">Can I track the performance of my press release?</h3>
              <p className="mt-3 text-gray-600">
                Yes, all plans include analytics. Professional and Enterprise plans offer advanced reporting with detailed insights.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-[#411530]">Do you offer writing services?</h3>
              <p className="mt-3 text-gray-600">
                We offer press release writing and editing services as add-ons to any distribution plan.
              </p>
            </div>
          </div>
        </section>
      </main>

      <PressReleaseFooter />
    </div>
  )
}
