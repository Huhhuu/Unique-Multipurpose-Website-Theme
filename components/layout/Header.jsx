import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Container from '@/components/common/Container'
import Button from '@/components/common/Button'
import Logo from '@/components/common/Logo'

const navItems = [
  { name: 'Home', href: '/' },
  {
    name: 'Product',
    href: '/products',
    hasDropdown: true,
    submenu: [
      { name: 'Men Fashion', href: '/products#men' },
      { name: 'Women Fashion', href: '/products#women' },
      { name: 'Accessories', href: '/products#accessories' },
    ],
  },
  {
    name: 'New Arrival',
    href: '/new-arrivals',
    hasDropdown: true,
    submenu: [
      { name: 'Summer Collection', href: '/new-arrivals#summer' },
      { name: 'Trending Styles', href: '/new-arrivals#trending' },
    ],
  },
  { name: 'Blog', href: '/blog' },
  { name: 'Shop', href: '/shop' },
  {
    name: 'Brand',
    href: '/brands',
    hasDropdown: true,
    submenu: [
      { name: 'Besnik Studio', href: '/brands#besnik' },
      { name: 'Official Stores', href: '/brands#official' },
    ],
  },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState({})
  const router = useRouter()

  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev)

  const toggleMobileSubmenu = (name) => {
    setMobileExpanded(prev => ({
      ...prev,
      [name]: !prev[name],
    }))
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all">
      <Container>
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Logo />
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = router.pathname === item.href

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.name}
                    className="relative py-2"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      type="button"
                      className={`inline-flex items-center gap-1 font-sans text-sub2 font-medium transition-colors duration-150 ${
                        isActive || activeDropdown === item.name
                          ? 'text-primary font-semibold'
                          : 'text-dark/80 hover:text-primary'
                      }`}
                    >
                      {item.name}
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180 text-primary' : 'text-dark/40'
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 w-48 py-2 bg-white rounded-2xl shadow-xl border border-gray-100 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block px-4 py-2 text-b3 text-dark/70 hover:text-primary hover:bg-primary-light transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-sans text-sub2 font-medium transition-colors duration-150 ${
                    isActive
                      ? 'text-primary font-semibold'
                      : 'text-dark/80 hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button href="/shop" size="md" className="rounded-full px-7">
              Shop Now
            </Button>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="p-2 rounded-xl text-dark hover:bg-light transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 space-y-1">
            {navItems.map((item) => {
              const isActive = router.pathname === item.href

              if (item.hasDropdown) {
                const isExpanded = !!mobileExpanded[item.name]
                return (
                  <div key={item.name} className="py-1">
                    <button
                      type="button"
                      onClick={() => toggleMobileSubmenu(item.name)}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-b2 font-medium text-dark hover:bg-light transition-colors"
                    >
                      <span>{item.name}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-150 ${isExpanded ? 'rotate-180 text-primary' : 'text-dark/50'}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {isExpanded && (
                      <div className="pl-4 pr-2 py-1 space-y-1">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2 rounded-lg text-b3 text-dark/70 hover:text-primary hover:bg-primary-light transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-b2 font-medium transition-colors ${
                    isActive
                      ? 'bg-primary-light text-primary font-semibold'
                      : 'text-dark hover:bg-light'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}

            <div className="pt-4 px-2">
              <Button href="/shop" className="w-full rounded-full">
                Shop Now
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}
