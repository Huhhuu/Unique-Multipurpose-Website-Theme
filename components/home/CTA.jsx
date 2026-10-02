import Link from 'next/link'
import { motion } from 'framer-motion'
import Container from '@/components/common/Container'
import themeData from '@/data/ecommerce-theme.json'

export default function CTA() {
  const { cta } = themeData

  return (
    <section className="relative py-12 sm:py-16 md:py-20 z-10">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-card mx-auto rounded-3xl bg-gradient-cta py-14 sm:py-16 md:py-20 px-6 sm:px-12 text-center text-white overflow-hidden shadow-cta"
        >
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-heading font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-h2 leading-tight tracking-tight">
              {cta.title}
            </h2>

            <div className="mt-8 sm:mt-10">
              <Link
                href={cta.actionUrl}
                className="inline-block bg-white text-dark font-heading font-bold text-base sm:text-lg px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl shadow-lg hover:bg-gray-50 hover:shadow-xl transition-all duration-200 active:scale-95"
              >
                {cta.actionText}
              </Link>
            </div>

            <p className="mt-5 font-sans text-white/90 text-sm sm:text-base font-normal">
              {cta.note}
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
