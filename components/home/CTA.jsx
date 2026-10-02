import Link from 'next/link'
import { motion } from 'framer-motion'
import Container from '@/components/common/Container'

export default function CTA() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 z-10">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-[1170px] mx-auto rounded-[24px] sm:rounded-[32px] py-14 sm:py-16 md:py-20 px-6 sm:px-12 text-center text-white overflow-hidden shadow-[0_20px_50px_rgba(79,70,229,0.25)]"
          style={{
            background: 'linear-gradient(135deg, #4A56F6 0%, #7645F8 100%)',
          }}
        >
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-tight tracking-tight">
              Your Own Online Store is Just a Few Clicks Away
            </h2>

            <div className="mt-8 sm:mt-10">
              <Link
                href="/shop"
                className="inline-block bg-white text-[#1F2326] font-heading font-bold text-base sm:text-lg px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl shadow-lg hover:bg-gray-50 hover:shadow-xl transition-all duration-200 active:scale-95"
              >
                Get Started for free
              </Link>
            </div>

            <p className="mt-5 font-sans text-white/90 text-sm sm:text-base font-normal">
              No credit card required — pay when you&apos;re ready.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
