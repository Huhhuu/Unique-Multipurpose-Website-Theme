import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default function Layout({
  children,
  theme,
  title = 'MicPro - Unique Multipurpose Modern Website',
  description = 'Website đa năng xây dựng bằng Next.js 13 Pages Router, Tailwind CSS và Framer Motion.',
  footerReveal = true,
}) {
  const footerRef = useRef(null)
  const contentRef = useRef(null)
  const [footerHeight, setFooterHeight] = useState(0)
  const [isRevealActive, setIsRevealActive] = useState(false)

  useEffect(() => {
    if (!footerReveal) return

    let rafId = null

    const updateDimensions = () => {
      if (rafId) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        if (footerRef.current && contentRef.current) {
          const fHeight = footerRef.current.offsetHeight
          const cHeight = contentRef.current.offsetHeight
          const wHeight = window.innerHeight
          const wWidth = window.innerWidth

          setFooterHeight(fHeight)

          const canReveal =
            wWidth >= 768 &&
            wHeight > fHeight * 0.8 &&
            cHeight > wHeight

          setIsRevealActive(canReveal)
        }
      })
    }

    updateDimensions()

    const observer = new ResizeObserver(() => {
      updateDimensions()
    })

    if (footerRef.current) observer.observe(footerRef.current)
    if (contentRef.current) observer.observe(contentRef.current)

    window.addEventListener('resize', updateDimensions, { passive: true })

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      observer.disconnect()
      window.removeEventListener('resize', updateDimensions)
    }
  }, [footerReveal, theme])

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div
        ref={contentRef}
        className={`relative z-10 bg-white ${
          isRevealActive ? 'shadow-[0_25px_50px_-12px_rgba(0,0,0,0.12)]' : ''
        }`}
      >
        <Header theme={theme} />
        <main className="flex-grow">
          {children}
        </main>
      </div>

      <div
        className="relative z-0"
        style={{
          height: isRevealActive && footerHeight ? `${footerHeight}px` : 'auto',
          clipPath: isRevealActive ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' : undefined,
          WebkitClipPath: isRevealActive ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' : undefined,
        }}
      >
        <div
          ref={footerRef}
          className={`${isRevealActive ? 'fixed bottom-0 left-0 w-full' : 'relative'} z-0`}
        >
          <Footer theme={theme} />
        </div>
      </div>
    </div>
  )
}
