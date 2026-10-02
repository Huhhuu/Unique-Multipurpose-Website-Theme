import Image from 'next/image'
import { motion } from 'framer-motion'
import Container from '@/components/common/Container'
import themeData from '@/data/ecommerce-theme.json'

export default function SellEverywhere() {
  const { sellEverywhere } = themeData

  return (
    <section className="relative py-14 sm:py-20 md:py-24 z-10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 lg:col-span-6 flex justify-center">
            <div className="relative w-sell-mockup-mobile sm:w-auto sm:max-w-md lg:w-sell-mockup lg:max-w-sell-mockup mx-auto">
              <div className="relative h-sell-models-mobile lg:h-sell-models-desktop mx-auto">
                <div className="absolute left-0 top-sell-prim-top lg:top-sell-prim-top-desktop w-sell-model-primary-mobile lg:w-sell-model-primary h-sell-model-primary-mobile lg:h-sell-model-primary bg-secondary-blue overflow-hidden z-0">
                  <div className="absolute inset-x-0 bottom-0 flex justify-center pointer-events-none">
                    <Image
                      src={sellEverywhere.models.primary}
                      alt="Store Owner"
                      width={400}
                      height={500}
                      className="w-full h-auto object-contain block translate-y-0.5"
                    />
                  </div>
                </div>

                <div className="absolute left-sell-sec-left lg:left-sell-sec-left-desktop top-0 w-sell-model-secondary-mobile lg:w-sell-model-secondary h-sell-model-secondary-mobile lg:h-sell-model-secondary overflow-hidden z-10 shadow-sm">
                  <Image
                    src={sellEverywhere.models.secondary}
                    alt="Fashion Model"
                    width={300}
                    height={482}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              <div className="relative z-20 -mt-3.5 lg:-mt-6 left-sell-cards-left lg:left-6 flex justify-between gap-2 lg:gap-3 w-sell-cards-group-mobile lg:w-sell-cards-group">
                {sellEverywhere.cards.map((card, idx) => (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * idx }}
                    whileHover={{ y: -4 }}
                    className="w-sell-card-mobile lg:w-sell-card h-sell-card-mobile lg:h-sell-card bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-4 shadow-product border border-gray-100 flex flex-col justify-between shrink-0"
                  >
                    <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 relative">
                      <Image
                        src={card.icon}
                        alt={card.channel}
                        width={24}
                        height={24}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="relative h-12 sm:h-16 lg:h-20 flex items-center justify-center my-1">
                      <Image
                        src={card.image}
                        alt={card.name}
                        width={120}
                        height={80}
                        className="max-h-full w-auto object-contain"
                      />
                    </div>

                    <div className="text-center">
                      <div className="font-sans text-b4 sm:text-xs text-gray-500 font-medium truncate">
                        {card.name}
                      </div>
                      <div className="font-heading font-bold text-xs sm:text-sm text-dark mt-0.5">
                        {card.price}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-6 lg:pl-6">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-heading font-bold text-2xl sm:text-3xl lg:text-h2 leading-tight text-dark mb-4 sm:mb-5"
            >
              {sellEverywhere.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-sans text-gray-500 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-lg"
            >
              {sellEverywhere.description}
            </motion.p>

            <ul className="space-y-3.5 sm:space-y-5">
              {sellEverywhere.features.map((feature, idx) => (
                <motion.li
                  key={feature.id}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * idx }}
                  className="flex items-center gap-3 sm:gap-3.5"
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
        </div>
      </Container>
    </section>
  )
}
