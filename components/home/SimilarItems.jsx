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

          <div className="lg:col-span-6 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-similar-shield sm:w-similar-shield-lg aspect-52/63"
            >
              <div
                className="absolute inset-0 bg-yellow-400"
                style={{
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                }}
              />
              <div
                className="absolute inset-1.5 overflow-hidden"
                style={{
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                }}
              >
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                  style={{
                    backgroundImage: `url(${similarItems.modelImage})`,
                  }}
                  role="img"
                  aria-label="Model with stylish sunglasses and white hat"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}
