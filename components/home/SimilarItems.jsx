import { motion } from 'framer-motion'
import Container from '@/components/common/Container'
import AccordionGroup from '@/components/organisms/AccordionGroup'
import themeData from '@/data/ecommerce-theme.json'

export default function SimilarItems() {
  const { similarItems } = themeData

  return (
    <section id="similar-items" className="relative py-16 md:py-24 z-10 scroll-mt-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-6 lg:pr-6">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-block text-primary font-heading font-bold text-xs uppercase tracking-widest mb-3"
            >
              {similarItems.category}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading font-bold text-3xl sm:text-4xl lg:text-h2 leading-tight text-dark mb-5"
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

            <AccordionGroup
              items={similarItems.accordion}
              initialOpen={{ care: true, material: true }}
            />
          </div>

          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-md sm:max-w-product-card aspect-shield filter drop-shadow-shield"
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
