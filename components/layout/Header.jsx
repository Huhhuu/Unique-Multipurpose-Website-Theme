import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Container from '@/components/common/Container'
import Logo from '@/components/common/Logo'
import headersData from '@/data/headers.json'

export default function Header({ theme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState({})
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const resolvedThemeKey = (() => {
    if (theme && headersData[theme]) return theme
    if (router.query && router.query.theme && headersData[router.query.theme]) {
      return router.query.theme
    }
    const pathSegment = router.pathname.replace(/^\//, '').split('/')[0]
    if (pathSegment && headersData[pathSegment]) {
      return pathSegment
    }
    return 'ecommerce'
  })()

  const currentHeader = headersData[resolvedThemeKey] || headersData.ecommerce
  const navItems = currentHeader.navItems || []
  const cta = currentHeader.cta || { text: 'Shop Now', href: '/shop' }

  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev)

  const toggleMobileSubmenu = (name) => {
    setMobileExpanded(prev => ({
      ...prev,
      [name]: !prev[name],
    }))
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100/70'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
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
                      <div className="absolute top-full left-0 w-64 py-2 bg-white rounded-2xl shadow-xl border border-gray-100 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                        {item.submenu.map((sub) => {
                          const isSubActive = router.pathname === sub.href
                          return (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className={`block px-4 py-2.5 text-b3 transition-colors ${
                                isSubActive
                                  ? 'text-primary font-semibold bg-primary-light'
                                  : 'text-dark/70 hover:text-primary hover:bg-primary-light/50'
                              }`}
                            >
                              {sub.name}
                            </Link>
                          )
                        })}
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

          <div className="hidden lg:flex items-center">
            <Link
              href={cta.href}
              className="inline-flex items-center justify-center h-11 px-7 rounded-full bg-primary text-white font-sans font-normal text-sub2 leading-[24px] tracking-normal hover:bg-primary-hover active:scale-[0.98] transition-all duration-200 shadow-none hover:shadow-md hover:shadow-primary/20"
            >
              {cta.text}
            </Link>
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
          <div className="lg:hidden py-4 px-4 bg-white/98 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100 my-2 space-y-1">
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
              <Link
                href={cta.href}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center h-11 px-6 rounded-full bg-primary text-white font-sans font-normal text-sub2 leading-[24px] tracking-normal hover:bg-primary-hover transition-colors"
              >
                {cta.text}
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}
