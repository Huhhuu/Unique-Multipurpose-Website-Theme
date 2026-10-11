import { motion } from 'framer-motion'
import Container from '@/components/common/Container'

export default function ProductsHero({ totalCount, searchQuery, onSearchChange }) {
  return (
    <section className="relative overflow-hidden bg-white -mt-20 pt-28 md:pt-36 lg:pt-40 pb-12 sm:pb-16">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(rgba(22, 99, 249, 0.16) 1.5px, transparent 1.5px)',
            backgroundSize: '1.5rem 1.5rem',
            maskImage: 'radial-gradient(ellipse 90% 70% at 50% 15%, black 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 15%, black 40%, transparent 100%)',
          }}
        />

        <div
          className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[70vw] max-w-5xl aspect-[2/1] rounded-full pointer-events-none blur-3xl opacity-75"
          style={{
            background: 'radial-gradient(circle, rgba(81, 180, 250, 0.6) 0%, rgba(22, 99, 249, 0.3) 45%, transparent 75%)',
            transform: 'translateZ(0)',
          }}
        />

        <div
          className="absolute top-[10%] -right-[15%] md:-right-[5%] w-[45vw] max-w-xl aspect-square rounded-full pointer-events-none blur-3xl opacity-70"
          style={{
            background: 'radial-gradient(circle, rgba(249, 97, 216, 0.55) 0%, rgba(248, 166, 240, 0.3) 50%, transparent 75%)',
            transform: 'translateZ(0)',
          }}
        />

        <div
          className="absolute top-[20%] -left-[15%] md:-left-[5%] w-[42vw] max-w-lg aspect-square rounded-full pointer-events-none blur-3xl opacity-65"
          style={{
            background: 'radial-gradient(circle, rgba(245, 149, 58, 0.45) 0%, rgba(248, 217, 151, 0.3) 50%, transparent 75%)',
            transform: 'translateZ(0)',
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-sans text-xs font-semibold mb-5 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Curated Collections • {totalCount} Items Available
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-h3 sm:text-h2 lg:text-h1 text-dark tracking-tight leading-tight"
          >
            Discover Modern{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-pink via-primary to-secondary-blue">
              Fashion & Essentials
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 font-sans text-b2 sm:text-b1 text-dark-muted max-w-2xl mx-auto leading-relaxed"
          >
            Explore handcrafted tailoring, contemporary streetwear, and signature lifestyle accessories designed for everyday confidence and effortless elegance.
          </motion.p>
        </div>
      </Container>
    </section>
  )
}
