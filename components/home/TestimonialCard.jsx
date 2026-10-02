import Image from 'next/image'
import { motion } from 'framer-motion'
import Container from '@/components/common/Container'
import themeData from '@/data/ecommerce-theme.json'

export default function TestimonialCard() {
  const { testimonials } = themeData
  const current = testimonials[0]

  return (
    <section className="relative pt-16 sm:pt-20 pb-16 sm:pb-24 z-10">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-[1170px] mx-auto pt-[60px] sm:pt-[71px]"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
            <div className="w-[120px] h-[120px] sm:w-[142px] sm:h-[142px] rounded-full shadow-lg overflow-hidden flex items-center justify-center">
              <Image
                src={current.avatar}
                alt={current.name}
                width={142}
                height={142}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div
            className="relative rounded-[20px] pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-12 lg:pb-16 px-5 sm:px-10 md:px-14 lg:px-16 text-center shadow-[0_20px_50px_rgba(22,99,249,0.22)] overflow-hidden min-h-[420px] sm:min-h-[460px] lg:min-h-[501px] flex flex-col items-center justify-center"
            style={{
              background: 'linear-gradient(90deg, #3F56EE 0%, #5094FA 100%)',
            }}
          >
            <div className="absolute top-16 sm:top-24 lg:top-[150px] left-3 sm:left-10 lg:left-[90px] w-14 sm:w-20 lg:w-[128px] pointer-events-none select-none z-0">
              <Image
                src="/images/ecommerce/testimonials/quote-left.svg"
                alt=""
                width={128}
                height={116}
                className="w-full h-auto"
              />
            </div>

            <div className="absolute bottom-6 sm:bottom-10 lg:bottom-[45px] right-3 sm:right-10 lg:right-[90px] w-14 sm:w-20 lg:w-[128px] pointer-events-none select-none z-0">
              <Image
                src="/images/ecommerce/testimonials/quote-right.svg"
                alt=""
                width={128}
                height={116}
                className="w-full h-auto"
              />
            </div>

            <div className="relative z-10 max-w-[913px] mx-auto w-full">
              <h3 className="font-heading font-semibold text-white text-[18px] sm:text-[20px] leading-[26px] sm:leading-[28px]">
                {current.name}
              </h3>
              <p className="font-sans font-normal text-white text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] mt-1">
                {current.role}
              </p>

              <blockquote className="font-heading font-bold text-white text-[17px] sm:text-[22px] md:text-[28px] lg:text-[34px] leading-snug sm:leading-normal md:leading-[38px] lg:leading-[42px] mt-6 sm:mt-7 lg:mt-8">
                {current.quote}
              </blockquote>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2.5 sm:gap-3 mt-8 sm:mt-10">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D6E4FF]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#D6E4FF]" />
            <span className="w-3.5 h-3.5 rounded-full bg-[#1663F9]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#D6E4FF]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#D6E4FF]" />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
