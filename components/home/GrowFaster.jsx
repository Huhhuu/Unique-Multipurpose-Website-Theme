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
              className="font-heading font-bold text-3xl sm:text-4xl lg:text-h2 leading-tight text-dark mb-5"
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
                  <span className="font-sans text-sm sm:text-base font-medium text-dark leading-snug">
                    {feature.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-grow-mockup-mobile lg:w-grow-mockup max-w-grow-mockup-mobile lg:max-w-grow-mockup flex items-start justify-center gap-grow-cols-gap-mobile lg:gap-grow-cols-gap mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="w-grow-card-mobile lg:w-grow-card h-grow-google-mobile lg:h-grow-google mt-grow-google-top-mobile lg:mt-grow-google-top bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-5 shadow-card-elevated border border-gray-100 flex flex-col justify-between shrink-0"
              >
                <div className="flex items-center justify-between">
                  <div className="font-heading font-medium text-xs sm:text-lg tracking-tight select-none">
                    <span className="text-google-blue">G</span>
                    <span className="text-google-red">o</span>
                    <span className="text-google-yellow">o</span>
                    <span className="text-google-blue">g</span>
                    <span className="text-google-green">l</span>
                    <span className="text-google-red">e</span>
                  </div>
                  <svg
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400"
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

                <div className="relative my-auto flex items-center justify-center py-2 sm:py-4">
                  <Image
                    src={growFaster.cards.google.image}
                    alt={growFaster.cards.google.name}
                    width={160}
                    height={90}
                    className="w-auto h-14 sm:h-24 object-contain"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between gap-1.5 sm:gap-2 mb-2 sm:mb-3.5">
                    <div className="space-y-0.5 sm:space-y-1">
                      <div className="w-10 sm:w-16 h-1 sm:h-1.5 bg-gray-100 rounded-full" />
                      <div className="w-6 sm:w-10 h-1 sm:h-1.5 bg-gray-100 rounded-full" />
                    </div>
                    <button
                      type="button"
                      className="bg-primary hover:bg-primary-hover text-white text-2xs sm:text-xs font-medium px-2 py-1 sm:px-3 sm:py-1.5 rounded sm:rounded-md transition-colors"
                    >
                      {growFaster.cards.google.actionText}
                    </button>
                  </div>

                  <div className="space-y-1 sm:space-y-1.5">
                    <div className="w-full h-1 sm:h-1.5 bg-gray-100 rounded-full" />
                    <div className="w-3/4 h-1 sm:h-1.5 bg-gray-100 rounded-full" />
                    <div className="w-2/5 h-1 sm:h-1.5 bg-gray-100 rounded-full" />
                  </div>
                </div>
              </motion.div>

              <div className="w-grow-card-mobile lg:w-grow-card flex flex-col gap-grow-right-gap-mobile lg:gap-grow-right-gap shrink-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  whileHover={{ y: -4 }}
                  className="w-grow-card-mobile lg:w-grow-card h-grow-subcard-mobile lg:h-grow-subcard bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-4 shadow-card-elevated border border-gray-100 flex flex-col justify-between shrink-0"
                >
                  <div className="w-4 h-4 sm:w-6 sm:h-6 relative">
                    <Image
                      src={growFaster.cards.facebook.icon}
                      alt="Facebook"
                      width={24}
                      height={24}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="relative my-auto flex items-center justify-center py-1 sm:py-2">
                    <Image
                      src={growFaster.cards.facebook.image}
                      alt={growFaster.cards.facebook.name}
                      width={90}
                      height={90}
                      className="w-auto h-14 sm:h-24 object-contain"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-1.5 sm:gap-2">
                    <div className="space-y-0.5 sm:space-y-1">
                      <div className="w-10 sm:w-14 h-1 sm:h-1.5 bg-gray-100 rounded-full" />
                      <div className="w-6 sm:w-8 h-1 sm:h-1.5 bg-gray-100 rounded-full" />
                    </div>
                    <button
                      type="button"
                      className="bg-primary hover:bg-primary-hover text-white text-2xs sm:text-xs font-medium px-2 py-1 sm:px-3 sm:py-1.5 rounded sm:rounded-md transition-colors"
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
                  className="w-grow-card-mobile lg:w-grow-card h-grow-subcard-mobile lg:h-grow-subcard bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-4 shadow-card-elevated border border-gray-100 flex flex-col justify-between shrink-0"
                >
                  <div className="w-4 h-4 sm:w-6 sm:h-6 relative">
                    <Image
                      src={growFaster.cards.amazon.icon}
                      alt="Amazon"
                      width={24}
                      height={24}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="relative my-auto flex items-center justify-center py-1">
                    <Image
                      src={growFaster.cards.amazon.image}
                      alt={growFaster.cards.amazon.name}
                      width={120}
                      height={75}
                      className="w-auto h-11 sm:h-18 object-contain"
                    />
                  </div>

                  <div>
                    <div className="space-y-1 sm:space-y-1.5 mb-2 sm:mb-3">
                      <div className="w-full h-1 sm:h-1.5 bg-gray-100 rounded-full" />
                      <div className="w-3/4 h-1 sm:h-1.5 bg-gray-100 rounded-full" />
                      <div className="w-2/5 h-1 sm:h-1.5 bg-gray-100 rounded-full" />
                    </div>

                    <button
                      type="button"
                      className="w-full bg-primary hover:bg-primary-hover text-white text-2xs sm:text-xs font-medium py-1 sm:py-2 rounded sm:rounded-md transition-colors text-center"
                    >
                      {growFaster.cards.amazon.actionText}
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
