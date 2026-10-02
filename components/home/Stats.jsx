import { motion } from 'framer-motion'
import Container from '@/components/common/Container'
import themeData from '@/data/ecommerce-theme.json'

export default function Stats() {
  const { stats } = themeData

  return (
    <section className="relative py-14 sm:py-16 md:py-20 bg-surface-stats z-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0 items-center max-w-md md:max-w-none mx-auto">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`flex flex-col items-center justify-center text-center ${
                idx < stats.length - 1 ? 'md:border-r md:border-gray-200/80' : ''
              } px-4`}
            >
              <span
                className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-h2 leading-tight"
                style={{ color: stat.color }}
              >
                {stat.value}
              </span>
              <span className="font-sans text-gray-500 font-medium text-sm sm:text-base mt-2 sm:mt-3">
                {stat.label}
              </span>

              {idx < stats.length - 1 && (
                <div className="w-20 h-px bg-slate-200 mt-6 md:hidden" />
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
