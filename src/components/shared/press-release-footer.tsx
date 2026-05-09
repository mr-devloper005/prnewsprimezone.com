import Link from 'next/link'
import { FileText, Building2, LayoutGrid, Tag, Github, Twitter, Linkedin, Image as ImageIcon, User, ArrowRight, Sparkles } from 'lucide-react'
import { SITE_CONFIG, type TaskKey } from '@/lib/site-config'
import { siteContent } from '@/config/site.content'

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

const footerLinks = {
  services: [
    { name: 'Press Release Distribution', href: '/articles' },
    { name: 'Media Outreach', href: '/contact' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'Help Center', href: '/help' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
}

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { name: 'GitHub', href: 'https://github.com', icon: Github },
]

export function PressReleaseFooter() {
  const enabledTasks = SITE_CONFIG.tasks.filter((task) => task.enabled)

  return (
    <footer className="bg-[#411530] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div>
                <h3 className="text-xl font-bold">{SITE_CONFIG.name}</h3>
                <p className="text-xs uppercase tracking-[0.24em] text-[#F5C7A9]">Press Release Distribution</p>
              </div>
            </div>
            <p className="text-sm leading-6 text-white/80">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#F5C7A9]">Services</h4>
            <ul className="mt-6 space-y-4">
              {footerLinks.services.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-sm text-white/80 transition-colors hover:text-white hover:underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#F5C7A9]">Company</h4>
            <ul className="mt-6 space-y-4">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-sm text-white/80 transition-colors hover:text-white hover:underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Legal */}
          <div className="space-y-8">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#F5C7A9]">Resources</h4>
              <ul className="mt-6 space-y-4">
                {footerLinks.resources.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href} 
                      className="text-sm text-white/80 transition-colors hover:text-white hover:underline"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#F5C7A9]">Legal</h4>
              <ul className="mt-6 space-y-4">
                {footerLinks.legal.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href} 
                      className="text-sm text-white/80 transition-colors hover:text-white hover:underline"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="text-sm text-white/60">
              &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex gap-4">
                {socialLinks.map((item) => (
                  <Link 
                    key={item.name} 
                    href={item.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="rounded-full border border-white/20 bg-white/10 p-2.5 text-white/80 transition-all hover:bg-white/20 hover:text-white"
                  >
                    <item.icon className="h-4 w-4" />
                  </Link>
                ))}
              </div>
              
              <div className="hidden lg:flex items-center gap-2 text-sm text-white/60">
                <span>Trusted by</span>
                <span className="font-semibold text-[#F5C7A9">5000+</span>
                <span>media outlets worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
