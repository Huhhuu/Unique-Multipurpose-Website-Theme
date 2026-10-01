import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '@/components/common/Container'
import themeData from '@/data/ecommerce-theme.json'

export default function SimilarItems() {
  const { similarItems } = themeData
  const [openItems, setOpenItems] = useState({ care: true, material: true })

  const toggleAccordion = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <section className="relative py-16 md:py-24 z-10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-6 lg:pr-6">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block text-sm md:text-base font-medium text-gray-500 tracking-wide mb-3"
            >
              {similarItems.category}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading font-bold text-3xl sm:text-4xl lg:text-[46px] leading-[1.18] text-[#1F2326] mb-5"
            >
              {similarItems.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-sans text-gray-500 text-sm sm:text-base leading-relaxed mb-10 max-w-lg"
            >
              {similarItems.description}
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 pt-2">
              {similarItems.accordion.map((item) => {
                const isOpen = !!openItems[item.id]

                return (
                  <div key={item.id} className="flex items-start gap-4">
                    <button
                      type="button"
                      onClick={() => toggleAccordion(item.id)}
                      className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:border-primary hover:text-primary transition-colors shrink-0 focus:outline-none focus:ring-2 focus:ring-primary/20"
                      aria-label={`Toggle ${item.title}`}
                    >
                      <motion.svg
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </motion.svg>
                    </button>

                    <div>
                      <button
                        type="button"
                        onClick={() => toggleAccordion(item.id)}
                        className="text-left font-heading font-bold text-sm sm:text-base text-[#1F2326] hover:text-primary transition-colors focus:outline-none"
                      >
                        {item.title}
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <p className="font-sans text-xs sm:text-sm text-gray-500 mt-1">
                              {item.content}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-[440px] sm:max-w-[460px] aspect-[460/530] filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
            >
              <svg
                viewBox="0 0 460 530"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <clipPath id="hexagon-shield-clip">
                    <path d="M 202.27 15.97 Q 230.00 0.00 257.73 15.97 L 432.27 116.53 Q 460.00 132.50 460.00 164.50 L 460.00 365.50 Q 460.00 397.50 432.27 413.47 L 257.73 514.03 Q 230.00 530.00 202.27 514.03 L 27.73 413.47 Q 0.00 397.50 0.00 365.50 L 0.00 164.50 Q 0.00 132.50 27.73 116.53 Z" />
                  </clipPath>
                </defs>
                <image
                  href={similarItems.image}
                  width="100%"
                  height="100%"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath="url(#hexagon-shield-clip)"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}
