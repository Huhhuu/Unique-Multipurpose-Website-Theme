import Link from 'next/link'
import { motion } from 'framer-motion'
import Container from '@/components/common/Container'
import CharityAmbientBackdrop from './CharityAmbientBackdrop'
import charityData from '@/data/charity-theme.json'

export default function CharityHero() {
  const { hero } = charityData

  return (
    <section className="relative bg-transparent pt-20 sm:pt-28 md:pt-36 lg:pt-40 pb-16 sm:pb-20 md:pb-24 overflow-hidden">
      <CharityAmbientBackdrop />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.h1
            className="font-heading font-bold text-h3 sm:text-4xl md:text-5xl lg:text-h1 text-dark tracking-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {hero.titlePrefix} <br className="hidden sm:inline" />
            {hero.titleMiddle}{' '}
            <span className="bg-gradient-hero-network bg-clip-text text-transparent">
              {hero.highlightWord}
            </span>
          </motion.h1>

          <motion.p
            className="mt-7 sm:mt-8 font-sans font-normal text-dark-muted text-p2 sm:text-lg lg:text-b1 max-w-xs sm:max-w-xl lg:max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          >
            {hero.description}
          </motion.p>

          <motion.div
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          >
            <Link
              href={hero.ctaDonate.href}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-sans font-medium text-b2 shadow-lg shadow-primary/25 hover:bg-primary-hover hover:shadow-xl hover:shadow-primary/30 hover:scale-105 active:scale-98 transition-all duration-200 w-full sm:w-auto"
            >
              <span>{hero.ctaDonate.text}</span>
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M3.33334 8H12.6667M12.6667 8L8.00001 3.33334M12.6667 8L8.00001 12.6667"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <Link
              href={hero.ctaVideo.href}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-dark font-sans font-medium text-b2 shadow-sm border border-gray-100 hover:shadow-md hover:scale-105 active:scale-98 transition-all duration-200 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center w-5 h-5 text-primary">
                <svg
                  className="w-3.5 h-3.5 fill-current"
                  viewBox="0 0 16 18"
                >
                  <path d="M15 9L1.5 0.772722L1.5 17.2273L15 9Z" />
                </svg>
              </span>
              <span>{hero.ctaVideo.text}</span>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
