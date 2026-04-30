'use client'

import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, Lock, ArrowRight, Eye, EyeOff, FileText, Users, ShieldCheck } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { PressReleaseFooter } from '@/components/shared/press-release-footer'
import { buildPageMetadata } from '@/lib/seo'
import { useState } from 'react'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5E8E4] via-white to-[#F5C7A9]/20">
      <NavbarShell />
      
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          {/* Left Side - Welcome Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-[#411530] sm:text-5xl lg:text-6xl">
                Welcome Back
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Sign in to your account to manage press releases, track analytics, and distribute your news to thousands of media outlets.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-[#F5E8E4] p-3">
                  <FileText className="h-6 w-6 text-[#411530]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#411530]">Manage Press Releases</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Create, edit, and distribute press releases from your dashboard
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-[#F5E8E4] p-3">
                  <Users className="h-6 w-6 text-[#411530]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#411530]">Track Performance</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Monitor analytics and distribution results in real-time
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-[#F5E8E4] p-3">
                  <ShieldCheck className="h-6 w-6 text-[#411530]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#411530]">Secure Platform</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Enterprise-grade security for your press release data
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="lg:pl-12">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#411530]">Sign In</h2>
                <p className="mt-2 text-sm text-gray-600">
                  Enter your credentials to access your account
                </p>
              </div>

              <form className="space-y-6">
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
                      className="w-full rounded-lg border border-gray-300 bg-white pl-10 pr-4 py-3 text-sm focus:border-[#411530] focus:outline-none focus:ring-1 focus:ring-[#411530]"
                      placeholder="Enter your email address"
                    />
                  </div>
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
                      className="w-full rounded-lg border border-gray-300 bg-white pl-10 pr-12 py-3 text-sm focus:border-[#411530] focus:outline-none focus:ring-1 focus:ring-[#411530]"
                      placeholder="Enter your password"
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

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-sm text-gray-600">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 bg-white text-[#411530] focus:ring-[#411530]"
                    />
                    Remember me
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-sm font-medium text-[#D1512D] hover:text-[#B84124]"
                  >
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-[#411530] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#2a0f20] focus:outline-none focus:ring-2 focus:ring-[#411530] focus:ring-offset-2"
                >
                  Sign In
                </button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <Link
                    href="/register"
                    className="font-medium text-[#D1512D] hover:text-[#B84124]"
                  >
                    Create an account
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
