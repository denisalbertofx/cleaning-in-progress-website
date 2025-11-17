'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/contexts/LanguageContext'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'

export function Header() {
  const { t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: t.nav.home },
    { href: '/servicios', label: t.nav.services },
    { href: '/nosotros', label: t.nav.about },
    { href: '/blog', label: t.nav.blog },
    { href: '/testimonios', label: t.nav.testimonials },
    { href: '/contacto', label: t.nav.contact },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white shadow-lg border-b border-gray-200/80'
          : 'bg-white shadow-sm border-b border-gray-100/50'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo/logo-cleaning-in-progress.png"
              alt="Cleaning in Progress Logo"
              width={240}
              height={70}
              className="object-contain h-16 md:h-20 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#1A1A1A] hover:text-[#0056A6] transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Button
              asChild
              className="bg-[#0056A6] hover:bg-[#004494] text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 px-6 py-2"
            >
              <Link href="/contacto">
                <Phone className="w-4 h-4 mr-2" />
                {t.header.requestQuote}
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#1A1A1A]" />
            ) : (
              <Menu className="w-6 h-6 text-[#1A1A1A]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[#1A1A1A] hover:text-[#0056A6] transition-colors font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                  >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-2">
                <LanguageSwitcher />
              </div>
              <Button
                asChild
                className="bg-[#0056A6] hover:bg-[#004494] text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 mt-4 w-full"
              >
                <Link href="/contacto">
                  <Phone className="w-4 h-4 mr-2" />
                  {t.header.requestQuote}
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

