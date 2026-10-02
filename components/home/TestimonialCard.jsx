import Image from 'next/image'
import { motion } from 'framer-motion'
import Container from '@/components/common/Container'
import themeData from '@/data/ecommerce-theme.json'

export default function TestimonialCard() {
  const { testimonials } = themeData
  const current = testimonials[0]

  return (
    <section className="relative pt-20 pb-16 sm:pb-24 z-10">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-card mx-auto"
        >
          <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full shadow-lg overflow-hidden flex items-center justify-center">
              <Image
                src={current.avatar}
                alt={current.name}
                width={144}
                height={144}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="relative rounded-card bg-gradient-testimonial pt-20 sm:pt-24 pb-12 sm:pb-16 px-6 sm:px-12 md:px-16 text-center shadow-testimonial overflow-hidden">
            <div className="absolute top-16 sm:top-24 lg:top-36 left-4 sm:left-12 lg:left-24 w-16 sm:w-24 lg:w-32 pointer-events-none select-none z-0">
              <Image
                src="/images/ecommerce/testimonials/quote-left.svg"
                alt=""
                width={128}
                height={116}
                className="w-full h-auto"
              />
            </div>

            <div className="absolute bottom-6 sm:bottom-10 lg:bottom-12 right-4 sm:right-12 lg:right-24 w-16 sm:w-24 lg:w-32 pointer-events-none select-none z-0">
              <Image
                src="/images/ecommerce/testimonials/quote-right.svg"
                alt=""
                width={128}
                height={116}
                className="w-full h-auto"
              />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto w-full">
              <h3 className="font-heading font-semibold text-white text-lg sm:text-h5">
                {current.name}
              </h3>
              <p className="font-sans font-normal text-white text-sm sm:text-b2 mt-1">
                {current.role}
              </p>

              <blockquote className="font-heading font-bold text-white text-lg sm:text-2xl lg:text-h3 mt-6 sm:mt-8">
                {current.quote}
              </blockquote>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2.5 sm:gap-3 mt-8 sm:mt-10">
            <span className="w-2.5 h-2.5 rounded-full bg-primary-dot" />
            <span className="w-2.5 h-2.5 rounded-full bg-primary-dot" />
            <span className="w-3.5 h-3.5 rounded-full bg-primary" />
            <span className="w-2.5 h-2.5 rounded-full bg-primary-dot" />
            <span className="w-2.5 h-2.5 rounded-full bg-primary-dot" />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
