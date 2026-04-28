'use client'

import { useMemo, useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, Menu, X, User, FileText, Building2, LayoutGrid, Tag, Image as ImageIcon, ChevronRight, Sparkles, MapPin, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/lib/auth-context'
import { SITE_CONFIG, type TaskKey } from '@/lib/site-config'
import { cn } from '@/lib/utils'
import { siteContent } from '@/config/site.content'
import { getFactoryState } from '@/design/factory/get-factory-state'

const NavbarAuthControls = dynamic(() => import('@/components/shared/navbar-auth-controls').then((mod) => mod.NavbarAuthControls), {
  ssr: false,
  loading: () => null,
})

const taskIcons: Record<TaskKey, any> = {
  article: FileText,
  listing: Building2,
  sbm: LayoutGrid,
  classified: Tag,
  image: ImageIcon,
  profile: User,
  social: LayoutGrid,
  pdf: FileText,
  org: Building2,
  comment: FileText,
  mediaDistribution: FileText,
}

export function PressReleaseNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { isAuthenticated } = useAuth()
  const { recipe } = getFactoryState()

  const navigation = useMemo(() => SITE_CONFIG.tasks.filter((task) => task.enabled && task.key !== 'profile'), [])
  const primaryNavigation = navigation.slice(0, 5)
  const mobileNavigation = navigation.map((task) => ({
    name: task.label,
    href: task.route,
    icon: taskIcons[task.key] || LayoutGrid,
  }))
  const primaryTask = SITE_CONFIG.tasks.find((task) => task.key === recipe.primaryTask && task.enabled) || primaryNavigation[0]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#411530]/10 bg-white/95 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-4">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-[#411530]/20 bg-[#F5E8E4] p-1.5">
              <img src="/favicon.png?v=20260401" alt={`${SITE_CONFIG.name} logo`} width="48" height="48" className="h-full w-full object-contain" />
            </div>
            <div className="min-w-0 hidden sm:block">
              <span className="block truncate text-xl font-bold text-[#411530]">{SITE_CONFIG.name}</span>
              <span className="block text-[10px] uppercase tracking-[0.24em] text-[#D1512D] opacity-80">{siteContent.navbar.tagline}</span>
            </div>
          </Link>

          <div className="hidden items-center gap-6 xl:flex">
            {primaryNavigation.slice(0, 4).map((task) => {
              const isActive = pathname.startsWith(task.route)
              return (
                <Link 
                  key={task.key} 
                  href={task.route} 
                  className={cn(
                    'text-sm font-semibold transition-colors hover:text-[#D1512D]',
                    isActive ? 'text-[#411530]' : 'text-gray-600'
                  )}
                >
                  {task.label}
                </Link>
              )
            })}
          </div>
        </div>

        <div className="hidden min-w-0 flex-1 items-center justify-center lg:flex">
          <div className="flex w-full max-w-xl items-center gap-3 rounded-full border border-[#411530]/20 bg-[#F5E8E4] px-4 py-3">
            <Search className="h-4 w-4 text-[#411530]" />
            <span className="text-sm text-[#411530]">Search press releases</span>
            <div className="ml-auto hidden items-center gap-1 text-xs text-[#D1512D] opacity-75 md:flex">
              <FileText className="h-3.5 w-3.5" />
              News & Media
            </div>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          {primaryTask ? (
            <Link 
              href={primaryTask.route} 
              className="hidden items-center gap-2 rounded-full border border-[#D1512D]/30 bg-[#F5C7A9] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#411530] md:inline-flex hover:bg-[#D1512D] hover:text-white"
            >
              <Sparkles className="h-3.5 w-3.5" />
              {primaryTask.label}
            </Link>
          ) : null}

          {isAuthenticated ? (
            <NavbarAuthControls />
          ) : (
            <div className="hidden items-center gap-2 md:flex">
              <Button variant="ghost" size="sm" asChild className="rounded-full px-4 text-[#411530] hover:bg-[#F5E8E4]">
                <Link href="/login">Sign In</Link>
              </Button>
              <Button size="sm" asChild className="rounded-full bg-[#411530] text-white hover:bg-[#2a0f20]">
                <Link href="/register">
                  <Plus className="mr-1 h-4 w-4" />
                  Submit Release
                </Link>
              </Button>
            </div>
          )}

          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full lg:hidden text-[#411530]" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="border-t border-[#411530]/10 bg-white/95">
          <div className="space-y-2 px-4 py-4">
            <div className="mb-3 flex items-center gap-3 rounded-2xl border border-[#411530]/20 bg-[#F5E8E4] px-4 py-3 text-sm font-medium text-[#411530]">
              <Search className="h-4 w-4" />
              Search press releases
            </div>
            {mobileNavigation.map((item) => {
              const isActive = pathname.startsWith(item.href)
              return (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className={cn(
                    'flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-colors',
                    isActive 
                      ? 'bg-[#411530] text-white' 
                      : 'text-gray-600 hover:bg-[#F5E8E4] hover:text-[#411530]'
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}
