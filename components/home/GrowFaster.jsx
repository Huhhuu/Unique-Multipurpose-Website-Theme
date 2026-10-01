import Image from 'next/image'
import { motion } from 'framer-motion'
import Container from '@/components/common/Container'
import themeData from '@/data/ecommerce-theme.json'

export default function GrowFaster() {
  const { growFaster } = themeData

  return (
    <section className="relative py-16 md:py-24 z-10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          <div className="lg:col-span-6 lg:pr-6">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-heading font-bold text-3xl sm:text-4xl lg:text-[46px] leading-[1.18] text-[#1F2326] mb-5"
            >
              {growFaster.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-sans text-gray-500 text-sm sm:text-base leading-relaxed mb-8 max-w-lg"
            >
              {growFaster.description}
            </motion.p>

            <ul className="space-y-4 sm:space-y-5">
              {growFaster.features.map((feature, idx) => (
                <motion.li
                  key={feature.id}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * idx }}
                  className="flex items-center gap-3.5"
                >
                  <div className="w-5 h-5 shrink-0 relative flex items-center justify-center">
                    <Image
                      src={feature.icon}
                      alt=""
                      width={20}
                      height={20}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-sans text-sm sm:text-base font-medium text-[#1F2326] leading-snug">
                    {feature.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[500px] flex items-center justify-center gap-4 sm:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="w-1/2 bg-white rounded-2xl p-4 sm:p-5 shadow-[0_16px_36px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="font-heading font-bold text-base sm:text-lg tracking-tight select-none">
                      <span className="text-[#4285F4]">G</span>
                      <span className="text-[#EA4335]">o</span>
                      <span className="text-[#FBBC05]">o</span>
                      <span className="text-[#4285F4]">g</span>
                      <span className="text-[#34A853]">l</span>
                      <span className="text-[#EA4335]">e</span>
                    </div>
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>

                  <div className="relative h-28 sm:h-36 flex items-center justify-center mb-6">
                    <Image
                      src={growFaster.cards.google.image}
                      alt={growFaster.cards.google.name}
                      width={180}
                      height={100}
                      className="max-h-full w-auto object-contain"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="w-16 h-2 bg-gray-100 rounded-full" />
                    <button
                      type="button"
                      className="bg-primary hover:bg-blue-600 text-white text-[11px] sm:text-xs font-semibold px-3 py-1.5 rounded-md transition-colors"
                    >
                      {growFaster.cards.google.actionText}
                    </button>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <div className="w-full h-2 bg-gray-100 rounded-full" />
                    <div className="w-3/4 h-2 bg-gray-100 rounded-full" />
                  </div>
                </div>
              </motion.div>

              <div className="w-1/2 flex flex-col gap-4 sm:gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl p-4 shadow-[0_16px_36px_rgba(0,0,0,0.08)] border border-gray-100"
                >
                  <div className="w-5 h-5 relative mb-2">
                    <Image
                      src={growFaster.cards.facebook.icon}
                      alt="Facebook"
                      width={20}
                      height={20}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="relative h-20 sm:h-24 flex items-center justify-center mb-3">
                    <Image
                      src={growFaster.cards.facebook.image}
                      alt={growFaster.cards.facebook.name}
                      width={100}
                      height={100}
                      className="max-h-full w-auto object-contain"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <div className="w-14 h-2 bg-gray-100 rounded-full" />
                    <button
                      type="button"
                      className="bg-primary hover:bg-blue-600 text-white text-[11px] sm:text-xs font-semibold px-3 py-1.5 rounded-md transition-colors"
                    >
                      {growFaster.cards.facebook.actionText}
                    </button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl p-4 shadow-[0_16px_36px_rgba(0,0,0,0.08)] border border-gray-100"
                >
                  <div className="w-5 h-5 relative mb-2">
                    <Image
                      src={growFaster.cards.amazon.icon}
                      alt="Amazon"
                      width={20}
                      height={20}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="relative h-16 sm:h-20 flex items-center justify-center mb-3">
                    <Image
                      src={growFaster.cards.amazon.image}
                      alt={growFaster.cards.amazon.name}
                      width={140}
                      height={90}
                      className="max-h-full w-auto object-contain"
                    />
                  </div>

                  <div className="space-y-1.5 mb-3">
                    <div className="w-full h-2 bg-gray-100 rounded-full" />
                    <div className="w-2/3 h-2 bg-gray-100 rounded-full" />
                  </div>

                  <button
                    type="button"
                    className="w-full bg-primary hover:bg-blue-600 text-white text-xs font-semibold py-2 rounded-lg transition-colors text-center"
                  >
                    {growFaster.cards.amazon.actionText}
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
