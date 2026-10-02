import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Container from '@/components/common/Container'
import Logo from '@/components/common/Logo'
import ecommerceData from '@/data/ecommerce-theme.json'

export default function Footer() {
  const { footer } = ecommerceData
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setTimeout(() => setSubscribed(false), 3000)
      setEmail('')
    }
  }

  return (
    <footer className="bg-white text-dark pt-12 sm:pt-16 pb-12 sm:pb-16">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Logo light={false} />
            <p className="mt-4 font-sans text-sm text-gray-500 leading-relaxed max-w-xs">
              {footer.description}
            </p>
          </div>

          {footer.columns.map((column) => (
            <div key={column.title}>
              <h3 className="font-heading font-bold text-dark text-base mb-4 sm:mb-5 tracking-tight">
                {column.title}
              </h3>
              <ul className="space-y-3 font-sans text-sm text-gray-500">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-primary transition-colors inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 sm:mt-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="lg:hidden flex items-center justify-center gap-3">
            {footer.appStoreLinks.map((app) => (
              <a
                key={app.name}
                href={app.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={app.name}
                className="inline-block hover:opacity-90 transition-opacity"
              >
                <Image
                  src={app.image}
                  alt={app.name}
                  width={135}
                  height={40}
                  className="h-9 w-auto object-contain"
                />
              </a>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto lg:mx-0">
            <div className="flex items-center bg-white border border-gray-200/90 rounded-full p-1.5 shadow-sm hover:border-gray-300 focus-within:border-primary transition-all">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={footer.newsletter.placeholder}
                className="flex-1 px-4 py-2.5 text-sm font-sans text-dark bg-transparent outline-none placeholder:text-gray-400"
                required
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary-hover text-white font-sans font-medium text-sm px-7 py-3 rounded-full transition-all active:scale-95 shadow-sm"
              >
                {subscribed ? 'Done!' : footer.newsletter.buttonText}
              </button>
            </div>
          </form>

          <div className="flex flex-col sm:flex-row lg:flex-col items-center lg:items-end justify-between gap-6 lg:gap-4">
            <div className="flex items-center justify-center gap-3">
              {footer.socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="w-9 h-9 rounded-full bg-white border border-gray-200/80 shadow-sm flex items-center justify-center hover:shadow-md hover:border-primary/40 hover:scale-105 transition-all"
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={18}
                    height={18}
                    className="w-4 h-4 object-contain"
                  />
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              {footer.appStoreLinks.map((app) => (
                <a
                  key={app.name}
                  href={app.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={app.name}
                  className="inline-block hover:opacity-90 transition-opacity"
                >
                  <Image
                    src={app.image}
                    alt={app.name}
                    width={135}
                    height={40}
                    className="h-9 sm:h-10 w-auto object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-24 text-center">
          <p className="font-sans text-xs sm:text-sm text-gray-400">
            {footer.copyright}
          </p>
        </div>
      </Container>
    </footer>
  )
}
