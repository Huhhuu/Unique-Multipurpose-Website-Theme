import Image from 'next/image'
import { motion } from 'framer-motion'
import Container from '@/components/common/Container'
import themeData from '@/data/ecommerce-theme.json'

export default function SellEverywhere() {
  const { sellEverywhere } = themeData

  return (
    <section className="relative py-16 md:py-24 z-10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[520px]">
              <div className="relative h-[270px] sm:h-[302px] mx-auto">
                <div className="absolute left-0 bottom-0 w-[240px] sm:w-[324px] h-[195px] sm:h-[263px] bg-[#3DB0E5] rounded-none overflow-hidden z-0">
                  <div className="absolute inset-x-0 bottom-0 flex justify-center pointer-events-none">
                    <Image
                      src={sellEverywhere.models.primary}
                      alt="Store Owner"
                      width={400}
                      height={500}
                      className="w-[238px] sm:w-[320px] h-auto object-contain block translate-y-[2px]"
                    />
                  </div>
                </div>

                <div className="absolute right-0 sm:right-auto sm:left-[292px] top-0 w-[108px] sm:w-[145px] h-[175px] sm:h-[236px] overflow-hidden rounded-none z-10 shadow-sm">
                  <Image
                    src={sellEverywhere.models.secondary}
                    alt="Fashion Model"
                    width={300}
                    height={482}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              <div className="relative z-20 -mt-6 ml-0 sm:ml-6 flex gap-2 sm:gap-3">
                {sellEverywhere.cards.map((card, idx) => (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * idx }}
                    whileHover={{ y: -4 }}
                    className="flex-1 sm:flex-none sm:w-[157px] h-[180px] sm:h-[208px] bg-white rounded-2xl p-2.5 sm:p-4 shadow-[0_12px_32px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col justify-between shrink-0"
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 relative">
                      <Image
                        src={card.icon}
                        alt={card.channel}
                        width={24}
                        height={24}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="relative h-12 sm:h-20 flex items-center justify-center my-1">
                      <Image
                        src={card.image}
                        alt={card.name}
                        width={120}
                        height={80}
                        className="max-h-full w-auto object-contain"
                      />
                    </div>

                    <div className="text-center">
                      <div className="font-sans text-[11px] sm:text-xs text-gray-500 font-medium truncate">
                        {card.name}
                      </div>
                      <div className="font-heading font-bold text-xs sm:text-sm text-[#1F2326] mt-0.5">
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
              className="font-heading font-bold text-3xl sm:text-4xl lg:text-[46px] leading-[1.18] text-[#1F2326] mb-5"
            >
              {sellEverywhere.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-sans text-gray-500 text-sm sm:text-base leading-relaxed mb-8 max-w-lg"
            >
              {sellEverywhere.description}
            </motion.p>

            <ul className="space-y-4 sm:space-y-5">
              {sellEverywhere.features.map((feature, idx) => (
                <motion.li
                  key={feature.id}
                  initial={{ opacity: 0, x: 16 }}
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
        </div>
      </Container>
    </section>
  )
}
