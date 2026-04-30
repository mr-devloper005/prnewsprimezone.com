'use client'

import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, Lock, User, ArrowRight, Eye, EyeOff, FileText, Users, Globe2, ShieldCheck } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { PressReleaseFooter } from '@/components/shared/press-release-footer'
import { buildPageMetadata } from '@/lib/seo'
import { useState } from 'react'

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    password: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5E8E4] via-white to-[#F5C7A9]/20">
      <NavbarShell />
      
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          {/* Left Side - Welcome Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-[#411530] sm:text-5xl lg:text-6xl">
                Create Your Account
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Join PR News Prime Zone and start distributing your press releases to thousands of media outlets worldwide.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-[#F5E8E4] p-3">
                  <FileText className="h-6 w-6 text-[#411530]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#411530]">Press Release Distribution</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Distribute your news to thousands of media outlets and journalists
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-[#F5E8E4] p-3">
                  <Globe2 className="h-6 w-6 text-[#411530]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#411530]">Global Reach</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Connect with media outlets in every industry and region
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-[#F5E8E4] p-3">
                  <ShieldCheck className="h-6 w-6 text-[#411530]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#411530]">Analytics & Reporting</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Track performance and measure the impact of your press releases
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Registration Form */}
          <div className="lg:pl-12">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#411530]">Get Started</h2>
                <p className="mt-2 text-sm text-gray-600">
                  Create your account in less than 2 minutes
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <div className="mt-2 relative">
                      <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-gray-300 bg-white pl-10 pr-4 py-3 text-sm focus:border-[#411530] focus:outline-none focus:ring-1 focus:ring-[#411530]"
                        placeholder="Enter your first name"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm focus:border-[#411530] focus:outline-none focus:ring-1 focus:ring-[#411530]"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <div className="mt-2 relative">
                    <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-gray-300 bg-white pl-10 pr-4 py-3 text-sm focus:border-[#411530] focus:outline-none focus:ring-1 focus:ring-[#411530]"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                    Company Name
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm focus:border-[#411530] focus:outline-none focus:ring-1 focus:ring-[#411530]"
                    placeholder="Enter your company name (optional)"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="mt-2 relative">
                    <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-gray-300 bg-white pl-10 pr-12 py-3 text-sm focus:border-[#411530] focus:outline-none focus:ring-1 focus:ring-[#411530]"
                      placeholder="Create a strong password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="rounded border-gray-300 bg-white text-[#411530] focus:ring-[#411530]"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the{' '}
                    <Link href="/terms" className="font-medium text-[#D1512D] hover:text-[#B84124]">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="font-medium text-[#D1512D] hover:text-[#B84124]">
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-[#411530] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#2a0f20] focus:outline-none focus:ring-2 focus:ring-[#411530] focus:ring-offset-2"
                >
                  Create Account
                </button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{' '}
                  <Link
                    href="/login"
                    className="font-medium text-[#D1512D] hover:text-[#B84124]"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <PressReleaseFooter />
    </div>
  )
}
